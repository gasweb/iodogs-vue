<template>
  <div class="container">
    <LineDetail :line="getLineBySlug($route.params.slug)" />
    <CatalogCard
      v-for="product in getProductsByLine($route.params.slug)"
      :key="product.slug"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogCard from '@/views/product/card.vue'
import LineDetail from '@/views/line/line-detail.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'LineCatalog',
  components: { CatalogCard, LineDetail },
  computed: {
    ...mapGetters(['getProductsByLine', 'getLineBySlug']),
  },
})
</script>
