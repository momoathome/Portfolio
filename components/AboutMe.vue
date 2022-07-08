<template>
  <h3 class="section-heading">Über Mich</h3>
  <h4>Ich bin Maurice Knoll</h4>
  <h5 class="color-main">Ich bin Frontend Web Entwickler</h5>
  <p class="about-text">
    Ich designe und entwickle Komponenten und Optimierungen für kleinere und mittlere
    Web-Applikationen und kreative Frontend-Lösungen.
  </p>
  <p class="about-text">
    Meine Kenntnisse in der Web Entwicklung habe ich mir autodidaktisch über mehrere Jahre
    erarbeitet und setzte diese gern in einem agilen, offenen und motivierten Team als
    Frontend Web-Entwickler ein.
  </p>
  <hr />
  <div class="details-container">
    <div class="details-block col-1">
      <div class="detail color-main">
        <tooltip title="über mich" position="top">
          <font-awesome-icon icon="fa-solid fa-user" />
        </tooltip>
        <span> Maurice Knoll - 26</span>
      </div>
      <div class="detail color-main">
        <tooltip title="Wohnort" position="left">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </tooltip>
        <span> Bayern, Deutschland</span>
      </div>
      <div class="detail color-main">
        <tooltip title="Sprachen">
          <font-awesome-icon icon="fa-solid fa-language" />
        </tooltip>
        <span> Deutsch, Englisch</span>
      </div>
    </div>
    <div class="details-block col-2">
      <div class="detail color-main">
        <tooltip title="telefon" position="top">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </tooltip>
        <a href="tel:+4915172745427" class="color-link link-active">
          +49 151 72 74 54 27</a
        >
      </div>
      <div class="detail color-main">
        <tooltip title="Email" position="left">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </tooltip>
        <a href="mailto:mknoll1901@gmail.com" class="color-link link-active">
          mknoll1901@gmail.com</a
        >
      </div>
      <div class="detail color-main">
        <tooltip title="github">
          <font-awesome-icon icon="fa-solid fa-link" />
        </tooltip>
        <a href="https://github.com/momoathome" class="color-link link-active">
          Github.com/momoathome</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
h4 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}
h5 {
  font-size: 1.15rem;
  margin-bottom: 2rem;
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

  & span,
  a {
    margin-left: 10px;
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
