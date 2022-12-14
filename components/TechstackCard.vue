<template>
  <div class="transition transition-duration-300 techstack-card">
    <div class="card-header">
      <div :class="icon" class="m-0 p-0 transition-color text-2xl transition-duration-300 tech-icon" />
      <h4 class="transition-color transition-duration-300">{{ title }}</h4>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>
    <div class="card-footer">
      <a :href="link" target="_blank" rel="noopener noreferrer" class="flex flex-col">
        <span class="transition-color transition-duration-300">erfahre mehr</span>
        <span class="text-xs transition-color transition-duration-300">(externer link)</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  icon: String,
  link: String,
})
</script>

<style lang="scss" scoped>
.techstack-card {
  padding: 1.5rem 1rem 1rem 0;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;

  span {
    color: transparent;
  }

  .card-header {
    display: flex;
    min-height: fit-content;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    line-height: 1.5;
  }
  .card-footer {
    display: none;
  }

  h4 {
    margin-inline-start: 0.75rem;
    font-weight: normal;
    font-size: 1.25rem;
  }

  p {
    margin-block: 1rem;
    font-size: 0.85rem;
    color: $color-grey;
    line-height: 1.5;
  }

  a {
    cursor: pointer;
  }
}

@media (min-width: 1024px) {
  .techstack-card {
    padding: 1.5rem 1.5rem 1rem 1.5rem;

    &:hover {
      box-shadow: 0px 16px 25px rgba(0, 0, 0, 0.5);
      border: 1px solid $color_main;

      span {
        color: $color_main;
      }
      span:nth-of-type(2) {
        color: $color_grey;
      }

      .tech-icon,
      h4 {
        color: $color_main;
      }
    }

    span {
      color: transparent;

      &:nth-of-type(2) {
        color: transparent;
      }
    }

    .card-footer {
      align-self: flex-end;
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
