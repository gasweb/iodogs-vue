<template>
  <figure class="center">
    <img :src="getCoverURL()" alt="" class="figure-img img-fluid rounded" />
    <figcaption class="">{{ breed.rus_title }}</figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BreedCard',
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
      return '/no-breed.png'
    },
  },
})
</script>
