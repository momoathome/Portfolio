<template>
  <h3 class="section-heading">Über Mich</h3>
  <h4 class="about-heading">Ich bin Maurice Knoll</h4>
  <h5 class="color-main about-heading-sub">
    <span><font-awesome-icon class="color-main" icon="fa-solid fa-code" /></span>
    Web-Entwickler
  </h5>

  <p class="about-text">
    Ich designe und entwickle Komponenten und Optimierungen für kleinere und mittlere
    Web-Applikationen und kreative Frontend-Lösungen.
  </p>
  <p class="about-text">
    Meine Kenntnisse in der Web Entwicklung habe ich mir autodidaktisch über mehrere Jahre
    erarbeitet. Diese Erfahrungen möchte ich gerne in einem agilen, offenen und
    motivierten Team als Web-Entwickler anwenden und erweitern.
  </p>

  <hr />

  <div class="details-container">
    <div class="details-block col-1">
      <AboutMeDetail title="über mich" position="top">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-user" />
        </template>

        Maurice Knoll - 26
      </AboutMeDetail>

      <AboutMeDetail title="Wohnort" position="left">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </template>

        Bayern, Deutschland
      </AboutMeDetail>

      <AboutMeDetail title="Sprachen" position="bottom">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-language" />
        </template>

        Deutsch, Englisch
      </AboutMeDetail>
    </div>

    <div class="details-block col-2">
      <AboutMeDetail title="telefon" position="top">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-phone" />
        </template>

        <a href="tel:+4915172745427" class="color-link link-active">+49 151 72745427</a>
      </AboutMeDetail>

      <AboutMeDetail title="Email" position="left">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </template>

        <a href="mailto:mknoll1901@gmail.com" class="color-link link-active">
          mknoll1901@gmail.com
        </a>
      </AboutMeDetail>

      <AboutMeDetail title="github" position="bottom">
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-link" />
        </template>

        <a
          href="https://github.com/momoathome"
          target="_blank"
          rel="noopener noreferrer"
          class="color-link link-active"
        >
          github.com/momoathome
        </a>
      </AboutMeDetail>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.about-heading {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}
.about-heading-sub {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

a {
  color: $color_grey;
}
.link-active {
  position: relative;
  transition: all 0.3s;

  &:hover {
    color: $color_main;
  }
}

.about-text {
  color: $color_grey;
  max-width: 75ch;
  margin-bottom: 1rem;
  line-height: 1.5;
}
.details-container {
  display: grid;
  grid-template-columns: 1fr;
}

.details-block {
  & > div {
    margin-bottom: 1rem;
  }
}

.col-2 {
  .detail:last-of-type {
    margin-bottom: 0;
  }
}

.section-heading {
  padding-top: 3rem;
}

@media (min-width: 768px) {
  .details-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .col-1,
  .col-2 {
    .detail:last-of-type {
      margin-bottom: 3rem;
    }
  }
}
@media (min-width: 1024px) {
  .section-heading {
    padding-top: 0;
  }

  .about-text {
    max-width: 70ch;
  }
}
</style>
