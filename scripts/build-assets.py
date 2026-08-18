from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
IMAGES = ROOT / "src" / "assets" / "img"
SOURCE = IMAGES / "logo.webp"
HERO = IMAGES / "hero-orchard.webp"

INK = "#0c0b08"
PANEL = "#17130d"
GOLD = "#d9a05b"
GOLD_LIGHT = "#e8c48a"
CREAM = "#f5efe2"


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(ROOT / "src" / "assets" / "fonts" / name), size)


def transparent_mark() -> Image.Image:
    """Remove the flat white canvas while preserving the supplied client mark."""
    source = Image.open(SOURCE).convert("RGBA")
    pixels = []
    for red, green, blue, _ in source.getdata():
        minimum = min(red, green, blue)
        maximum = max(red, green, blue)
        neutral = maximum - minimum < 18
        if neutral and minimum > 160:
            alpha = 0
        elif neutral and minimum > 90:
            ratio = (160 - minimum) / 70
            alpha = round(255 * ratio * ratio)
        else:
            alpha = 255
        pixels.append((red, green, blue, max(0, min(255, alpha))))
    source.putdata(pixels)
    bounds = source.getbbox()
    return source.crop(bounds) if bounds else source


def fit_mark(mark: Image.Image, size: int, padding: int = 0) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    fitted = ImageOps.contain(mark, (size - padding * 2, size - padding * 2), Image.Resampling.LANCZOS)
    canvas.alpha_composite(fitted, ((size - fitted.width) // 2, (size - fitted.height) // 2))
    return canvas


def app_icon(mark: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), INK)
    draw = ImageDraw.Draw(canvas)
    radius = round(size * 0.22)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=INK, outline=GOLD, width=max(1, size // 64))
    canvas.alpha_composite(fit_mark(mark, size, round(size * 0.11)))
    return canvas


def organization_logo(mark: Image.Image) -> Image.Image:
    width, height = 920, 260
    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    canvas.alpha_composite(fit_mark(mark, 210, 12), (20, 25))
    draw = ImageDraw.Draw(canvas)
    draw.text((260, 58), "DATTANUT", font=font("space-grotesk.woff2", 86), fill=CREAM)
    draw.text((264, 158), "INTELIGENCIA QUE DA FRUTOS", font=font("inter.woff2", 28), fill=GOLD_LIGHT)
    return canvas


def social_card(mark: Image.Image) -> None:
    hero = Image.open(HERO).convert("RGB")
    ratio = 1200 / 630
    if hero.width / hero.height > ratio:
        crop_width = round(hero.height * ratio)
        left = max(0, hero.width - crop_width)
        hero = hero.crop((left, 0, left + crop_width, hero.height))
    else:
        crop_height = round(hero.width / ratio)
        top = max(0, (hero.height - crop_height) // 2)
        hero = hero.crop((0, top, hero.width, top + crop_height))
    hero = hero.resize((1200, 630), Image.Resampling.LANCZOS).convert("RGBA")

    overlay = Image.new("RGBA", hero.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw.rectangle((0, 0, 1200, 630), fill=(12, 11, 8, 86))
    draw.rectangle((0, 0, 760, 630), fill=(12, 11, 8, 218))
    draw.rectangle((0, 0, 5, 630), fill=GOLD)
    overlay.alpha_composite(fit_mark(mark, 104, 5), (70, 58))
    draw.text((192, 70), "DATTANUT", font=font("space-grotesk.woff2", 62), fill=CREAM)
    draw.text((73, 205), "INTELIGENCIA QUE DA FRUTOS", font=font("inter.woff2", 26), fill=GOLD_LIGHT)
    draw.text((72, 267), "Frutos secos de Chile", font=font("space-grotesk.woff2", 48), fill=CREAM)
    draw.text((72, 330), "Datos trazables · Criterio sectorial", font=font("inter.woff2", 25), fill=CREAM)
    draw.line((72, 397, 590, 397), fill=GOLD, width=3)
    draw.text((72, 438), "dattanut.com/", font=font("inter.woff2", 20), fill=GOLD_LIGHT)
    final = Image.alpha_composite(hero, overlay).convert("RGB")

    for colors in (64, 48, 40, 32, 24, 16):
        indexed = final.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
        indexed.save(PUBLIC / "og-image.png", optimize=True)
        if (PUBLIC / "og-image.png").stat().st_size < 150_000:
            break
    if (PUBLIC / "og-image.png").stat().st_size >= 150_000:
        raise RuntimeError("og-image.png exceeds 150 KB")


def main() -> None:
    mark = transparent_mark()
    fit_mark(mark, 256, 8).save(IMAGES / "logo-mark.png", optimize=True)
    fit_mark(mark, 256, 8).save(PUBLIC / "logo-mark.png", optimize=True)
    organization_logo(mark).save(PUBLIC / "logo.png", optimize=True)
    app_icon(mark, 180).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    app_icon(mark, 96).save(PUBLIC / "favicon.png", optimize=True)
    app_icon(mark, 256).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    social_card(mark)
    print(f"logo-mark.png: {(IMAGES / 'logo-mark.png').stat().st_size} bytes")
    print(f"og-image.png: {(PUBLIC / 'og-image.png').stat().st_size} bytes")


if __name__ == "__main__":
    main()
