<template>
    <div class="alert-component" :type="type" :icon="icon" :closable="false" :class="[`alert-component__type--${type}`]">
        <div :class="`alert-component__icon alert-component__icon--${type}`">
            <!-- <InfoIcon v-if="type == 'info' && icon" />
        <WarningIcon v-if="type == 'warning' && icon" fill="#ff8a23" />
        <ConfirmIcon v-if="type == 'confirm' && icon" />
        <ErrorIcon v-if="type == 'error' && icon" /> -->
        </div>
        <div class="alert-component__description">
            <div class="alert-component__description--title">
                <text-component as="p" color="sky-d2" weight="xl" :props="props">
                    <slot name="title"></slot>
                </text-component>
            </div>

            <div class="alert-component__description--content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "static/settings.scss";
@import "static/mixins.scss";

.alert-component {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: #4a5557;
  width: auto;
  padding: 16px 24px;
  font-size: 14px;
  line-height: 1.5em;
}
</style>