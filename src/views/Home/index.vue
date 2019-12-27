<template>
    <div class="home">
        <div class="home__title">
            The Chuck Norris
        </div>
    </div>
</template>

<script>
export default {
    metaInfo() {
        return {
            title: 'Chuck Norris',
        }
    },
}
</script>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.home {
  &__title {
    font-size: $fz-xxxl;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
  }
}
</style>
