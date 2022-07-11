<template>
  <header ref="header">
    <TheNavigation v-if="renderNav" />
  </header>
  <main ref="root">
    <SectionsHero />
    <SectionsAbout />
    <SectionsPortfolio />
    <SectionsKontakt />
  </main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const renderNav = ref(false)

// smooth scroll on click at Nav Link
const root = ref(null)
const header = ref(null)

onMounted(() => {
  const sections = root.value.querySelectorAll('section')
  const navLi = header.value.querySelectorAll('nav a')
  window.onscroll = () => {
    let current = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id')
      }
    })

    navLi.forEach((el) => {
      el.classList.remove('active')
      if (el.classList.contains(current)) {
        el.classList.add('active')
      }
    })
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  //transition: all 0.3s;
}
html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'Roboto Slab', serif;
}

a {
  text-decoration: none;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-column-gap: 5rem;
  height: 100%;
}

.color-main {
  color: $color_main;

  span {
    color: $color_grey;
  }
  .color-link {
    color: #2079c7;
  }
}

.color-link {
  color: #2079c7;
}

.section-heading {
  width: fit-content;
  font-size: 1.75rem;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 1.75rem;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    background: transparent
      linear-gradient(to right, transparent, $color_main, transparent) repeat scroll 0 0;
  }
}

.section {
  width: 100%;
  min-height: 100vh;
  background-color: $color_dark;
  color: $color_white;
  padding-top: 4rem;
}

hr {
  border-color: $color_main_darker;
  margin-block: 2rem;
  max-width: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

/* * {
  outline: 1px solid lime;
  outline-offset: -1px;
} */

/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
  scrollbar-width: auto;
  scrollbar-color: #16c0f0 #1e2224;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #1e2224;
}

*::-webkit-scrollbar-thumb {
  background-color: #16c0f0;
  border-radius: 10px;
  border: 0px none #16c0f0;
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
  .section {
    padding-top: 7rem;
  }
}
</style>
