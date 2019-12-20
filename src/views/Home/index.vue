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
    .home {
        &__title {
            display: flex;
            justify-items: center;
            align-items: center;
        }
    }
</style>
