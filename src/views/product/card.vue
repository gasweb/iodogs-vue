<template>
  <div class="row">
    <div class="col-md-3">
      <router-link :to="getProductURL()">
        <img class="img-fluid" style="margin:auto;>" :src="getCoverURL()" :alt="getRusTitle()" />
      </router-link>
    </div>
    <div class="col-md-9">
      <a class="bold" :href="getProductURL()">
        {{ product.rus_title }}
      </a>
      <p>
        {{ product.card_text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CatalogCard',
  props: {
    product: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
  methods: {
    getProductURL() {
      return '/item/' + this.product.slug
    },
    getCoverURL() {
      const productImages = this.product.images
      if (productImages != undefined && productImages.length > 0) {
        return productImages[0].s3_small_file_path
      }
      return '/no-image.png'
    },
    getRusTitle() {
      return this.product.rus_title
    },
  },
})
</script>
