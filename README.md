# CNAPP Dashboard - Exact Clone (Dynamic)

This project implements the dynamic dashboard you requested:
- 3 sections: CSPM Executive Dashboard, CWPP Dashboard, Registry Scan
- Widgets rendered from JSON, can add/remove per category
- Donut charts for donut-type widgets (Recharts)
- Search across widgets
- Modal to add widget name + text + type
- Redux Toolkit used for local state

## Run locally

1. unzip the project
2. Install dependencies:
   ```
   npm install
   ```
3. Run dev server:
   ```
   npm run dev
   ```
4. Open http://localhost:3000

## Notes
- The UI uses plain CSS (no Tailwind) and aims to match the screenshot layout (2 rows x 3 columns).
- The initial data is in `src/data/dashboard.json`.
