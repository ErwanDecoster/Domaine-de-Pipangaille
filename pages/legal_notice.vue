<template>
  <div class="mb-8 md:pt-[5.25rem]">
    <section class="max-w-screen-xl mx-auto px-4 grid gap-8 pt-16">
      <h1 class="text-4xl sm:text-5xl">
        {{ $t('legalNotice.title') }}
      </h1>
      <div class="grid gap-8">
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.siteEditor.title') }}
          </h2>
          <div>
            <p>
              {{ $t('legalNotice.siteEditor.company') }} :
              <span>{{ company }}</span>
            </p>
            <p>
              {{ $t('legalNotice.siteEditor.headquarters') }} :
              <span>
                <a 
                  href="https://www.google.fr/maps/dir//domaine+de+pipangaille/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47f53e41af912869:0xe0c49553166e1500?sa=X&ved=2ahUKEwj59IKk0474AhUa_4UKHTamDM0Q9Rd6BAhbEAQ"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ address }}
                </a>
              </span>
            </p>
            <div class="flex gap-2">
              <p>{{ $t('legalNotice.siteEditor.rcs') }} : <span>{{ RCS }}</span> /</p>
              <p>{{ $t('legalNotice.siteEditor.nafCode') }} : <span>{{ NAF }}</span> /</p>
              <p>{{ $t('legalNotice.siteEditor.shareCapital') }} : <span>{{ shareCapital }} €</span></p>
            </div>
            <p>
              {{ $t('legalNotice.siteEditor.phone') }} : 
              <span>
                <a 
                  :href="`tel:${tel}`"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ tel }}
                </a>
              </span>
            </p>
            <p>
              {{ $t('legalNotice.siteEditor.email') }} : 
              <span>
                <a 
                  :href="`mailto:${email}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ email }}
                </a>
              </span>
            </p>
            <p>{{ $t('legalNotice.siteEditor.director') }} : <span>{{ director }}</span></p>
            <p>{{ $t('legalNotice.siteEditor.publicationDirector') }} : <span>{{ director }}</span></p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.siteDesignAndDevelopment.title') }}
          </h2>
          <div>
            <p>{{ $t('legalNotice.siteDesignAndDevelopment.company') }} : <span>{{ design.company }}</span></p>
            <p>
              {{ $t('legalNotice.siteDesignAndDevelopment.phone') }} : 
              <span>
                <a 
                  href="tel:+33625306813"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ design.tel }}
                </a>
              </span>
            </p>
            <p>
              {{ $t('legalNotice.siteDesignAndDevelopment.email') }} : 
              <span>
                <a 
                  :href="`mailto:${design.email}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ design.email }}
                </a>
              </span>
            </p>
            <p>
              {{ $t('legalNotice.siteDesignAndDevelopment.website') }} : 
              <span>
                <a 
                  :href="`https://${design.website}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ design.website }}
                </a>
              </span>
            </p>
            <p>
              {{ $t('legalNotice.siteDesignAndDevelopment.github') }} : 
              <span>
                <a 
                  :href="`https://${design.github}`"
                  target="_blank" 
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ design.github }}
                </a>
              </span>
            </p>
            <p>
              {{ $t('legalNotice.siteDesignAndDevelopment.siteRepo') }}
              <span>
                <a 
                  href="https://github.com/ErwanDecoster/Domaine-de-Pipangaille" 
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ design.websiteRepo }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.siteHosting.title') }}c
          </h2>
          <div>
            <p>
              {{ hosting }} : 
              <span>
                <a 
                  :href="`https://${hostingWebsite}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ hostingWebsite }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.domainNameOwnership.title') }}
          </h2>
          <div>
            <p>
              {{ domainName }} : 
              <span>
                <a 
                  :href="`https://${domainWebsite}`"
                  target="_blank"
                  class="p-2 underline decoration-2 underline-offset-2 decoration-almond text-md"
                >
                  {{ domainWebsite }}
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.photoCredit.title') }}
          </h2>
          <div>
            <p>{{ $t('legalNotice.photoCredit.description') }}</p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.cookieUsage.title') }}
          </h2>
          <div>
            <p>{{ $t('legalNotice.cookieUsage.description') }}</p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.personalDataUsage.title') }}
          </h2>
          <div>
            <p 
              v-for="row in $tm('legalNotice.personalDataUsage.description')"
              :key="row"
            >
              {{ $rt(row, { email: email, address: address }) }}
            </p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.responsibility.title', { company: company }) }}
          </h2>
          <div>
            <p 
              v-for="row in $tm('legalNotice.responsibility.description')"
              :key="row"
            >
              {{ $rt(row, { company: company }) }}
            </p>
          </div>
        </div>
        <div class="grid gap-2">
          <h2 class="text-4xl uppercase">
            {{ $t('legalNotice.applicableLaw.title') }}
          </h2>
          <div>
            <p>{{ $t('legalNotice.applicableLaw.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: "1 Quartier Les Marettes, 26140, Andancette",
      mapsUrl: "",
      RCS: "904 638 814",
      NAF: "55202",
      shareCapital: "1500",
      tel: "+33475682824",
      email: "contact@domaine-de-pipangaille.fr",
      director: "Catherine Lemoine",
      company: "SAS Domaine de Pipangaille",
      design: {
        company: "Erwan Decoster",
        tel: "+33625306813",
        email: "contact@erwan-decoster.com",
        website: "erwan-decoster.com",
        github: "github.com/ErwanDecoster",
        websiteRepo: "github.com/ErwanDecoster/Domaine-de-Pipangaille",
      },
      hosting: "Vercel Inc",
      hostingWebsite: "vercel.com",
      domainName: "Hostinger International Ltd",
      domainWebsite: "hostinger.fr",
    };
  },
  mounted() {
    window.scrollTo(0,0);
  },
  created() {
    const desc = this.$t('legalNotice.meta.desc')
    const title = this.$t('legalNotice.meta.title')
    useHead({
      title: title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: desc 
        },
        { property: 'og:url', content: 'https://domaine-de-pipangaille.fr' + this.$route.path },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: desc },
        { property: 'og:image', content: 'https://domaine-de-pipangaille.fr' + '/images/logo_domaine_de_pipangaille.svg' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:site', content: '@D_Pipangaille' },
        { property: 'twitter:creator', content: '@D_Pipangaille' },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: desc },
        { property: 'twitter:image', content: 'https://domaine-de-pipangaille.fr' + '/images/logo_domaine_de_pipangaille.svg' },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `https://domaine-de-pipangaille.fr${this.$route.path}`,
        },
      ],
    })
  }
};
</script>