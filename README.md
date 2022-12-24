# Domaine de Pipangaille

## Description

Le domaine de pipangaille est un établissement proposant des hébergements principalement des chambres d'hôtes. L'établissement est situé en France à Andancette en Drôme. Dans l'objectif de presenter l'établissement a ses clients et de diminuer le nombre de réservations via les OTA (Online Tourism Agency) ce site internet fut développé.
Le site a pour objectif de presenter le domaine et ses hébergements mais également de proposer différents endroits à visiter aux alentours. Une page pour les réservations fut aussi mise en place avec un formulaire sur la page principale permet la recherche rapide de disponibilité.

## Points important

Dans le développement du site plusieurs points on était traité avec une plus grande attention :
- Le responsive 
- La rapidité du site
- Les textes alternatifs (ALT, Arias label)
- Les metas description
- La qualité des images
- Le confort visuel (Dark mode)

### Le responsive

L'ensemble du site a etait concu et désigné de façon à ce que le site s'adapte parfaitement à tous les formats d'écrans dans la limite du possible (ne marche pas pour l'Apple Watch)

### Rapidité du site

L'utilisation du Nuxt nous permet de précharger les contenus des pages dont le lien apparaît a l'écran. Nuxt nous a permis d'utiliser Nuxt-image qui génère des images pour la taille demander, cela nous évite de devoir stocker nos images en différentes tailles. Les images sont également toutes compresser de façon à maximiser leurs vitesses de chargement.

### Texte alternatife

Nous avons fait de notre possible pour que le site soit accessible à tous, chaque image possède un texte alternatif qui sera lisible par les lecteurs d'écran ou tous autre dispositif dans ce genre. Tous les boutons ne disposant pas d'un texte visible possèdent également un Aria Label.

### Meta description

Pour un bon référencement sur les moteurs de recherche et pour un joli rendu lors du partage des pages, nous avons mis en place des metas description sur chacune de nos pages celles-ci nous permettent de mieux nous positionner pour le référencement en choisissant les textes que nous souhaitons faire apparaitre mais également de faire de joli rendu lors du partage de nos pages sur les réseaux sociaux ou par messages.

### Qualité des images

Toutes nos images sont stockées en 4k mais sont généré par le serveur dans la taille afficher à l'écran de nos visiteurs. Les images de mauvaise qualité on était traité avec différents outils d'upscale. tous les logos, pictogramme, icône... sont en format SVG pour être le plus léger possible et toujours bénéficier d'une bonne qualité.

### Confort visuel

Toutes les couleurs du site sont placées de façon à ce que les textes restent toujours parfaitement lisible. Dans le cas on nous devait placer un texte par-dessus une image celui-ci a subi l'ajout d'ombres le rendent plus lisible et l'image a été sélectionnée de sorte que le contraste reste toujours bon.

## Technologies utilisé

- Nuxt
- Nuxt-image
- Tailwindcss

## Outils utilisé

Design : Figma

Création logo : Figma

Développement : Vscode

Améliorer qualité d'image : https://www.upscale.media/fr/upload

Achat nom de domaine : hostinger

Hébergement : Vercel


# Instalation du projet
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Attention le projet utilise des variables d'environnement qui ne sont pas présente sur ce repo.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
