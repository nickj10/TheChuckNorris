<template>
  <div class="gallery">
    <div class="gallery__title">
      Chuck's Gallery
    </div>
    <div class="gallery__photos">
      <card-component>
        <!-- <template slot="header">
              Sample header
            </template>
            <template slot="content">
              Sample content
            </template> -->
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg" alt="Chuck Norris">
      </card-component>
      <card-component>
        <!-- <template slot="header">
              Sample header
            </template>
            <template slot="content">
              Sample content
            </template> -->
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg" alt="Chuck Norris">

      </card-component>
      <card-component>
        <!-- <template slot="header">
              Sample header
            </template>
            <template slot="content">
              Sample content
            </template> -->
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg" alt="Chuck Norris">

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
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    margin: $gt-xl;
    flex-wrap: wrap;

    @include media(sm) {
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
