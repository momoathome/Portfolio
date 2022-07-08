<template>
  <div class="grid">
    <a href="https://demo.novis-cms.com/" target="_blank" rel="noopener noreferrer">
      <div class="item div1">
        <img src="/img/Novis-cms.webp" alt="" />
        <div class="overlay">
          <p class="item-title">NovisCMS</p>
          <p class="item-category">Team Projekt: Fullstack Application</p>
          <p class="item-text">Techstack: Laravel, Sass, Bootsrap</p>
        </div>
      </div>
    </a>

    <a
      href="https://momoathome.github.io/Pokedex/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="item div3">
        <img src="/img/Pokedex.webp" alt="" />
        <div class="overlay">
          <p class="item-title">Pokedex</p>
          <p class="item-category">Solo Project: Frontend</p>
          <p class="item-text">Techstack: Vue.js, Scss, PokeApi</p>
        </div>
      </div>
    </a>

    <a
      href="https://momoathome.github.io/projektCiara/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="item div2">
        <img src="/img/Project-ciara.webp" alt="" />
        <div class="overlay">
          <p class="item-title">Project Ciara</p>
          <p class="item-category">Solo Projekt: Browsergame (in Progress)</p>
          <p class="item-text">Techstack: Html, Scss, Javascript</p>
        </div>
      </div>
    </a>

    <a href="">
      <div class="item div4"></div>
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-top: 6rem;
}

a:focus-visible {
  outline: 1px solid $color_main;
}

img {
  width: 450px;
  height: auto;
  border: 9px solid $color_darker;
}
.item {
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease-in-out;

  &:hover {
    .overlay {
      visibility: visible;
      transform: scale(1);
      transition-duration: 0.6s;
    }

    .item-title {
      top: 35%;
      visibility: visible;
      opacity: 1;
      transition-delay: 0.25s;
    }

    .item-category {
      display: flex;
      justify-content: center;
      top: 50%;
      color: $color_main;
      visibility: visible;
      opacity: 1;
      width: 65%;
      transition-delay: 0.45s;
    }

    .item-text {
      display: flex;
      justify-content: center;
      top: 62%;
      color: $color_main;
      visibility: visible;
      opacity: 1;
      width: 65%;
      transition-delay: 0.55s;
    }
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(30, 34, 36, 0.9);
  transform: scale(0);
  transition: all 0.3s ease-in-out;
}
.item-title,
.item-text,
.item-category {
  position: absolute;
  top: 45%;
  left: 50%;
  display: inline-block;
  color: $color_white;
  margin: 0;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.div4 {
  background-color: violet;
}
</style>
