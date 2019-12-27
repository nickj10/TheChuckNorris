<template>
    <div class="gallery">
        <div class="gallery__title">
            Chuck's Gallery
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.gallery {
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
