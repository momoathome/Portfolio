<template>
  <div class="detail color-main">
    <tooltip :title="props.title" :position="props.position">
      <div class="icon">
        <slot name="icon"></slot>
      </div>
    </tooltip>

    <span class="content">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  position: {
    type: String,
    default: 'bottom',
  },
})
</script>

<style lang="scss" scoped>
.detail {
  & span,
  a {
    margin-left: 10px;
    vertical-align: top;
  }
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
}
</style>
