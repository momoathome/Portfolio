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
    <div>
      <p class="color-main">
        <tooltip title="über mich" position="top">
          <font-awesome-icon icon="fa-solid fa-user" />
        </tooltip>
        <span> Maurice Knoll - 26</span>
      </p>
      <p class="color-main">
        <tooltip title="Wohnort" position="left">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
        </tooltip>
        <span> Bayern, Deutschland</span>
      </p>
      <p class="color-main">
        <tooltip title="Sprachen">
          <font-awesome-icon icon="fa-solid fa-language" />
        </tooltip>
        <span> Deutsch, Englisch</span>
      </p>
    </div>
    <div>
      <p class="color-main">
        <tooltip title="telefon" position="top">
          <font-awesome-icon icon="fa-solid fa-phone" />
        </tooltip>
        <a href="tel:+4915172745427" class="color-link"> +49 151 72 74 54 27</a>
      </p>
      <p class="color-main">
        <tooltip title="Email" position="left">
          <font-awesome-icon icon="fa-solid fa-envelope" />
        </tooltip>
        <a href="mailto:mknoll1901@gmail.com" class="color-link"> mknoll1901@gmail.com</a>
      </p>
      <p class="color-main">
        <tooltip title="github">
          <font-awesome-icon icon="fa-solid fa-link" />
        </tooltip>
        <a href="https://github.com/momoathome" class="color-link">
          Github.com/momoathome</a
        >
      </p>
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
  text-decoration: none;
}

.about-text {
  color: $color_grey;
  max-width: 600px;
  margin-bottom: 1rem;
  line-height: 1.5;
}
.details-container {
  display: flex;
  justify-content: space-between;
  max-width: 600px;

  p span,
  a {
    margin-left: 10px;
  }

  p:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
