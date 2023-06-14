<script setup lang="ts">
defineProps({
  title: String,
  category: String,
  img: String,
  link: String,
  text: String,
})
</script>

<template>
  <NuxtLink :href="link" target="_blank" rel="noopener noreferrer">
    <div class="item">
      <img :src="img" alt="">
      <div class="overlay">
        <p class="item-title">
          {{ title }}
        </p>
        <p class="item-category">
          {{ category }}
        </p>
        <p class="item-text">
          {{ text }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
a:focus-visible {
  outline: 1px solid var(--color_main);
}

p {
  margin: 0;
}

img {
  width: 100%;
  height: auto;
  border: 9px solid var(--color_darker);
  margin-top: 1rem;
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
    height: 45%;
    color: var(--color_grey);
    transition: all 0.3s;
    padding: 0 2rem 2rem 1rem;
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
    color: var(--color_white);
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
    border: 9px solid var(--color_darker);
    margin-top: 0;
  }
}

@media (min-width: 1024px) {
  img {
    width: 100%;
    height: auto;
    border: 9px solid var(--color_darker);
  }

  .item {
    &:hover {
      scale: 1.025;
      box-shadow: 0px 16px 25px rgb(0 0 0 / 50%);

      .overlay {
        height: 45%;
      }
      .item-title {
        color: var(--color_main);
      }
    }
  }
}
</style>
