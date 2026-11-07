# 🎪 Carnaval de la Forêt — Générateur de Site Statique (Eleventy / 11ty)

Ce projet permet de gérer chaque vignette dans un fichier Markdown distinct et de régénérer automatiquement `index.html`.

## Structure du projet

- `content/vignettes/` : Chaque vignette possède son fichier Markdown (ex: `01-herisson.md`, `02-blaireau-char.md`) avec ses métadonnées (titre FR/OC, accessoires, sons, photos) et les récits rédigés en Markdown.
- `content/index.njk` : Gabarit qui assemble les données et produit le fichier HTML final bilingue et responsive.
- `.eleventy.js` : Configuration du moteur Eleventy.

## Commandes

### 1. Installation des dépendances (une seule fois)
```bash
npm install
```

### 2. Générer le site `index.html` (dossier `_site/`)
```bash
npm run build
```
Le fichier généré est directement disponible dans `_site/index.html`.

### 3. Mode développement (rechargement en direct lors de la modification des Markdown)
```bash
npm run start
```
Ouvre un serveur local sur `http://localhost:8080` avec actualisation en temps réel dès qu'un fichier Markdown est modifié !
