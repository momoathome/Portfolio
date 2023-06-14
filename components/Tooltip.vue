<script setup lang="ts">
const props = defineProps({
  title: String,
  position: {
    type: String,
    default: 'bottom',
  },
})
</script>

<template>
  <div class="tooltip">
    <slot />
    <span class="tooltiptext" :class="props.position">
      {{ props.title }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  width: 100px;
  background-color: var(--color_darker);
  text-align: center;
  color: var(--color_grey);
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
}

.top {
  bottom: 100%;
  margin-bottom: 10px;
  left: 50%;
  margin-left: -50px;
}

.bottom {
  top: 100%;
  margin-top: 10px;
  left: 50%;
  margin-left: -50px;
}

.left {
  top: -5px;
  right: 105%;
  margin-right: 10px;
}

.right {
  top: -5px;
  left: 105%;
}

@media (hover: hover) {
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
}
</style>
