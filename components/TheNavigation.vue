<script setup lang="ts">
const home = 'Start'
const about = 'Über mich'
const portfolio = 'Mein Portfolio'
const contact = 'Kontakt'
</script>

<template>
  <nav class="nav">
    <ul class="nav__wrapper">
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#hero" class="hero active"> {{ home }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#about" class="about">{{ about }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#portfolio" class="portfolio"> {{ portfolio }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#contact" class="contact"> {{ contact }} </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  display: none;
}

@media (min-width: 1024px) {
  .nav {
    position: fixed;
    top: 45%;
    left: 1%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    z-index: 10;
  }
}

.nav__wrapper {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

a {
  color: var(--color_white);
}
.nav__item {
  margin-block: 1.25rem;
  margin-inline: 1rem;

  &:hover {
    .nav-icon {
      color: var(--color_main);
    }

    a {
      color: var(--color_main);
    }
  }
}

.nav-icon {
  color: var(--color_white);
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.active {
  color: var(--color_main);

  .nav-icon {
    color: var(--color_main);
  }
}
</style>
