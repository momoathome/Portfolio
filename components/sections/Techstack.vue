<template>
  <section id="Techstack" class="section">
    <div class="container">
      <h3 class="section-heading">Mein Techstack</h3>
      <div class="techstack-container">
        <TechstackCard
          v-for="tech in techstack"
          :key="tech.title"
          :title="tech.title"
          :description="tech.description"
          :icon="tech.icon"
          :link="tech.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const techstack = ref([
  {
    title: 'Html',
    description:
      'Hyper Text Markup Language describes the structure of a Web page and tells the browser how to display the content',
    icon: 'i-simple-icons-html5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    title: 'CSS',
    description:
      'Cascading Style Sheets describes the presentation of a Web page and tells the browser how elements should be rendered on screen',
    icon: 'i-fa-brands-css3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    title: 'JavaScript',
    description:
      "Dynamic programming language that's used for web development. It allows you to implement dynamic features on web pages",
    icon: 'i-fa-brands-js-square',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'TypeScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    icon: 'i-bxl-typescript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Sass',
    description:
      'Syntactically awesome Style Sheets is an extension of CSS that enables you to use things like variables, nested rules, functions and more',
    icon: 'i-fa-brands-sass',
    link: 'https://sass-lang.com/guide#topic-2',
  },
  {
    title: 'NodeJs',
    description:
      'An open source development platform for executing JavaScript code server-side',
    icon: 'i-fa-brands-node-js',
    link: 'https://nodejs.org/en/about/',
  },
  {
    title: 'Vue.js',
    description:
      'A JavaScript framework for building user interfaces. It provides a declarative and component-based programming model',
    icon: 'i-fa-brands-vuejs',
    link: 'https://vuejs.org/',
  },
  {
    title: 'Nuxt',
    description:
      'Hybrid Vue framework abstracts most of the complex configuration by managing things like auto-import, fetching Data and routing',
    icon: 'i-simple-icons-nuxtdotjs',
    link: 'https://v3.nuxtjs.org/',
  },
  {
    title: 'Bootstrap',
    description:
      'Powerful, extensible, and feature-packed CSS Framework for developing responsive and mobile-first websites',
    icon: 'i-fa-brands-bootstrap',
    link: 'https://getbootstrap.com/',
  },
  {
    title: 'Tailwind',
    description:
      'Utility-first CSS framework for rapidly building custom user interfaces',
    icon: 'i-simple-icons-tailwindcss',
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'UnoCSS',
    description: 'The instant on-demand Atomic CSS engine.',
    icon: 'i-simple-icons-unocss',
    link: 'https://github.com/unocss/unocss',
  },
  {
    title: 'Font Awesome',
    description:
      'Icon Toolkit that gives you scalable vector icons that can be customized',
    icon: 'i-fa-brands-font-awesome-flag',
    link: 'https://fontawesome.com/',
  },
  {
    title: 'git',
    description: 'Is a free and open source distributed version control system',
    icon: 'i-fa-brands-git-alt',
    link: 'https://git-scm.com/',
  },
  {
    title: 'Github',
    description:
      "Web-based interface for git, to easily work with repo's and branches and create merges and pull request's",
    icon: 'i-fa-brands-github',
    link: 'https://github.com/',
  },
  {
    title: 'npm',
    description:
      "The world's largest Software Library and also a software Package Manager and Installer",
    icon: 'i-fa-brands-npm',
    link: 'https://www.npmjs.com/',
  },
  {
    title: 'Figma',
    description: 'Web-based graphics editing and user interface design app',
    icon: 'i-fa-brands-figma',
    link: 'https://www.figma.com/',
  },
])
</script>

<style lang="scss" scoped>
.techstack-container {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .techstack-container {
    gap: 0 4rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (min-width: 1024px) {
  .techstack-container {
    margin-top: 5rem;
    gap: 1rem;
  }
}
</style>
