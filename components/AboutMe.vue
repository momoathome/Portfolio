<script setup lang="ts">
const detailsLeft = [
  {
    title: 'Über mich',
    text: 'Maurice Knoll - 26',
    icon: 'i-fa6-solid-user',
    link: '',
    position: 'top',
  },
  {
    title: 'Wohnort',
    text: 'Bayern, Deutschland',
    icon: 'i-fa6-solid-location-dot',
    link: '',
    position: 'left',
  },
  {
    title: 'Sprachen',
    text: 'Deutsch, Englisch',
    icon: 'i-fa6-solid-language',
    link: '',
    position: 'bottom',
  },
]
const detailsRight = [
  {
    title: 'Telefon',
    text: '+49 151 72745427',
    icon: 'i-fa6-solid-phone',
    link: 'tel:+4915172745427',
    position: 'top',
    target: false,
  },
  {
    title: 'Email',
    text: 'mknoll1901@gmail.com',
    icon: 'i-fa6-solid-envelope',
    link: 'mailto:mknoll1901@gmail.com',
    position: 'left',
    target: false,
  },
  {
    title: 'Github',
    text: 'github.com/momoathome',
    icon: 'i-fa-brands-github',
    link: 'https://github.com/momoathome',
    position: 'bottom',
    target: true,
  },
]
</script>

<template>
  <h3 class="section-heading">
    Über Mich
  </h3>
  <h4>Ich bin Maurice Knoll</h4>
  <h5 class="m-0 text-primary">
    <div class="text-2xl me-2" i-fa6-solid-code />
    Web-Entwickler
  </h5>

  <p class="about-text">
    Ich designe und entwickle Komponenten und Optimierungen für kleinere und mittlere
    Web-Applikationen und kreative Frontend-Lösungen.
  </p>
  <p class="about-text">
    Meine Kenntnisse in der Web Entwicklung habe ich mir autodidaktisch über mehrere Jahre
    erarbeitet. Diese Erfahrungen möchte ich gerne in einem agilen, offenen und
    motivierten Team als Web-Entwickler anwenden und erweitern.
  </p>

  <hr>

  <div class="details-container">
    <div class="col-1">
      <AboutMeDetail
        v-for="item in detailsLeft"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
        :position="item.position"
      />
    </div>

    <div class="col-2">
      <AboutMeDetail
        v-for="item in detailsRight"
        :key="item.title"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
        :link="item.link"
        :has-target="item.target"
        :position="item.position"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h4 {
  font-size: 1.65rem;
  margin-bottom: 0.5rem;
  margin-top: 0;
}
h5 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
}

.about-text {
  color: var(--color_grey);
  max-width: 75ch;
  margin-bottom: 1rem;
  line-height: 1.5;
}
.details-container {
  display: grid;
  grid-template-columns: 1fr;
}

.section-heading {
  padding-top: 3rem;
}

.col-1 {
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .details-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .col-1,
  .col-2 {
    margin-bottom: 3rem;
  }
}
@media (min-width: 1024px) {
  .section-heading {
    padding-top: 0;
  }

  .about-text {
    max-width: 70ch;
  }
}
</style>
