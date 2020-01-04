<template>
  <div class="card-component" 
    :hasImage="hasImage" 
    :title="title" 
    :content="content"
    >
    <div v-if="title" class="card-component__title">
      <slot name="title"></slot>
    </div>
    <div v-if="content" class="card-component__content">
      <slot name="content"></slot>
    </div>
    <div v-if="hasImage" class="card-component__photo">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'card-component',
  props: {
    title: {
      type: Boolean,
      default: true,
    },
    content: {
      type: Boolean,
      default: true,
    },
    hasImage: {
      type: Boolean,
      default: false,
    },
    props: {
      type: Object,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.card-component {
  width: 100%;
  //height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: white;
  padding: $gt-med;
  align-items: center;
  align-content: center;
  margin: $gt-med;

  &__title {
    font-size: $fz-l;
    font-weight: $fw-l;
  }

  &__content {
    font-size: $fz-med;
    font-weight: $fw-med;
  }

  &__photo {
    width: 100%;
    height: 100%;
    align-self: center;
  }

  @include media(xs) {
    width: 328px;
  }
}
</style>
