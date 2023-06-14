<script setup lang="ts"></script>

<template>
  <main>
    <SectionsHero />
    <SectionsAbout />
    <SectionsTechstack />
    <SectionsPortfolio />
    <SectionsKontakt />
  </main>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;600;700&display=swap');

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
  color: var(--color-main);

  span {
    color: var(--color-gray);
  }
  .color-link {
    color: var(--color_link);
  }
}

.section-heading {
  width: fit-content;
  font-size: 1.85rem;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 1.5rem;
  margin-top: 0;
  letter-spacing: 1px;

  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 100%;
    height: 1px;
    background: transparent
      linear-gradient(to right, transparent, var(--color_main), transparent) repeat scroll 0 0;
  }
}

.section {
  background-color: var(--color_dark);
  color: var(--color_white);
  padding-bottom: 100px;

  &:nth-child(2) {
    padding-top: min(7rem, 10vh);
  }

  &:last-child {
    padding-bottom: 0;
    min-height: 60vh;
  }
}

hr {
  border-color: var(--color-main);
  margin-block: 2rem;
  width: 100%;
}

@media (min-width: 768px) {
 .section {
  padding-bottom: 250px;
 }
}

@media (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}
</style>
