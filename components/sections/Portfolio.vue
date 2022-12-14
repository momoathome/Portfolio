<template>
  <section id="portfolio" class="section">
    <div class="container">
      <h3 class="section-heading">Mein Portfolio</h3>
        <div class="grid">
          <Project
            v-for="projekt in projekts"
            :key="projekt.title"
            :title="projekt.title"
            :category="projekt.category"
            :text="projekt.text"
            :img="projekt.img"
            :link="projekt.link"
          />    
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projekts = ref([
  {
    title: 'Pokedex',
    category:'Solo Projekt: Frontend',
    text: 'Techstack: Vue, Scss, PokeApi',
    img: '/img/Pokedex.webp',
    link: 'https://momoathome.github.io/Pokedex/',
  },
  {
    title: 'Portfolio Website',
    category:'Solo Projekt: Frontend',
    text: 'Techstack: Nuxt, Vue, Scss',
    img: '/img/Portfolio.webp',
    link: '/',
  },
  {
    title: 'NovisCMS',
    category:'Team Projekt: Fullstack Application',
    text: 'Techstack: Laravel, Nuxt, Vue, UnoCSS',
    img: '/img/Novis_v2.webp',
    link: 'https://novis-cms.com/',
  },
  {
    title: 'Project Ciara',
    category:'Solo Projekt: Browsergame',
    text: 'Techstack: Html, Scss, Javascript',
    img: '/img/Project-ciara.webp',
    link: 'https://momoathome.github.io/projektCiara/',
  },
])
</script>

<style lang="scss" scoped>
.grid {
  row-gap: 2rem;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin-top: 6rem;
  }
}
</style>
