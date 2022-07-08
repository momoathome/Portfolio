<template>
  <nav class="navigation">
    <!-- prettier-ignore -->
    <a href="#hero" class="hero active"><font-awesome-icon class="nav-icon" icon="fa-solid fa-display" />Start</a>
    <!-- prettier-ignore -->
    <a href="#about" class="about"><font-awesome-icon class="nav-icon" icon="fa-solid fa-user" />Über mich</a>
    <!-- prettier-ignore -->
    <a href="#portfolio" class="portfolio"><font-awesome-icon class="nav-icon" icon="fa-solid fa-code" />Mein Portfolio</a>
    <!-- prettier-ignore -->
    <a href="#contact" class="contact"><font-awesome-icon class="nav-icon" icon="fa-regular fa-address-card" />Kontakt</a>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navigation {
  position: fixed;
  top: 45%;
  left: 1%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
a {
  color: $color_white;
  text-decoration: none;
  margin: 0.7rem;
  transition: all 0.3s;
  &:hover {
    color: $color_main;
    .nav-icon {
      color: $color_main;
    }
  }
}
.nav-icon {
  transition: all 0.3s;
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
