<template>
  <h1>{{ line.title }}</h1>
  <CatalogCard v-for="product in lineCatalog" :key="product.slug" :product="product" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CatalogCard from '@/views/card.vue'

export default defineComponent({
  name: 'AppLineCatalog',
  components: { CatalogCard },
  computed: {
    lineCatalog() {
      return this.$store.getters.getProductsByLine(this.$route.params.slug)
    },
    line() {
      return this.$store.getters.getLineBySlug(this.$route.params.slug)
    },
  },
})
</script>
