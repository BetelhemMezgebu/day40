# Addis Eats - Next.js

This project is a Next.js version of Addis Eats, built using the App Router and file-system routing.

## Routes

| Route | File |
|---|---|
| `/` | `app/page.js` |
| `/menu` | `app/menu/page.js` |
| `/menu/[id]` | `app/menu/[id]/page.js` |
| `/cart` | `app/cart/page.js` |
| `/checkout` | `app/checkout/page.js` |

## Special Files

| File | Purpose |
|---|---|
| `app/menu/loading.js` | Loading UI for the menu |
| `app/menu/error.js` | Error UI for the menu |
| `app/not-found.js` | Custom 404 page |
| `app/menu/DishList.jsx` | Menu component, not a route |

## Dynamic Route

The `/menu/[id]` route uses the `id` from the page `params`.

Examples:

- `/menu/kitfo`
- `/menu/doro-wot`
- `/menu/pizza`

An unknown dish ID calls `notFound()`.

## Navigation

Internal navigation uses Next.js `Link` from `next/link`.

## Running the Project

```bash
npm install
npm run dev