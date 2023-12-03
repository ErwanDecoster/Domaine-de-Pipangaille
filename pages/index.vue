<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="relative">
      <div class="relative">
        <img 
          :src="Imgs[71].srcs[0].src" 
          :alt="Imgs[71].alt" 
          :srcset="
            Imgs[71].srcs[0].src + ' 375w, ' +
              Imgs[71].srcs[1].src + ' 768w, ' +
              Imgs[71].srcs[2].src + ' 1920w, ' +
              Imgs[71].srcs[3].src + ' 2048w'"
          sizes="100vw"
          class="w-full max-w-screen-4xl m-auto object-cover h-[75vh] 4xl:h-[65vh] 5xl:h-[50vh] rounded-b-xl bg-[#61845a] font-bold bg"
        >
        <h1 class="mx-auto max-w-screen-xl w-full text-eerie-blacks dark:text-white flex flex-col pl-4 absolute bottom-36 sm:bottom-28 left-1/2 -translate-x-1/2 text-4xl sm:text-6xl">
          <span class="relative w-max">
            {{ $t('index.welcome') }}
            <span class="bg-almond dark:bg-dark-almond absolute -top-1 bottom-0 -inset-x-3 dark:opacity-90 -z-10 rounded-t-lg" />
          </span>
          <span class="relative w-max">
            Domaine de Pipangaille
            <span class="bg-almond dark:bg-dark-almond absolute -bottom-1 top-0 -inset-x-3 dark:opacity-90 -z-10 rounded-b-lg" />
          </span>
        </h1>
      </div>
      <SearchEngine />
    </section>
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-1/3 top-0 bottom-32 sm:bottom-1/3 md:bottom-0 absolute rounded" />
        <div class="p-6 md:pl-10 md:py-10 z-10 relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col gap-2 h-full">
            <h2 class="text-4xl">
              {{ $t('index.placeDescTitle') }}
            </h2>
            <p class="grow">
              {{ $t('index.placeDescText') }} 
            </p>
            <NuxtLink
              :to="localePath({ name: 'the_place'})"
              class="btn-primary"
              :title="$t('thePlace.title')"
            >
              {{ $t('learnMore') }}
            </NuxtLink>
          </div>
          <img 
            :src="Imgs[42].srcs[1].src" 
            :alt="Imgs[42].alt" 
            :srcset="
              Imgs[42].srcs[1].src + ' 488w, ' +
                Imgs[42].srcs[2].src + ' 656w'"
            sizes="488px"
            class="rounded w-full shadow-lg dark:shadow-lg-dark aspect-video object-cover bg-northern_light_grey font-bold"
            loading="lazy"
          >
        </div>
      </div>
      <CardTypeOnReverse 
        :title="$t('index.guestroomDescTitle')" 
        :content="[ $t('index.guestroomDescText') ]"
        :imgs="[ Imgs[63], Imgs[62] ]" 
        :button="[{ target: 'accommodation', content: $t('index.guestroomDescActionButton') }, { target: 'book', content: $t('book.title') }]"
      />
    </section>
    <section class="bg-almond dark:bg-dark-almond w-full min-h-[16rem] my-8 flex items-center py-8">
      <div class="max-w-screen-xl w-full px-4 mx-auto">
        <h2 class="text-4xl w-full">
          {{ $t('index.reviewsTittle')}}
        </h2>
        <div class="max-w-4xl px-2 sm:px-6 gap-2 md:gap-8 flex items-center mx-auto ">
          <button 
            aria-label="Boutton voir avis precedent"
            class="h-40 w-8 duration-150 hover:-translate-x-2"
            @click="PreviousSlide"
          >
            <img 
              src="/images/icon_fleche_gauche.svg"
              loading="lazy"
              height="32"
              width="32"
              alt="flèche en direction de la gauche"
              class="w-8 max-w-none object-cover font-bold dark:invert"
            >
          </button>
          <div class="overflow-hidden flex">
            <div 
              v-for="review in reviews.sort((a,b) => b.review_timestamp - a.review_timestamp)" 
              :key="review"
              tabindex="0"
              class="w-full flex-none my-auto grid gap-4" 
            >
              <div class="relative w-max mx-auto">
                <ul class="flex gap-2">
                  <li 
                    v-for="index in 5"
                    :key="index" 
                    class="h-6 w-6"
                  >
                    <svg 
                      viewBox="0 0 19 17" 
                      class="fill-white" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                    </svg>
                  </li>
                </ul>
                <ul class="flex gap-2 absolute top-0">
                  <li 
                    v-for="star in review.review_rating"
                    :key="star"
                    class="h-6 w-6"
                  >
                    <svg 
                      viewBox="0 0 19 17"
                      class="fill-yellow-red"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.84026 0.463526C8.98994 0.0028702 9.64164 0.0028701 9.79132 0.463525L11.5196 5.78254C11.5865 5.98855 11.7785 6.12803 11.9951 6.12803L17.5878 6.12803C18.0722 6.12804 18.2736 6.74784 17.8817 7.03254L13.3571 10.3199C13.1819 10.4472 13.1085 10.6729 13.1755 10.8789L14.9037 16.1979C15.0534 16.6586 14.5262 17.0416 14.1343 16.7569L9.60968 13.4696C9.43444 13.3423 9.19714 13.3423 9.0219 13.4696L4.49727 16.7569C4.10541 17.0416 3.57817 16.6586 3.72785 16.1979L5.4561 10.8789C5.52304 10.6729 5.44971 10.4472 5.27447 10.3199L0.749839 7.03254C0.357983 6.74784 0.55937 6.12804 1.04373 6.12803L6.63648 6.12803C6.85309 6.12803 7.04507 5.98855 7.11201 5.78254L8.84026 0.463526Z" />
                    </svg>
                  </li>
                </ul>
              </div>
              <p class="max-h-36 overflow-y-scroll">
                {{ review.review_text }}
              </p>
              <p>
                {{ review.author_title }}
                - {{ review.platform_origin }}
                - {{ $d(new Date(review.review_timestamp * 1000)) }}
              </p>
            </div>
          </div>
          <button 
            aria-label="Boutton voir avis suivant"
            class="h-40 w-8 duration-150 hover:translate-x-2"
            @click="NextSlide"
          >
            <img 
              src="/images/icon_fleche_droite.svg" 
              loading="lazy"
              height="32" 
              width="32"
              alt="flèche en direction de la droite"
              class="w-8 max-w-none object-cover font-bold dark:invert"
            >
          </button>
        </div>
      </div>
    </section>
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8">
      <div class="w-full h-full relative">
        <div class="bg-almond dark:bg-dark-almond left-0 right-0 md:right-1/4 top-0 bottom-32 sm:bottom-1/3 md:bottom-8 md:top-8 absolute rounded" />
        <div class="z-10 relative grid md:grid-cols-2">
          <div class="flex flex-col gap-2 h-full md:py-16 p-8">
            <h2 class="text-4xl">
              {{ $t('index.nearDescTitle') }}
            </h2>
            <p class="grow">
              {{ $t('index.nearDescTextPart1') }}
            </p>
            <p class="grow">
              {{ $t('index.nearDescTextPart2') }}
            </p>
            <NuxtLink 
              :to="localePath({ name: 'near'})"
              class="btn-primary"
              :title="$t('near.title')"
            >
              {{ $t('learnMore') }}
            </NuxtLink>
          </div>
          <div class="relative">
            <img 
              :src="Imgs[31].srcs[0].src" 
              :alt="Imgs[31].alt" 
              :srcset="
                Imgs[31].srcs[0].src + ' 309w, ' +
                  Imgs[31].srcs[2].src + ' 378w, ' +
                  Imgs[31].srcs[1].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg w-2/3 md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
            <img 
              :src="Imgs[60].srcs[0].src" 
              :alt="Imgs[60].alt" 
              :srcset="
                Imgs[60].srcs[0].src + ' 309w, ' +
                  Imgs[60].srcs[1].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg w-2/3 ml-auto -mt-4 sm:-mt-20 md:absolute md:bottom-0 md:left-0 md:w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
            <img 
              :src="Imgs[28].srcs[0].src" 
              :alt="Imgs[28].alt" 
              :srcset="
                Imgs[28].srcs[0].src + ' 309w, ' +
                  Imgs[28].srcs[1].src + ' 378w, ' +
                  Imgs[28].srcs[2].src + ' 462w'"
              sizes="298px"
              class="rounded hover:z-10 shadow-lg hidden md:block md:absolute md:top-1/2 md:-translate-y-1/2 md:right-0 w-3/5 aspect-video object-cover bg-northern_light_grey font-bold"
              loading="lazy"
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Imgs } from '@/data';

export default {
  data() {
    return {
      Imgs: Imgs,
      slidesUsable: [],
      reviews: [
        {
          author_title: "Ionut Moldovan",
          review_text: "This place is just great. Big and nice gardens, a pool and very nice rooms. The place is surrounded by forest and is 3 mins walk from Rhône river. The host is just special, very careful with her guests, very careful with the house and very good cook. We spent a great weekend!",
          owner_answer_timestamp: 1591522057,
          review_rating: 5,
          review_timestamp: 1591856600,
          owner_answer: "Merci . Des big bixous Nadia et David. Bel été à vous.",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Alain Marnot",
          review_text: "Très sympathique accueil, beaucoup de caractère pour cette ancien élevage de vers à soie. Nous avons eu la chambre 'Toscane' très agréable et climatisée. Inconvénient les chambres.bres sont toutes (?) au deuxième étage accessible par un escalier en pierres inégales puis en tôle striée. Et accès est peu adapté aux personnes âgées ou avec des problèmes de genoux ou hanches.",
          owner_answer_timestamp: null,
          review_rating: 4,
          review_timestamp: 1691398448,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
        {
          author_title: "john broers",
          review_text: "We kwamen met 5 fietsers vragen of we onze bidons mochten vullen met water. Hebben uiteindelijk ook van een heerlijke lunch genoten. Super aardige mensen. Kan het aanbevelen.",
          owner_answer_timestamp: null,
          review_rating: 5,
          review_timestamp: 1694366744,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
        {
          author_title: "elisa jrdn",
          review_text: "Une très belle maison et un très beau lieu ! L'hôte est vraiment adorable, nous vous remercions et nous reviendrons (Avec mon papa cette fois ! ). Merci pour votre accueil et votre gentillesse.",
          owner_answer_timestamp: null,
          review_rating: 5,
          review_timestamp: 1693150190,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Alexis Poher (AP)",
          review_text: "Séjour de 4 jours/3nuits pour un déplacement professionnel. Rien à redire : - Chambre parfaite (spacieuse, propre, clim, wifi). - Accueil souriant, Hôte disponible, serviable et souple pour les horaires de repas matin et soir. - Environnement magnifique et reposant (Malgré l'arrivée dans la zone qui laisse sceptique au début. Mais une fois arrivée, on oublie.) - De nombreuses terrasses et salons ou se poser pour travailler ou manger. - Repas copieux et variés. Quand on trouve des adresses comme ça, on ne peut que fuir les chaînes d'hôtel (Ibis, Mercure...etc) dont les prix sont supérieurs ! On se sent comme à la maison. Je recommande et reviendrai ! Alexis.",
          owner_answer_timestamp: 1687514198,
          review_rating: 5,
          review_timestamp: 1690893198,
          owner_answer: "Merci beaucoup au plaisir",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Angelika",
          review_text: "Auf unserer Spanien Rückreise haben wir dieses außergewöhnliche B&B entdeckt,sehr ruhig und nahe der Rhone gelegen. Sehr nette Gastgeberin,liebevoll und sehr geschmackvoll eingerichtete Zimmer. In der wärmeren Jahreszeit sicher ein Paradies!",
          owner_answer_timestamp: 1680517021,
          review_rating: 5,
          review_timestamp: 1683456970,
          owner_answer: "Merci nous sommes ravis que vous ayez passé un bon séjour, merci pour votre bienveillance, au plaisir.",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Suzy Rollandin",
          review_text: "Un petit coin de paradis tenu par une famille accueillante, souriante, bienveillante et généreuse ! Un grand merci pour tout, au plaisir de vous revoir !",
          owner_answer_timestamp: 1690892295,
          review_rating: 5,
          review_timestamp: 1690893052,
          owner_answer: "Merci Suzy au plaisir de vous revoir . Nous avons passé un merveilleux moment avec vous . A bientôt ici ou ailleurs 😉",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Daniel Bouzendorff",
          review_text: "Un endroit pittoresque, calme, reposant qui n'a d'égal que l'accueil et la gentillesse des propriétaires. Chaque chambre respecte le thème de leur nom d'attribution, possède une literie confortable et est d'une propreté sans pareil. Le soir, après un verre sous la rotonde, au bord de la piscine, on nous invite à partager un delicieux repas fait à partir de produits récoltés dans leur jardin et préparé presque sous vos yeux, le tout accompagné d un excellent vin. Après une bonne nuit de sommeil, un petit déjeuner savoureux vous est offert sur une grande terasse avec comme musique de font, le chant des oiseaux. Pour nous, c'est décidé, nous nous arrêtons de nouveau sur le retour des vacances.",
          owner_answer_timestamp: 1662399961,
          review_rating: 5,
          review_timestamp: 1662401839,
          owner_answer: "Merci beaucoup, votre commentaire nous touche énormément, au plaisir de vous accueillir de nouveau au Domaine de Pipangaille.",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Antoine Leneuf",
          review_text: "Nous nous sommes arrêtés 1 nuit sur notre route en velo en couple avec 1 enfant de 3 ans. Littéralement sur la via rhona ! Accueil au top en ce mois de novembre magnifique ou nous avons pu profiter de la terrasse le soir pour diner et le matin pour déjeuner. Chambre parfaite, hôte adorable et tres aidant! La propriété est superbe, avec une beau Paon nommé shiva qui s’y déambule ! Merci pour ce bon moment de vie!",
          owner_answer_timestamp: 1667165050,
          review_rating: 5,
          review_timestamp: 1683457152,
          owner_answer: "Bonjour merci beaucoup, ravie que vous ayez passé un merveilleux moment et pour votre bienveillance. Au plaisir",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "sand D",
          review_text: "Chambre d’hôte dans un lieu calme et charmant. A proximité de toutes les commodités. Piscine, table de ping-pong, coin lecture et jeux à disposition. Nous recommandons à tous les amoureux de la nature et des vieilles pierres.",
          owner_answer_timestamp: 1661509324,
          review_rating: 4,
          review_timestamp: 1661713794,
          owner_answer: "Merci pour votre commentaire au plaisir de vous accueillir. Belle soirée",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Céline PIEGAY",
          review_text: "Un week-end fort agréable dans ce lieu calme et reposant !",
          owner_answer_timestamp: null,
          review_rating: 5,
          review_timestamp: 1694958181,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Ines Porret",
          review_text: "Je recommande Pipangaille les yeux fermés, un endroit magique, calme entouré de vieilles pierres! Kate notre hôte, tout en discrétion et bienveillance. une mention supplémentaire pour le petit déjeuner super qualitatif ! sans oublier Shiva le paon majestueux ! Rdv pris l'année prochaine ! l'équipe de la marche gourmande",
          owner_answer_timestamp: 1654516564,
          review_rating: 5,
          review_timestamp: 1654519694,
          owner_answer: "Merci Inès, merci à l’équipe de la marche gourmande 😉. Nous avons été ravis de vous recevoir au Domaine de Pipangaille, beaux moments de partage et d’échanges. Au plaisir de vous revoir ici ou ailleurs. A bientôt. kate",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Rémi Spérone",
          review_text: "Accueil et séjour enchanteur . Hôtes chaleureux et prévenants Magnifique demeure au calme en bordure du fleuve. Nous reviendrons forcement. Parfait !",
          owner_answer_timestamp: 1624810103,
          review_rating: 5,
          review_timestamp: 1628674633,
          owner_answer: "Ici où ailleurs, au plaisir de nous rencontrer 💥",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Philippe Henderickx",
          review_text: "Je recommande chaudement Pipangaille Endroit merveilleux loin de tout bruit accueil au top et séjour avec des propriétaires très sympathiques",
          owner_answer_timestamp: 1663311066,
          review_rating: 5,
          review_timestamp: 1663312298,
          owner_answer: "Mille Mercis Philippe, au plaisir de vous accueillir. Belle journée",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Chantal Callier",
          review_text: "3 jours dans ce petit nid douillet, accueil au top . On y est bien 😎",
          owner_answer_timestamp: 1660676734,
          review_rating: 5,
          review_timestamp: 1662401982,
          owner_answer: "Merci beaucoup , au plaisir",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Richard Blau",
          review_text: "Sehr schön! Super Essen! Tolle Lage! Sehr nette Gastgeber!",
          owner_answer_timestamp: 1465765334,
          review_rating: 5,
          review_timestamp: 1471634825,
          owner_answer: "Thanks you",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Marie helene Perrin",
          review_text: "Je n'ai pas détester le mieux je l'ai adoré.",
          owner_answer_timestamp: null,
          review_rating: 1,
          review_timestamp: 1502342261,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Florence Torresan",
          review_text: "Un super endroit des hôtes charmants",
          owner_answer_timestamp: 1582622650,
          review_rating: 5,
          review_timestamp: 1582627656,
          owner_answer: "Wahouou. Merci Florence✨",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "mamaya 6",
          review_text: "parfait",
          owner_answer_timestamp: 1661805138,
          review_rating: 5,
          review_timestamp: 1662489063,
          owner_answer: "Merci au plaisir",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Mercy Gros",
          review_text: "Excucite",
          owner_answer_timestamp: 1534522439,
          review_rating: 5,
          review_timestamp: 1534523814,
          owner_answer: "gratitude",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Christine FRESNET",
          review_text: "Juste Magnifique",
          owner_answer_timestamp: 1578306180,
          review_rating: 5,
          review_timestamp: 1578518592,
          owner_answer: "Merci. Au plaisir",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Kristina Il",
          review_text: "Nice place to spend a night in the middle of a road Paris-Nice. Very calm, big room, tasty food. There was swimming pool to relax after long trip. The owners offer the dinner for 15-25 euro, so you don't need to search a restaurant to eat.",
          owner_answer_timestamp: 1533556545,
          review_rating: 5,
          review_timestamp: 1533445964,
          owner_answer: "Gratitude",
          platform_origin: 'Google Maps',
        },
        {
          author_title: "Sjaak van Dijk",
          review_text: "Super B&B met leuke eigenaren. We hadden de familiekamer met 4 personen inc. 2 kinderen. Kinderen waren natuurlijk erg blij met het zwembad wat hier aanwezig is.",
          owner_answer_timestamp: null,
          review_rating: 5,
          review_timestamp: 1485887229,
          owner_answer: null,
          platform_origin: 'Google Maps',
        },
      ],
      form: {
        nbAdulte: 2,
        nbEnfant: 0,
        startDate: this.DateNow(new Date(), 0),
        endDate: this.DateNow(new Date(), 1),
      }
    };
  },
  mounted() {
    this.slidesUsable = this.reviews;
  },
  created() {
    const desc = this.$t('index.meta.desc')
    const title = this.$t('index.meta.title')
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // content: 'Envie d\'un séjour magique dans un cadre idyllique en pleine nature dans une ancienne magnanerie récemment rénovée. Vous recherchez un endroit privilégié pour un break, un court séjour, un déplacement professionnel ou encore un événemment a fêter, le Domaine de Pipangaille est le lieu idéal.' 
          content: desc 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11_488x320.webp' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/photo_11_488x320.webp' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://domaine-de-pipangaille.fr${this.$route.path}`,
        },
      ],
    })
  },
  methods: {
    NextSlide() {
      const fisrtSlide = this.slidesUsable[0];
      this.slidesUsable.shift();
      this.slidesUsable.push(fisrtSlide);
    },
    PreviousSlide() {
      const lastSlide = this.slidesUsable[this.slidesUsable.length - 1];
      this.slidesUsable.splice(-1);
      this.slidesUsable.unshift(lastSlide);
    },
    Pad(d) {
      return (d < 10) ? '0' + d.toString() : d.toString();
    },
    DateNow(date, addDay) {
      date.setDate(date.getDate() + addDay);
      const day = this.Pad(date.getDate());
      const month = this.Pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return (`${year}-${month}-${day}`);
    },
    UpdateEndDate() {
      endDate.value = this.DateNow(new Date(startDate.value), 1);
    },
  },
};
</script>