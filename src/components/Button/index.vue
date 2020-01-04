<template>
  <button class="btn" :disabled="disabled" :class="[`btn__type--${type}`]" @click="handleClick">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'gm5-button',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'normal',
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    },
  },
}
</script>
<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.btn {
  width: 132px;
  height: 37px;
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  cursor: pointer;
  -webkit-appearance: none;
  font-size: $fz-med;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 $gt-base $gt-sm rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: 0;
  }

  &:active {
    position: relative;
    top: 1px;
    box-shadow: 0;
  }

  &__type {
    &--success {
      background-color: $c-green-1;
    }
    &--error {
      background-color: $c-red-1;
    }
    &--normal {
      background-color: $c-orange-4;
    }
  }
}
</style>

