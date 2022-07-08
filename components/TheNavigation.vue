<template>
  <nav class="navigation">
    <!-- prettier-ignore -->
    <NuxtLink to="#hero" class="hero active"><font-awesome-icon class="nav-icon" icon="fa-solid fa-display" />Start </NuxtLink>
    <!-- prettier-ignore -->
    <NuxtLink to="#about" class="about"><font-awesome-icon class="nav-icon" icon="fa-solid fa-user" />Über mich</NuxtLink>
    <!-- prettier-ignore -->
    <NuxtLink to="#portfolio" class="portfolio"><font-awesome-icon class="nav-icon" icon="fa-solid fa-code" />Mein Portfolio</NuxtLink>
    <!-- prettier-ignore -->
    <NuxtLink to="#contact" class="contact"><font-awesome-icon class="nav-icon" icon="fa-regular fa-address-card" />Kontakt</NuxtLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navigation {
  display: none;
}

@media (min-width: 1024px) {
  .navigation {
    position: fixed;
    top: 45%;
    left: 1%;
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
}

a {
  color: $color_white;
  text-decoration: none;
  margin: 0.7rem;
  &:hover {
    color: $color_main;
    .nav-icon {
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
