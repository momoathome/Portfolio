<template>
  <div class="grid">
    <NuxtLink
      href="https://momoathome.github.io/Pokedex/"
      target="_blank"
      rel="noopener noreferrer">
      <div class="item">
        <img src="/img/Pokedex.webp" alt="" />
        <div class="overlay">
          <p class="item-title">Pokedex</p>
          <p class="item-category">Solo Projekt: Frontend</p>
          <p class="item-text">Techstack: Vue, Scss, PokeApi</p>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink href="/">
      <div class="item">
        <img src="/img/Portfolio.webp" alt="" />
        <div class="overlay">
          <p class="item-title">Portfolio Website</p>
          <p class="item-category">Solo Projekt: Frontend</p>
          <p class="item-text">Techstack: Nuxt, Vue, Scss</p>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink href="https://novis-cms.com/" target="_blank" rel="noopener noreferrer">
      <div class="item">
        <img src="/img/Novis_v2.webp" alt="" />
        <div class="overlay">
          <p class="item-title">NovisCMS</p>
          <p class="item-category">Team Projekt: Fullstack Application</p>
          <p class="item-text">Techstack: Laravel, Nuxt, Vue, UnoCSS</p>
        </div>
      </div>
    </NuxtLink>

    <NuxtLink
      href="https://momoathome.github.io/projektCiara/"
      target="_blank"
      rel="noopener noreferrer">
      <div class="item">
        <img src="/img/Project-ciara.webp" alt="" />
        <div class="overlay">
          <p class="item-title">Project Ciara</p>
          <p class="item-category">Solo Projekt: Browsergame</p>
          <p class="item-text">Techstack: Html, Scss, Javascript</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
  border: 9px solid $color_darker;
  margin-top: 1rem;
}

.grid {
  row-gap: 2rem;
}

.item {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 0;

  .overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: calc(100% - 18px);
    height: 40%;
    color: $color_grey;
    transition: all 0.3s;
    padding: 0.5rem 2rem 2rem 1rem;
    margin-inline-start: 9px;
    margin-block-end: 9px;
    background-color: rgba(30, 34, 36, 0.8);

    & > *:not(:last-child) {
      margin-block: 0.25rem;
    }
  }

  .item-title {
    top: 0;
    font-size: calc(1rem + 0.5vw);
    color: $color_white;
    transition: color 0.3s;
  }

  .item-category {
    display: flex;
    top: 25%;
  }

  .item-text {
    display: flex;
    top: 50%;
  }
}

@media (min-width: 768px) {
  .item {
    display: flex;
    gap: 1rem;
    transition: all 0.3s;
  }

  img {
    width: 60%;
    height: auto;
    border: 9px solid $color_darker;
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    margin-top: 6rem;
  }

  img {
    width: 100%;
    height: auto;
    border: 9px solid $color_darker;
  }

  .item {
    &:hover {
      scale: 1.025;
      box-shadow: 0px 16px 25px rgb(0 0 0 / 50%);

      .overlay {
        height: 45%;
      }
      .item-title {
        color: $color_main;
      }
    }
  }
}

a:focus-visible {
  outline: 1px solid $color_main;
}
</style>
