<template>
  <div class="card">
    <div class="header">
      <div class="header_img">
        <slot name="header-img"> </slot>
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
  padding: 2rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border: 2px solid $color_darker;

  &:hover {
    .icon {
      color: $color_main;
    }
  }

  .icon {
    font-size: 4.5rem;
    color: lighten($color: $color_darker, $amount: 10%);
    transition: color 0.35s;
  }

  .header_img {
    display: flex;
    justify-content: center;
  }

  .card_title {
    font-size: 1.75rem;
    text-align: center;
    margin-block: 1rem 2rem;
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
    align-items: flex-end;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    p {
      font-size: 14px;
      color: $color_grey;
    }
  }
}
</style>
