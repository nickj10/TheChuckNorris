<template>
  <div class="home">
    <div class="home__title home__item">
      The Chuck Norris
    </div>
    <div class="container home__about home__item">
      <span>Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline Chun Kuk Do. Norris is a black belt in Tang Soo Do, Brazilian jiu jitsu and Judo. Shortly after, in Hollywood, Norris trained celebrities in martial arts. Norris went on to appear in a minor role in the spy film The Wrecking Crew (1969). </span>
      <img src="https://4.bp.blogspot.com/-7J8h-PXjINk/V2_MFXxfTWI/AAAAAAAAQa4/CR4Ylm_X0vEuVFI0lysl3_nLdF91xrHbgCLcB/s200/chuck_norris_walker.png" alt="Chuck Norris">
    </div>
    <div class="home__joke home__item">
      <div class="home__joke--inner ">
        <h2 class="title">Joke Time</h2>
        <Button @click="changeJoke" type="success">Generate!</Button>

        <card-component class="joke" :title="false">
          <span slot="content">{{info.data.value}}</span>
        </card-component>
      </div>
    </div>
    <div class="home__chunkukdo home__item">
      <img src="./chuck.svg" alt="Chuck Norris Icon" height="300px">
      <card-component width="400px">
        <span slot="title">Chun Kuk Do</span>
        <div slot="content">
          <ol>
            <li>I will develop myself to the maximum of my potential in all ways.</li>
            <li>I will forget the mistakes of the past and press on to greater achievements.</li>
            <li>I will continually work at developing love, happiness and loyalty in my family.</li>
            <li>I will look for the good in all people and make them feel worthwhile.</li>
            <li>If I have nothing good to say about a person, I will say nothing.</li>
            <li>I will always be as enthusiastic about the success of others as I am about my own.</li>
            <li>I will maintain an attitude of open-mindedness.</li>
            <li>I will maintain respect for those in authority and demonstrate this respect at all times.</li>
            <li>I will always remain loyal to my God, my country, family and my friends.</li>
            <li>I will remain highly goal-oriented throughout my life because that positive attitude helps my family, my country and myself.</li>
          </ol>
        </div>

      </card-component>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardComponent from '@/components/CardComponent'
import Button from '@/components/Button'

export default {
  name: 'home',
  components: {
    CardComponent,
    Button,
  },
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
  methods: {
    changeJoke() {
      axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(response => (this.info = response))
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
  padding: $gt-med 0;

  &__title {
    font-size: $fz-xxxl;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 25px;
  }

  &__about {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__joke {
    background-color: $c-orange-3;

    &--inner {
      display: flex;
      flex-direction: column;
      height: 500px;
      padding: $gt-xl 100px;
      align-items: center;

      & .title {
        padding-bottom: $gt-med;
      }

      & > card-component {
        padding-top: $gt-med;
      }
    }
  }

  &__chunkukdo {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include media(md) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  &__item {
    padding: $gt-l;
  }
}
</style>
