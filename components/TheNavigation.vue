<template>
  <nav class="nav">
    <ul class="nav__wrapper">
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#hero" class="hero active"><font-awesome-icon class="nav-icon" icon="fa-solid fa-display" /> {{ home }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#about" class="about"><font-awesome-icon class="nav-icon" icon="fa-solid fa-user" /> {{ about }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#portfolio" class="portfolio"><font-awesome-icon class="nav-icon" icon="fa-solid fa-code" /> {{ portfolio }} </a>
      </li>
      <li class="nav__item">
        <!-- prettier-ignore -->
        <a href="#contact" class="contact"><font-awesome-icon class="nav-icon" icon="fa-regular fa-address-card" /> {{ contact }} </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const home = 'Start'
const about = 'Über mich'
const portfolio = 'Mein Portfolio'
const contact = 'Kontakt'
</script>

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
  color: $color_white;
}
.nav__item {
  margin-block: 1.25rem;
  margin-inline: 1rem;

  &:hover {
    .nav-icon {
      color: $color_main;
    }

    a {
      color: $color_main;
    }
  }
}

.nav-icon {
  color: $color_white;
  width: 18px;
  height: 18px;
  margin-right: 8px;
}

.active {
  color: $color_main;

  .nav-icon {
    color: $color_main;
  }
}
</style>
