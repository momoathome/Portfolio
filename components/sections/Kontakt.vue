<script setup lang="ts">
const kontakt = [
  {
    title: 'sende mir eine E-Mail',
    text: 'Sobald die E-Mail bei mir eingegangen ist, bearbeite ich diese zeitnah und melde mich bei dir',
    icon: 'i-fa6-solid-envelope',
    link: 'mailto:mknoll1901@gmail.com',
    buttonText: 'E-Mail senden',
    btnOutline: false,
  },
  {
    title: 'telefoniere mit mir',
    text: 'Du suchst den persönlichen Kontakt? Kein Problem! Rufe mich direkt an',
    icon: 'i-fa6-solid-phone',
    link: 'tel:+4915172745427',
    buttonText: 'anrufen',
    btnOutline: true,
  },

]
</script>

<template>
  <section id="contact" class="section">
    <div class="container">
      <h3 class="section-heading">
        Kontakt
      </h3>
      <div class="grid">
        <KontaktCard
          v-for="item in kontakt"
          :key="item.title"
          :title="item.title"
          :text="item.text"
          :icon="item.icon"
          :link="item.link"
          :button-text="item.buttonText"
          :btn-outline="item.btnOutline"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .grid {
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 6rem;
    margin-bottom: 2rem;
  }
}
</style>
