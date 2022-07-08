<template>
  <section id="hero" class="hero-section">
    <div class="heading-container">
      <h1 class="heading">Maurice Knoll</h1>
      <h2 class="sub-heading">Ich bin <span>Web Entwickler</span></h2>

      <div class="hero-buttons">
        <a href="#about">
          <Button> Über Mich </Button>
        </a>
        <a href="#contact">
          <Button :class="'btn-outline'"> Kontakt </Button>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero-section {
  width: 100%;
  height: 80vh;
  background-image: url('/img/Hero-Background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.heading-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.heading {
  font-size: calc(3rem + 1.5vw);
  font-weight: bold;
  color: $color_white;
  margin-bottom: 2rem;
}
.sub-heading {
  color: $color_grey;
  text-align: center;
  margin-bottom: 3rem;
  font-size: calc(1.25rem + 0.5vw);
  font-weight: normal;

  span {
    color: $color_main;
  }
}

.hero-buttons {
  width: 300px;
  margin-bottom: 6rem;
  display: flex;
  justify-content: space-around;
}

@media (min-width: 768px) {
  .heading {
    font-size: calc(4rem + 1.5vw);
  }

  .sub-heading {
    font-size: calc(1.2rem + 0.5vw);
  }

  .hero-buttons {
    width: 420px;
  }
}
@media (min-width: 1024px) {
  .hero-section {
    height: 100vh;
  }
}
</style>
