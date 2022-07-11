<template>
  <div class="detail color-main">
    <tooltip :title="props.title" :position="props.position">
      <div class="icon">
        <slot></slot>
      </div>
    </tooltip>
    <span v-if="contentIsHtml" v-html="props.content"> </span>
    <span v-else>{{ props.content }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  content: String,
  icon: String,
  position: {
    type: String,
    default: 'bottom',
  },
  contentIsHtml: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.detail span,
a {
  margin-left: 10px;
  vertical-align: top;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
}
</style>
