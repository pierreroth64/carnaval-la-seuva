# 🎪 Carnaval de Lasseube — Site Statique SSG (Eleventy)

Ce projet permet de gérer le site avec un article d'en-tête persistant, des vignettes classées par catégories sans notion de troupe, et un bilinguisme Français / Occitan (Croix Occitane SVG).

## Structure
- `content/edito.md` : Article d'en-tête persistant et dépliable.
- `content/vignettes/` : Les 6 fiches individuelles en Markdown.
- `content/index.njk` : Gabarit compilé par Eleventy.

## Commandes
1. `npm install` (installation initiale)
2. `npm run build` (génère `_site/index.html`)
3. `npm run start` (serveur local en direct sur http://localhost:8080)
