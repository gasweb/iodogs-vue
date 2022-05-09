<template>
  <div class="home container">
    <h1>test</h1>
    <div class="row">
      <div class="col-md-9 pt-5">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
          <Product v-for="product in products" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from '../../components/product.vue'

import { useStore } from 'vuex'

export default {
  name: 'HomeCatalog',
  components: {
    Product,
  },
  setup() {
    const store = useStore()
    console.log(store.getters.members)
  },
}
</script>
