<template>
  <h1>{{ category.title }}</h1>
  <CatalogCard v-for="product in catalog" :key="product.slug" :product="product" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogCard from '@/views/card.vue'

export default defineComponent({
  name: 'AppCatalog',
  components: { CatalogCard },
  computed: {
    catalog() {
      return this.$store.getters.getProductsByCategory(this.$route.params.slug)
    },
    category() {
      return this.$store.getters.getCategoryBySlug(this.$route.params.slug)
    },
    getCover(slug) {
      return this.$store.getters.getProductCoverBySlug(slug)
    },
  },
})
</script>
