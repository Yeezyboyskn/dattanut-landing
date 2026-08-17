from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
SOURCE = Path(r"C:\Users\oscar\.codex\generated_images\01a01138-409f-7ae1-b2ba-9b660385d148\exec-24a25bb9-4c2b-4575-a8dd-a09def7658c8.png")
GREEN = "#64f59b"
CREAM = "#f2f7f3"

def mark(size: int) -> Image.Image:
    scale = size / 64
    img = Image.new("RGBA", (size, size), "#07110c")
    d = ImageDraw.Draw(img)
    def pts(values): return tuple(round(v * scale) for v in values)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=round(16 * scale), fill="#07110c")
    d.ellipse(pts((8, 7, 56, 57)), outline=GREEN, width=max(2, round(3.5 * scale)))
    d.line([pts((19, 37)), pts((29, 34)), pts((37, 20)), pts((45, 41))], fill=GREEN, width=max(2, round(3 * scale)), joint="curve")
    for x, y in ((19, 26), (52, 27), (21, 52), (49, 51)):
        r = max(2, round(3 * scale)); cx, cy = round(x * scale), round(y * scale)
        d.ellipse((cx-r, cy-r, cx+r, cy+r), fill=GREEN)
    return img

def og_card() -> None:
    bg = Image.open(SOURCE).convert("RGB").resize((1200, 630), Image.Resampling.LANCZOS)
    overlay = Image.new("RGBA", bg.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.rectangle((0, 0, 690, 630), fill=(5, 15, 10, 104))
    d.rounded_rectangle((68, 70, 132, 134), radius=16, fill="#07110c", outline=GREEN, width=2)
    overlay.alpha_composite(mark(64), (68, 70))
    bold = ImageFont.truetype(r"C:\Windows\Fonts\arialbd.ttf", 74)
    medium = ImageFont.truetype(r"C:\Windows\Fonts\arialbd.ttf", 29)
    small = ImageFont.truetype(r"C:\Windows\Fonts\arial.ttf", 22)
    d.text((156, 74), "DATTANUT", font=bold, fill=CREAM)
    d.text((72, 205), "INTELIGENCIA QUE DA FRUTOS", font=medium, fill=GREEN)
    d.text((72, 270), "Frutos secos de Chile · Datos trazables", font=small, fill=CREAM)
    d.line((72, 336, 586, 336), fill=GREEN, width=3)
    d.text((72, 372), "yeezyboyskn.github.io/dattanut-landing/", font=small, fill="#a6f4c4")
    final = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")
    for colors in (48, 32, 24, 16, 12, 8):
        indexed = final.quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.FLOYDSTEINBERG)
        indexed.save(PUBLIC / "og-image.png", optimize=True)
        if (PUBLIC / "og-image.png").stat().st_size < 150_000:
            break
    if (PUBLIC / "og-image.png").stat().st_size >= 150_000:
        raise RuntimeError("og-image.png exceeds 150 KB")

def icons() -> None:
    mark(180).save(PUBLIC / "apple-touch-icon.png", optimize=True)
    mark(256).save(PUBLIC / "favicon.ico", sizes=[(16,16),(32,32),(48,48),(64,64)])

og_card()
icons()
print(f"og-image.png: {(PUBLIC / 'og-image.png').stat().st_size} bytes")
