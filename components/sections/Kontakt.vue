<template>
  <section id="contact" class="section">
    <div class="container">
      <h3 class="section-heading">Kontakt</h3>
      <div class="grid">
        <Card>
          <template #header-img>
            <font-awesome-icon :class="'icon'" icon="fa-solid fa-envelope" />
          </template>
          <template #card-title> sende mir eine E-Mail</template>
          <template #card-content>
            Sobald die E-Mail bei mir eingegangen ist, bearbeite ich diese zeitnah und
            melde mich bei dir
          </template>
          <template #card-footer>
            <a href="mailto:mknoll1901@gmail.com">
              <Button>E-Mail senden</Button>
            </a>
          </template>
        </Card>
        <Card>
          <template #header-img>
            <font-awesome-icon :class="'icon'" icon="fa-solid fa-phone" />
          </template>
          <template #card-title> telefonier mit mir</template>
          <template #card-content>
            Du magst lieber den persönlichen Kontakt? <br />
            Kein Problem! Ruf mich direkt an
          </template>
          <template #card-footer>
            <a href="tel:+4915172745427">
              <Button :class="'btn-outline'">anrufen</Button>
            </a>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
const email = 'mknoll1901@gmail.com'

async function copy(s) {
  await navigator.clipboard.writeText(s)
}
</script>

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
