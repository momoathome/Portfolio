<template>
  <main ref="root">
    <SectionsHero />
    <SectionsAbout />
    <SectionsTechstack />
    <SectionsPortfolio />
    <SectionsKontakt />
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap');

* {
  font-family: 'Roboto Slab', serif;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
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
    color: $color_link;
  }
}

.color-link {
  color: $color_link;
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
  padding-bottom: min(7rem, 10vh);

  &:nth-child(2) {
    padding-top: min(7rem, 10vh);
    min-height: 90vh;
  }

  &:last-child {
    padding-bottom: 0;
    min-height: 80vh;
  }
}

hr {
  border-color: $color_main_darker;
  margin-block: 2rem;
  width: 100%;
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
  scrollbar-color: $color_main #1e2224;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #1e2224;
}

*::-webkit-scrollbar-thumb {
  background-color: $color_main;
  border-radius: 10px;
  border: 0px none $color_main;
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}

@media (min-width: 1024px) and (min-height: 1100px) {
  .section {
    min-height: 70vh;
  }
}
</style>
