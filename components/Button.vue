<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.btn {
  width: 140px;
  padding: 10px 0;
  background-color: $color_main;
  color: $color_white;
  border: none;
  border-radius: 9999px;
  font-size: 1.25rem;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid $color_white;
  }
}
.btn-outline {
  background-color: transparent;
  border: 1px solid $color_main;
  color: $color_main;

  &:hover {
    background-color: $color_main;
    color: $color_white;
  }

  &:focus-visible {
    background-color: $color_main;
    color: $color_white;
    outline: 2px solid $color_white;
  }
}

.btn-small {
  width: fit-content;
  height: fit-content;
  padding: 6px;
  font-size: 0.75rem;
  border-radius: 0;
}

@media (min-width: 768px) {
  .btn {
    width: 170px;
    padding: 14px 0;
  }
}
</style>
