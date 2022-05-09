<template>
  <div class="container">
    <p>{{ count }}</p>
    <h1>Hello</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CatalogConditioner',
  data() {
    return {
      user: {},
    }
  },
  computed: {
    count() {
      return this.$store.getters.getProductsByCategory('conditioners')
    },
  },
})
</script>
