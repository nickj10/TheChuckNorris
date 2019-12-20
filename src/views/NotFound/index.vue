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
    .not-found {
        &__title {
            display: flex;
            justify-items: center;
            align-items: center;
        }
    }
</style>




