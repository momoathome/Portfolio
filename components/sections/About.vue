<script setup lang="ts"></script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="grid">
        <div class="flex grid-img justify-center">
          <img class="profil-img" src="/img/Profil-img.webp" alt="">
        </div>
        <div class="grid-about">
          <AboutMe />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.profil-img {
  outline: 9px solid #171818;
  outline-offset: -9px;
  width: clamp(285px, 95vw, 420px);
}

@media (min-width: 768px) {
  hr {
    display: none;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }

  .grid-img {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: flex-end;
  }
  .grid-about {
    grid-area: 1 / 2 / 2 / 3;
    width: max-content;
  }
  .grid-techstack {
    grid-area: 2 / 1 / 3 / 3;
    height: min-content;
  }

  .profil-img {
    max-height: 30rem;
    width: auto;
  }
}

@media (min-width: 1200px) {
  .grid {
    column-gap: 7%;
  }
}
</style>
