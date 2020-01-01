<template>
    <div class="card-component">
        <span class="card-component__title">
            <slot name="title"></slot>
        </span>
        <div class="card-component__content">
            <slot name="content"></slot>
        </div>
        <div class="card-component__photo">
            <slot />
        </div>
    </div>
</template>
<script>
export default {
    name: 'card-component',
}
</script>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.card-component {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: var(--white);
  padding: $gt-med;
  align-items: center;
  align-content: center;
  margin: $gt-base;

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
