<template>
  <div class="techstack-container">
    <div class="techstack">
      <p>Techstack</p>
      <div class="icons">
        <Tooltip title="Html">
          <font-awesome-icon icon="fa-brands fa-html5" />
        </Tooltip>
        <Tooltip title="Sass">
          <font-awesome-icon icon="fa-brands fa-sass" />
        </Tooltip>
        <Tooltip title="Css">
          <font-awesome-icon icon="fa-brands fa-css3" />
        </Tooltip>
        <Tooltip title="JavaScript">
          <font-awesome-icon icon="fa-brands fa-js-square" />
        </Tooltip>
        <Tooltip title="Node.js">
          <font-awesome-icon icon="fa-brands fa-node-js" />
        </Tooltip>
      </div>
    </div>
    <div class="techstack">
      <p>Frameworks</p>
      <div class="icons">
        <Tooltip title="Vue.js">
          <font-awesome-icon icon="fa-brands fa-vuejs" />
        </Tooltip>
        <Tooltip title="Nuxt">
          <img src="/img/nuxt-light.png" alt="" />
        </Tooltip>
        <Tooltip title="Bootstrap">
          <font-awesome-icon icon="fa-brands fa-bootstrap" />
        </Tooltip>
        <Tooltip title="Tailwind">
          <img src="/img/tailwind.svg" alt="" />
        </Tooltip>
        <Tooltip title="Font Awesome">
          <font-awesome-icon icon="fa-solid fa-font-awesome" />
        </Tooltip>
      </div>
    </div>
    <div class="techstack">
      <p>Tools</p>
      <div class="icons">
        <Tooltip title="git">
          <font-awesome-icon icon="fa-brands fa-git-alt" />
        </Tooltip>
        <Tooltip title="GitHub">
          <font-awesome-icon icon="fa-brands fa-github" />
        </Tooltip>
        <Tooltip title="Figma">
          <font-awesome-icon icon="fa-brands fa-figma" />
        </Tooltip>
        <Tooltip title="npm">
          <font-awesome-icon icon="fa-brands fa-npm" />
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.techstack-container {
  display: grid;
  grid-template-columns: 1fr;

  p {
    margin-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  .techstack-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .techstack-container {
    margin-inline-start: 7%;
  }
}
.icons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  & * {
    width: 32px;
    height: 32px;
    transition: 0.15s;

    @media (hover: hover) {
      &:hover {
        transform: translateY(-0.25rem);
      }
    }
  }
}

@media (min-width: 1200px) {
  .techstack-container {
    grid-template-columns: 38% 1fr 1fr;
  }
}
</style>
