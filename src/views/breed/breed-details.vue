<template>
  <router-link :to="{ name: 'Продукты для породы', params: { slug: breed.slug } }"
    ><img :src="getCoverURL()" alt="" style="width: 200px" class="img-fluid rounded"
  /></router-link>
  <br />
  <router-link :to="{ name: 'Продукты для породы', params: { slug: breed.slug } }">{{
    breed.rus_title
  }}</router-link>
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
      return '/no-breed.png'
    },
    getBreedURL() {
      return '/breed/' + this.breed.slug
    },
  },
})
</script>
