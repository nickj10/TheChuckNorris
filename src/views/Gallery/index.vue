<template>
  <div class="gallery">
    <div class="gallery__title">
      Chuck's Gallery
    </div>
    <div class="gallery__photos">
      <div :images="images" :index="index" @close="index = null"> </div>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="image"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'http://www.gsfdcy.com/data/img/18/1315435-chuck-norris-wallpaper.jpg',
        'https://tribwgnam.files.wordpress.com/2014/03/chucknorris-cbs.jpg?quality=85&strip=all&w=400&h=225&crop=1',
        'http://img4.bdbphotos.com/images/500x250/y/g/ygegtimkvl633ki.jpg?kj8as6ye',
        'http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG23.png',
        'https://i.ytimg.com/vi/Upems4CB_ps/maxresdefault.jpg',
        'https://s.hdnux.com/photos/33/14/24/7128348/6/920x920.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZtc_kF22fxflWqdyKRQaU6iLX3JGrC18twTA2NbMPMHZ9MPtV&s',
        'https://cdn.ebaumsworld.com/mediaFiles/picture/2183782/84442541.jpg',
        'https://img1.grunge.com/img/gallery/was-chuck-norris-a-true-karate-champion/intro-1573666756.jpg',
        'https://ultimateactionmovies.com/wp-content/uploads/2019/04/Chuck-Norris-vs-Communism.jpg',
        'https://cdn0.wideopenspaces.com/wp-content/uploads/2017/02/chuck-norris-coolest-movie-guns-feature-630x339.jpg',
        'http://www.gsfdcy.com/data/img/18/1315530-chuck-norris-wallpaper.jpg'

      ],
      index: null
    };
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
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>
