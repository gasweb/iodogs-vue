<template>
  <div class="col-md-12 thumbnail product product-line line-1 product-category category-2">
    <div class="col-md-3">
      <router-link to="/item/{{ product.slug }}">
        <img
          class="img-responsive"
          style="margin:auto;>"
          src="{{ getCover(product.slug) }}"
          alt="{{ product.eng_title }}"
        />
      </router-link>
    </div>
    <div class="col-md-9">
      <a class="bold" href="/item/{{ product.slug }}">
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
})
</script>
