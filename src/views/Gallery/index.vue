<template>
    <div class="gallery">
        <div class="gallery__title">
            Chuck's Gallery
        </div>
        <div class="gallery__photos">
          <card-component>
            <template slot="header">
              Sample header
            </template>
            <template slot="content">
              Sample content
            </template>
          </card-component>
        </div>
    </div>
</template>
<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'gallery',
  components: {
    CardComponent,
  }
}
</script>

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

  &__photos {
    margin: $gt-xl;
  }
}
</style>
