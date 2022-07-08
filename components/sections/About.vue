<template>
  <section id="about" class="section">
    <div class="grid">
      <div class="grid-img">
        <img class="profil-img" src="/img/Profil-img.webp" alt="" />
      </div>
      <div class="grid-about">
        <AboutMe />
      </div>
      <div class="grid-techstack">
        <Techstack />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
  height: 100%;
  margin-right: 12%;
}

.grid-img {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  justify-content: flex-end;
}
.grid-about {
  grid-area: 1 / 2 / 2 / 3;
  width: fit-content;
}
.grid-techstack {
  grid-area: 2 / 1 / 3 / 3;
}

.profil-img {
  outline: 9px solid #171818;
  outline-offset: -9px;
  height: 470px;
}
</style>
