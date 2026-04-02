# leo-giraud

Application **Vite + React** — portfolio **Leo Giraud** (artiste 3D), basée sur le [modèle Orbisite](../model) et [`@orbisite/blocks`](https://github.com/Orbisite/blocks) (npm / GitHub Packages).

## Prérequis

- Dépôt [`leo-giraud-api`](../leo-giraud-api) poussé sur GitHub (JSON + images en raw).
- `npm install` — pour `@orbisite/blocks`, un token GitHub Packages (`GITHUB_PACKAGES_TOKEN`) peut être requis (voir `.npmrc`).

## Configuration

1. **Par défaut** (`npm run dev` sans `VITE_*` dans `.env.local`) : le site charge l’API depuis GitHub raw [`Orbisite/leo-giraud-api`](https://github.com/Orbisite/leo-giraud-api) (`src/config/remoteData.js`).
2. **API locale** : `npx serve ../leo-giraud-api -l 8787`, puis décommenter les 4 lignes `VITE_*` dans `.env.local` (voir `.env.example`). Si `.env.local` pointe vers `127.0.0.1` sans serveur lancé, le chargement échoue.
3. **Autre dépôt / branche** : définir les 4 `VITE_*` vers vos URLs raw.

## Scripts

| Commande | Action |
|----------|--------|
| `npm run dev` | Serveur de dev |
| `npm run build` | Build production + `dist/404.html` (GitHub Pages) |
| `npm run preview` | Prévisualiser le build |

## Déploiement

Comme pour `orbisite.github.io` : hébergement statique (`gh-pages`, Netlify, etc.) avec `base: '/'` ou adapter `vite.config.js` si le site est servi sous un sous-chemin.

Mettre à jour `canonicalUrl` et `og.url` dans `leo-giraud-api/site.json` avec l’URL réelle du site.

## Dossier du projet

Le répertoire doit s’appeler **`leo-giraud`**. S’il reste **`leo-giraud-site`** (ancien nom), arrête le serveur de dev, ferme l’IDE sur ce dossier, puis renomme : `leo-giraud-site` → `leo-giraud`.
