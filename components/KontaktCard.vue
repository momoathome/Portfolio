<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  icon: String,
  link: String,
  buttonText: String,
  btnOutline: Boolean,
})
</script>

<template>
  <div class="card">
    <div class="header">
      <div class="header_img">
        <div class="icon" :class="icon" />
      </div>
      <h4 class="card_title">
        {{ title }}
      </h4>
    </div>
    <div class="body">
      <p class="content">
        {{ text }}
      </p>
    </div>
    <div class="footer">
      <a :href="link">
        <Button v-if="btnOutline" class="btn-outline">{{ buttonText }}</Button>
        <Button v-else>{{ buttonText }}</Button>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  background-color: var(--color_darker);
  padding: 1rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 2px solid var(--color_darker);
  max-width: 28.5rem;

  &:first-of-type {
    margin-bottom: 2rem;
  }
  &:hover {
    .icon {
      color: var(--color_main);
    }
  }

  .icon {
    font-size: 4rem;
    color: var(--color_grey);
    transition: all 0.3s;
  }

  .header_img {
    display: flex;
    justify-content: center;
  }

  .card_title {
    font-size: 1.75rem;
    text-align: center;
    margin-block: 1rem 1rem;
  }

  .body {
    display: flex;
    justify-content: center;
  }

  .content {
    font-size: 15px;
    text-align: center;
    color: var(--color_grey);
  }

  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;

    p {
      font-size: 14px;
      color: var(--color_grey);
    }
  }
}

@media (min-width: 768px) {
  .card {
    width: 60%;
    margin: 0 auto;

    &:first-of-type {
      margin-bottom: 0;
      margin-top: 2rem;
    }

    .title {
      margin-block: 1rem 2rem;
    }

    .footer {
      margin-top: 2rem;
    }
  }
}

@media (min-width: 1024px) {
  .card {
    width: 100%;
    padding: 2rem;

    &:first-of-type {
      margin-top: 0;
    }

    .footer {
      align-items: flex-end;
    }

    .icon {
      color: var(--color_dark);
    }
  }
}
</style>
