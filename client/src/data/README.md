# Product data

- **mroProducts.json** – MRO (Maintenance, Repair & Operations) product categories. Used by `/products/mro` and `/products/mro/:slug`.
- To add another category (e.g. Pipes & Valves), add a new JSON file and a corresponding route and page that import it and render with the same layout/SEO patterns.

Each product has:
- **imagePath** – folder name under `client/public/products/mro/` (e.g. `bearings`, `hand-tools`).
- **imageCount** (optional) – if you set this, the app uses exactly this many images. If you omit it, the app discovers how many images exist by loading `1.webp`, `2.webp`, … until one is missing (so you can have 3 for one product, 16 for another, without setting a fixed count).

**Where to add images:** see `client/public/products/mro/README.md`.
