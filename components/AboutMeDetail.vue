<template>
  <div class="detail color-main">
    <tooltip :title="props.title" :position="props.position">
      <div class="icon" :class="props.icon" />
    </tooltip>

    <span class="content" v-if="isAnkerTagShown()">
        <NuxtLink v-if="hasTarget" :href="props.link" target="_blank" rel="noopener noreferrer" class="color-link link-active"> 
          {{ props.text }}
        </NuxtLink>
        <NuxtLink v-else :href="props.link" class="color-link link-active"> 
          {{ props.text }}
        </NuxtLink>
    </span>
    <span class="content" v-else>
      {{ props.text }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  text: String,
  icon: String,
  link: String,
  hasTarget: Boolean,
  position: {
    type: String,
    default: 'bottom',
  },
})

function isAnkerTagShown() {
  if (props.link && props.link.length >= 2) {
    return true
  } else return false
}
</script>

<style lang="scss" scoped>
.link-active {
  position: relative;
  transition: all 0.3s;

  &:hover {
    color: $color_main;
  }
}

a {
  color: $color_grey;
}
.detail {
  & span {
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
