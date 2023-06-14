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
  if (props.link && props.link.length >= 2)
    return true
  else return false
}
</script>

<template>
  <div class="not-last-of-type:mb-4">
    <tooltip :title="props.title" :position="props.position">
      <div class="flex h-20px text-primary w-20px justify-center items-center" :class="props.icon" />
    </tooltip>

    <span v-if="isAnkerTagShown()" class="align-top ms-10px">
      <NuxtLink v-if="hasTarget" :href="props.link" target="_blank" rel="noopener noreferrer" class="text-secondary transition transition-duration-300 hover:text-primary">
        {{ props.text }}
      </NuxtLink>
      <NuxtLink v-else :href="props.link" class="text-secondary transition transition-duration-300 hover:text-primary">
        {{ props.text }}
      </NuxtLink>
    </span>
    <span v-else class="text-base_grey align-top ms-10px">
      {{ props.text }}
    </span>
  </div>
</template>
