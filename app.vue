<template>
  <main ref="root">
    <TheNavigation />
    <SectionsHero />
    <SectionsAbout />
    <SectionsPortfolio />
    <SectionsKontakt />
  </main>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'

const root = ref(null)
onMounted(() => {
  console.log(root.value)

  const sections = root.value.querySelectorAll('section')
  const navLi = root.value.querySelectorAll('nav a')
  window.onscroll = () => {
    let current = ''

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute('id')
      }
    })

    navLi.forEach((a) => {
      a.classList.remove('active')
      if (a.classList.contains(current)) {
        a.classList.add('active')
      }
    })
  }
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap');

html {
  scroll-behavior: smooth;
}
body {
  margin: 0;
  font-family: 'Roboto Slab', serif;
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
  height: 90vh;
  background-color: $color_dark;
  color: $color_white;
  padding-top: 7rem;
}

.container {
  max-width: 935px;
  align-content: center;
  margin: auto;
}

hr {
  border-color: $color_main_darker;
  margin-block: 2rem;
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
</style>
