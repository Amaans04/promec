# MRO product images

Put images for each MRO product in a **folder named exactly as `imagePath`** in `client/src/data/mroProducts.json`.

## Folder structure

```
client/public/products/mro/
├── bearings/          ← imagePath: "bearings"
│   ├── 1.webp
│   ├── 2.webp
│   └── 3.webp
├── belts/
├── hand-tools/
├── motors/
├── power-tools/
└── ppe/
```

## Rules

- **Folder name** = `imagePath` from each product in `mroProducts.json` (e.g. `bearings`, `hand-tools`, `ppe`).
- **File names**: `1.webp`, `2.webp`, `3.webp`, … (number only, no gaps).
- **Format**: Use WebP for best performance.
- **How many images**: You can use as many as you like (e.g. 3 for one product, 16 for another). Name them `1.webp`, `2.webp`, … with no gaps. The site discovers the count automatically. Optionally set `"imageCount"` in `mroProducts.json` for that product to fix the number; if omitted, it is detected from the files.
