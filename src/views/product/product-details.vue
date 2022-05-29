<template>
  <div class="container product_detail">
    <div style="text-align: right" class="product_detail__info--flags">
      <span class="badge bg-success">Доставка по России</span>
      <span class="badge bg-info text-dark"
        >В наличии <span class="glyphicon glyphicon-thumbs-up"></span
      ></span>
    </div>
    <h1 class="text-center">{{ getRusTitle() }}</h1>
    <div class="row">
      <div class="col-md-6 col-md-offset-1 product_detail__info">
        <div id="info" class="product_detail__info--tab-pane">
          {{ getDescription() }}
        </div>
        <div class="bs-callout bs-callout-info">
          <h4>Применение</h4>
          <div id="application">
            {{ getApplication() }}
          </div>
        </div>
      </div>
      <div class="col-md-4 col-md-offset-0 product_detail__photo_block">
        <img :src="getCoverURL()" alt="" class="img-thumbnail" />
      </div>
    </div>
    <div class="text-center">
      <a href="/buy" class="btn btn-sm btn-success product__buy_button">
        <span class="glyphicon glyphicon-shopping-cart"></span> Купить с доставкой
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProductDetails',
  props: {
    product: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
  methods: {
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
    getDescription() {
      return this.product.card_text
    },
    getApplication() {
      return this.product.application
    },
  },
})
</script>
