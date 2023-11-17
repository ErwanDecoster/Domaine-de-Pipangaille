export default defineI18nConfig(() => ({
  legacy: true,
  locale: 'fr',
  messages: {
    fr: {
      learnMore: 'En savoir plus',
      book: 'Réserver',
      bookNow: 'Réserver maintenent',
      photos: "photos",
      index: {
        title: "Accueil",
        welcome: 'Votre séjour au',
        placeDescTitle: 'Le Domaine de Pipangaille',
        placeDescText: 'Le Domaine de Pipangaille, ancienne magnanerie récemment rénovée vous propose un séjour magique dans un cadre idyllique. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événement à fêter, le domaine de Pipangaille est le lieu idéal, situé à une heure de Lyon et de Saint-Étienne, à 45 minutes de Valence et en accès direct sur la ViaRhôna.',
        guestroomDescTitle: "Nos chambres d'hôtes",
        guestroomDescText: "Vous accédez aux chambres en traversant le parc arboré, qui vous amène dans la cour intérieure entourée de pierres, ce qui lui confère un cadre authentique et apaisant. Vous trouverez ensuite une cuisine d'été à votre disposition ainsi qu'une salle de convivialité. Les quatre chambres à la décoration atypique, vous invitant au voyage, sont situées au deuxième étag",
        guestroomDescActionButton: 'Voir les chambres',
        nearDescTitle: 'À proximité',
        nearDescTextPart1: "Idéalement situé proche des grands axes au cœur de la vallée du Rhône, lors de votre séjour au Domaine de Pipangaille, vous pourrez visiter : le Safari de Peaugres, le Palais Idéal du facteur Cheval, le Musée de l’Alambic... Vous pourrez également vous initier au golf avec le golf d'Albon et de St Clair.",
        nearDescTextPart2: "Au cœur du Saint Joseph, vous pourrez aussi déguster les vins locaux et visiter de nombreuses caves. Randonnées, promenades, espace aquatique, vol en montgolfière sont également à proximité. Mais aussi la ViaRhôna en accès direct, ou encore la ViaFluvia, pas très loin.",
      },
      searchEngine: {
        book: 'Réserver',
        part1: 'Pour',
        part2: 'adultes',
        part3: 'et',
        part4: 'enfants,',
        part5: 'du',
        part6: 'au',
        showDisponibility: 'Voir les disponibilités',
      },
      thePlace: {
        title: "Le lieu",
        placeDescTitle: "Le Domaine de Pipangaille",
        placeDescText: "Ancienne magnanerie de plus de 150 ans, la demeure authentique, de caractère et pleine de charme est bercée par le doux tourbillon du Rhône. Outre le charme de la bâtisse vous pourrez profiter du parc, de la piscine et du pavillon d'été pour vous détendre. En accès direct sur la ViaRhôna et au cœur d'un bois, le lieu vous offre une parenthèse mêlant détente, nature et zenitude. La propriété s'étend sur trois hectares, principalement un bois, et dispose d'un parking intérieur et extérieur.",
        eventOrganisationTitle: "Organisation d'événements",
        eventOrganisationText: "Réunions familiales, événements artistiques, anniversaires, mariages, séminaires, dégustations de vins, les propositions sont nombreuses....",
        eventOrganisationActionButton: "Nous contacter",
        ourPhotosTitle: "Nos photos"
      },
      accommodation: {
        title: "Nos hébergements",
        guestroomDescTitle: "Les chambres d'hôtes",
        guestroomDescText: [
          {
            text: "Une décoration et un aménagement atypiques, mêlant originalité et confort, caractérisent nos chambres situées au deuxième étage, conçues pour vous offrir un séjour dépaysant. Nos quatre chambres thématiques sont fonctionnelles pour vous accueillir le temps d'une nuit, d'un week-end ou d'un séjour, que vous soyez particuliers ou professionnels. Le Domaine de Pipangaille vous accueille en couple, en famille ou entre amis.",
          },
        ],
        breakfastTitle: "Petit déjeuner et Table d'hôtes",
        breakfastText: "Le petit déjeuner est servi de 8h00 à 9h30, ou plus tôt sur demande. Il vous est proposé dans la salle à manger ou dans la cour intérieure pleine de charme, à la belle saison. Sous forme de buffet, vous retrouverez le pain traditionnel et ses viennoiseries, du thé bio, le café du torréfacteur, du jus de fruits et des yaourts locaux, ainsi que des fruits de saison. Sur réservation, la table d'hôte est possible afin de partager un moment convivial et gourmand. Nous vous proposons un menu unique \"maison\" ou des planches de charcuteries, fromages, ou salade composée avec des produits locaux et bio.",
        theRoom: "La chambres",
        equipment: "equipements",
        ourProposals: "nos propositions",
        guestTableTitle: "La table d'hôtes",
        guestTableText: "Sur réservation, nous vous proposons la table d'hôtes afin de partager un moment convivial et gourmand. Un menu unique composé d'une cuisine locale gourmande et familale avec des produits locaux et bio. Planche charcuteries fromages, salade gourmande peuvent aussi vous être proposées.",
        summerKitchenTitle: "La cuisine d'été",
        summerKitchenText: [
          {
            text: "Nous mettons à votre disposition une petite cuisine commune toute équipée. Vous disposez des équipements suivants : Four, Frigo, Plaque de cuisson, Lave vaisselle, Lave linge.",
          },
          {
            text: "Un emplacement est prévu pour recharger vos batteries de vélos électriques.",
          }
        ],
        relaxation: "Détente",
        relaxationText: [
          {
            text: "Une piscine est à votre disposition en pleine saison avec transats. Vous y trouverez le pavillon d'été, endroit de convivialité pour y prendre un verre, manger une glace, ou tous simplement vous y détendre.",
          },
          {
            text: "Une salle commune est aussi à votre disposition (canapés, livres, jeux de sociétés)",
          }
        ],
        otherAccommodations: "Nos autres hébergements",
        MoroccanGuestRoom: {
          title: "Chambre Marocaine",
          shortDesc: "Notre chambre familiale aux couleurs chaleureuses, avec toilette et salle d'eau privée, canapé et possibilité de lit séparé.",
          longDesc: [
            {
              text: "L'ambiance marocaine aux couleurs chaleureuses vous dépaysera pour cette chambre de 20 m², adaptée pour 2 adultes et un enfant ou pour un séjour en amoureux. La chambre est composée d'un lit de 1,80 m, d'un canapé-lit, d'un lavabo double vasque et d'une douche spacieuse \"Tadelakt\", d'un toilette séparé et d'un petit espace de rangement. Le couchage peut être configuré en deux lits simples.",
            },
            {
              text: "Pour votre bien-être, la chambre est climatisée en été.",
            },
          ]
        },
        AfricanGuestRoom: {
          title: "Chambre Africaine",
          shortDesc: "Une chambre pour deux aux couleurs qui font voyager, avec salle d'eau privée, table et possibilité de lit séparé.",
          longDesc: [
            {
              text: "Une autre invitation au voyage avec la chambre 'africaine', une chambre aux couleurs qui vous feront voyager. Conçue pour 2 personnes, avec un lit double de 1,80 m ou 2 lits simples, la chambre possède un lavabo, une douche ouverte, des toilettes séparées, un petit espace de rangement, une table et 2 chaises.",
            },
            {
              text: "Pour votre bien-être, la chambre est climatisée en été.",
            },
          ]
        },
        TuscanyGuestRoom: {
          title: "Chambre Toscane",
          shortDesc: "Une agréable chambre aux couleurs romantiques qui vous invite au voyage, avec une salle d'eau privée, une table et un lit double.",
          longDesc: [
            {
              text: "Une chambre romantique aux couleurs délicates sur le thème toscan, une région au centre de l'Italie. Une chambre pour deux personnes équipée d'un lavabo, d'une belle douche, de toilettes séparées, d'un espace de rangement et d'une table.",
            },
            {
              test: "Pour votre bien-être, la chambre est climatisée en été.",
            },
          ]
        },
        CreoleGuestRoom: {
          title: "Chambre Créole",
          shortDesc: "Une chambre aux couleurs originale, avec salle d'eau privée et lit double.",
          longDesc: [
            {
              text: "Une chambre aux couleurs légères s'inspirant des îles créoles. Conçue pour deux personnes, elle est équipée d'un lit double, d'un lavabo et d'une douche. Votre hébergement dispose également de toilettes séparées et d'un grand placard.",
            },
            {
              text: "Pour une totale autonomie, il est possible de louer la cuisine attenante pour un long séjour ou un séjour d'affaires. N'hésitez pas à nous contacter pour plus d'informations.",
            },
            {
              text: "Pour votre bien-être, la chambre est climatisée en été.",
            },
          ]
        },
      },
      near: {
        title: "À proximité",
      }
    },
  }
}))
