<template>
  <div class="container">
    <SolutionDetails :solution="getSolutionBySlug($route.params.slug)" />
    <CatalogCard
      v-for="product in getProductsBySolution($route.params.slug)"
      :key="product.slug"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogCard from '@/views/product/card.vue'
import SolutionDetails from '@/views/solution/solution-details.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'SolutionCatalog',
  components: { CatalogCard, SolutionDetails },
  computed: {
    ...mapGetters(['getProductsBySolution', 'getSolutionBySlug']),
  },
})
</script>
