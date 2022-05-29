<template>
  <div class="container product_detail">
    <ProductDetails :product="getProductBySlug($route.params.slug)" />
    <ProductReviews :reviews="getReviewsByProduct($route.params.slug)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ProductDetails from '@/views/product/product-details.vue'
import ProductReviews from '@/views/review/review.vue'

export default defineComponent({
  name: 'ProductPage',

  components: { ProductReviews, ProductDetails },
  computed: {
    ...mapGetters(['getProductBySlug', 'getReviewsByProduct']),
  },
})
</script>
