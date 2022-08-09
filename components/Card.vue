<template>
  <div class="card">
    <div class="header">
      <div class="header_img">
        <slot name="header-img"></slot>
      </div>
      <h4 class="card_title">
        <slot name="card-title"></slot>
      </h4>
    </div>
    <div class="body">
      <p class="content">
        <slot name="card-content"></slot>
      </p>
    </div>
    <div class="footer">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.card {
  background-color: $color_darker;
  padding: 1rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 2px solid $color_darker;
  max-width: 28.5rem;

  &:first-of-type {
    margin-bottom: 2rem;
  }
  &:hover {
    .icon {
      color: $color_main;
    }
  }

  .icon {
    font-size: 4rem;
    color: $color_main;
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
    color: $color_grey;
  }

  .footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;

    p {
      font-size: 14px;
      color: $color_grey;
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
      color: lighten($color: $color_darker, $amount: 10%);
    }
  }
}
</style>
