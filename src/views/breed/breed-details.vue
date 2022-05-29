<template>
  <a :href="getBreedURL()" class="">
    <img :src="getCoverURL()" alt="" class="img-responsive img-thumbnail" /> </a
  ><br />
  <a :href="getBreedURL()" class=""> {{ breed.rus_title }} </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreedDetails',
  props: {
    breed: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
  methods: {
    getCoverURL() {
      if (this.breed.cover != null) {
        return this.breed.cover
      }
      return '/no-image.png'
    },
    getBreedURL() {
      return '/breed/' + this.breed.slug
    },
  },
})
</script>
