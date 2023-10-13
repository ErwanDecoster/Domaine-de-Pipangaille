# Domaine de Pipangaille

## Description

Le Domaine de Pipangaille est un établissement proposant principalement des chambres d'hôtes. Il est situé en France à Andancette en Drôme. Dans le but de présenter l'établissement à ses clients et de réduire le nombre de réservations via les OTA (Online Tourism Agency), ce site internet a été développé. Le site a pour objectif de présenter le domaine et ses hébergements, ainsi que de proposer différents endroits à visiter aux alentours. Une page de réservation a également été mise en place, avec un formulaire sur la page principale permettant une recherche rapide de disponibilité.

## Points importants

Dans le développement du site, plusieurs points ont été traités avec une plus grande attention :
- Le responsive design
- La rapidité du site
- Les textes alternatifs (ALT, Aria label)
- Les méta-descriptions
- La qualité des images
- Le confort visuel (mode sombre)

### Le responsive design

L'ensemble du site a été conçu et designé de manière à ce qu'il s'adapte parfaitement à tous les formats d'écrans, dans la limite du possible (ne fonctionne pas pour l'Apple Watch).

### Rapidité du site

L'utilisation de Nuxt nous permet de précharger les contenus des pages dont le lien apparaît à l'écran. Nuxt nous a également permis d'utiliser Nuxt Image, qui génère des images de la taille demandée, évitant ainsi de stocker nos images en différentes tailles. De plus, toutes les images sont compressées pour maximiser leur vitesse de chargement.

### Textes alternatifs

Nous avons fait de notre mieux pour rendre le site accessible à tous. Chaque image possède un texte alternatif qui peut être lu par les lecteurs d'écran et autres dispositifs similaires. Tous les boutons ne disposant pas d'un texte visible possèdent également un Aria Label.

### Méta-descriptions

Pour améliorer notre référencement sur les moteurs de recherche et pour obtenir un rendu attrayant lors du partage des pages, nous avons mis en place des méta-descriptions pour chacune de nos pages. Cela nous permet de mieux nous positionner en choisissant les textes que nous souhaitons faire apparaître et d'obtenir un rendu élégant lors du partage de nos pages sur les réseaux sociaux ou par messages.

### Qualité des images

Toutes nos images sont stockées en 4k, mais sont générées par le serveur dans la taille affichée à l'écran de nos visiteurs. Les images de mauvaise qualité ont été améliorées avec différents outils d'upscale. Tous les logos, pictogrammes, icônes, etc., sont au format SVG pour être aussi légers que possible tout en conservant une bonne qualité.

### Confort visuel

Toutes les couleurs du site sont choisies de manière à ce que les textes restent toujours parfaitement lisibles. Si un texte doit être superposé à une image, il a été doté d'une ombre pour le rendre plus lisible, et l'image a été sélectionnée de manière à ce que le contraste reste toujours bon.

## Technologies utilisées

- Nuxt
- Nuxt Image
- Tailwind CSS

## Outils utilisés

Design : Figma

Création du logo : Figma

Développement : VSCode

Amélioration de la qualité des images : [Upscale Media](https://www.upscale.media/fr/upload)

Achat du nom de domaine : Hostinger

Hébergement : Vercel

# Installation du projet

Consultez la [documentation de Nuxt 3](https://nuxt.com/docs/getting-started/introduction) pour en savoir plus.

Attention, le projet utilise des variables d'environnement qui ne sont pas incluses dans ce dépôt.

## Configuration

Assurez-vous d'installer les dépendances :

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Serveur de développement

Lancez le serveur de développement à l'adresse http://localhost:3000
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
