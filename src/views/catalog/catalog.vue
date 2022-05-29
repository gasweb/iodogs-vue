<template>
  <div class="container">
    <CategoryDetails :category="getCategoryBySlug($route.params.slug)" />
    <CatalogCard
      v-for="product in getProductsByCategory($route.params.slug)"
      :key="product.slug"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogCard from '@/views/product/card.vue'
import CategoryDetails from '@/views/catalog/category-details.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'IsleOfDogsCatalog',
  components: { CatalogCard, CategoryDetails },
  computed: {
    ...mapGetters(['getProductsByCategory', 'getCategoryBySlug']),
  },
})
</script>
