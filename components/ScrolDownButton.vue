<script setup lang="ts"></script>

<template>
  <div class="scroll" />
</template>

<style lang="scss" scoped>
.scroll {
  width: 60px;
  height: 60px;
  border: 2px solid var(--color_main);
  border-radius: 50%;
  position: relative;
  animation: down 1.5s infinite;
  -webkit-animation: down 1.5s infinite;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 18px;
    width: 18px;
    height: 18px;
    border-left: 2px solid var(--color_main);
    border-bottom: 2px solid var(--color_main);
    transform: rotate(-45deg);
  }
}

@keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}

@-webkit-keyframes down {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translateY(15px);
  }
  40% {
    transform: translate(0);
  }
}
</style>
