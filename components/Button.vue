<script setup lang="ts"></script>

<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.btn {
  width: 140px;
  padding: 10px 0;
  background-color: var(--color_main);
  color: var(--color_white);
  border: none;
  border-radius: 9999px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s;

  &:focus-visible {
    outline: 2px solid var(--color_white);
  }
}
.btn-outline {
  background-color: transparent;
  border: 1px solid var(--color_main);
  color: var(--color_main);

  &:hover {
    background-color: var(--color_main);
    color: var(--color_white);
  }

  &:focus-visible {
    background-color: var(--color_main);
    color: var(--color_white);
    outline: 2px solid var(--color_white);
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
