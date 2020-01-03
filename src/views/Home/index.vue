<template>
    <div class="home">
        <div class="home__title">
            The Chuck Norris
        </div>
        <div class="container home__about">
            <span>Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline Chun Kuk Do. Norris is a black belt in Tang Soo Do, Brazilian jiu jitsu and Judo. Shortly after, in Hollywood, Norris trained celebrities in martial arts. Norris went on to appear in a minor role in the spy film The Wrecking Crew (1969). </span>
            <img src="https://4.bp.blogspot.com/-7J8h-PXjINk/V2_MFXxfTWI/AAAAAAAAQa4/CR4Ylm_X0vEuVFI0lysl3_nLdF91xrHbgCLcB/s200/chuck_norris_walker.png" alt="Chuck Norris">
        </div>
        <div class="home__joke">
            <div class="home__joke--inner">
                <h2>Joke Time</h2>
                <span>{{info.data.value}}</span>
            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            info: null
        }
    },
    metaInfo() {
        return {
            title: 'Chuck Norris',
        }
    },
    mounted() {
        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(response => (this.info = response))
    },
}
</script>

<style lang="scss" scoped>
@import "static/settings.scss";
@import "static/mixins.scss";

.home {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: $fz-xxxl;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
    margin-bottom: $gt-med;
  }

  &__about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__joke {
    background-color: $c-orange-3;

    &--inner {
        height: 300px;
    }
  }
}
</style>
