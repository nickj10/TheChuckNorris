<template>
    <div class="not-found">
        <div class="not-found__logo">
            <img src="./chuck-norris-1.png" alt="Chuck Norris Not Found">
        </div>
        <div class="not-found__title">
            404 Not Found
        </div>
        <div class="not-found__description">
            The page you were looking for doesn't exist.
        </div>
        <div class="not-found__back">
            <span class="not-found__back--icon">&lt;</span>
            <a class="not-found__back--text link_normal" href="/">Back to start page</a>
        </div>

    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: 'Page Not Found',
        }
    },
}
</script>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.not-found {
  background: $c-orange-bg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: $ff-base;
  &__title {
    font-size: $fz-xxxl;
    font-weight: 700;
  }
  &__logo {
    padding-right: 40px;
  }
  &__description {
    font-size: $fz-xl;
    font-weight: 300;
  }
  &__back {
      margin-top: $gt-sm;
      &--icon {
          color: $c-grey-30;
      }
      &--text {
          &:hover {
              color: $c-grey-60;
          }
      }
  }
}
</style>




