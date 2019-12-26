<template>
    <div class="not-found">
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
@import 'static/settings.scss';

.not-found {
  max-width: 244px;
  @include media(md) {
    max-width: 420px;
  }
  &__title {
    font-family: $ff-base;
    display: flex;
    justify-items: center;
    align-items: center;
  }
}
</style>




