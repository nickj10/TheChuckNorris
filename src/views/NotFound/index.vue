<template>
    <div class="not-found">
        <div class="not-found__logo">
            <img src="./chuck-norris-1.png" alt="Chuck Norris Not Found">
        </div>
        <div class="not-found__title">
            404 Not Found
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
  background-color: $c-orange-bg;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  &__title {
    font-family: $ff-base;
  }
}
</style>




