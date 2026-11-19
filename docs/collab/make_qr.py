"""Make print-ready QR codes for the Kosha Life collab page.

Usage:  python make_qr.py "https://your-page-link/?src=BrandName"
Creates qr/kosha-qr.svg (best for printing, any size) and qr/kosha-qr.png (high resolution).
"""
import sys
from pathlib import Path

import segno

if len(sys.argv) != 2 or not sys.argv[1].startswith("http"):
    sys.exit('Usage: python make_qr.py "https://your-page-link/?src=BrandName"')

url = sys.argv[1]
out = Path(__file__).parent / "qr"
out.mkdir(exist_ok=True)

qr = segno.make(url, error="h")  # high error correction: still scans if the packet is creased
qr.save(out / "kosha-qr.svg", scale=10, border=4, dark="#3D2B1F")
qr.save(out / "kosha-qr.png", scale=40, border=4, dark="#3D2B1F")  # ~1500+ px wide
print("Saved to", out, "for", url)
