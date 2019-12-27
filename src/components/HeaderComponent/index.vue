<template>
  <div class="header">
    <div class="header__logos">
      <img id="#chuck-logo" src="./chuck-logo.png" alt="Chuck Norris Logo">
      <a href="/"><img src="./chuck-firma.png" alt="Chuck Norris Signature"></a>
    </div>

    <nav class="header__navbar">
      <a class="header__navbar--option" href="/">HOME</a>
      <a class="header__navbar--option" href="/gallery">GALLERY</a>
      <a class="header__navbar--option" href="/movies">MOVIES</a>
      <a class="header__navbar--option" href="/jokes">JOKES</a>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.header {
  height: 70px;
  background-color: lightgray;
  display: flex;
  overflow: hidden;
  margin: 0;
  padding: 0 $gt-med;
  justify-content: space-between;
  align-items: center;
  -webkit-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.48);
  z-index: 100;

  &__navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    &--option {
      font-weight: $fw-xxl;
      padding: 0 20px;

      &:last-child {
        padding-right: 0;
      }

      &:hover {
        color: $c-orange-2;
      }
    }
  }

  &__logos {
    height: 60px;
  }
}
</style>

