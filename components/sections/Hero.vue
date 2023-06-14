<script setup lang="ts"></script>

<template>
  <section id="hero" class="bg-image h-80vh">
    <div class="flex flex-col h-full heading-container items-center">
      <div class="flex flex-col flex-grow justify-center items-center">
        <h1>
          Maurice Knoll
        </h1>
        <h2>
          Ich bin <span class="text-primary">Web-Entwickler</span>
        </h2>

        <div class="flex w-300px hero-buttons justify-around">
          <a href="#about">
            <Button> Über Mich </Button>
          </a>
          <a href="#contact">
            <Button class="btn-outline"> Kontakt </Button>
          </a>
        </div>
      </div>

      <div class="mb-4">
        <a href="#about">
          <ScrolDownButton class="scrollDownButton" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg-image {
  background-image: url('/img/Hero-Background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {

  .hero-buttons {
    width: 420px;
  }
}
</style>
