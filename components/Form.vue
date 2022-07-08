<template>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="grid">
      <div class="mail-head">
        <input id="name" type="text" name="user_name" v-model="name" placeholder="Name" />
        <input
          id="email"
          type="email"
          name="user_email"
          v-model="email"
          placeholder="Email"
        />
        <input
          id="subject"
          type="text"
          name="email_subject"
          v-model="subject"
          placeholder="Betreff"
        />
      </div>
      <div class="mail-text">
        <textarea
          id="message"
          name="message"
          cols="40"
          rows="9"
          v-model="message"
          placeholder="Deine Nachricht"
        />
      </div>
    </div>
    <Button type="submit" @click.prevent="send" :class="'btn-outline'">senden</Button>
  </form>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.mail-head {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
}

input,
textarea {
  background-color: $color_darker;
  padding: 0.75rem;
  font-size: 1.1rem;
  color: $color_grey;
  border: none;

  &:focus-visible {
    outline: 1px solid $color_main;
  }
}

.mail-text {
  height: 100%;

  textarea {
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
  }
}
</style>
