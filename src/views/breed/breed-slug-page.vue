<template>
  <div class="container">
    <div class="row">
      <div class="sidebar col-md-3">
        <img id="sidebar-logo" src="/logo.jpeg" alt="Isle Of Dogs" class="img-responsive" />
        <BreedCard :breed="getBreedBySlug($route.params.slug)" />
      </div>
      <div class="col-md-9">
        <ul id="myTab" class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              id="products-tab"
              class="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#products"
              type="button"
              role="tab"
              aria-controls="products"
              aria-selected="true"
            >
              Продукция
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="reviews-tab"
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Отзывы
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              id="contact-tab"
              class="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Контакты
            </button>
          </li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <div
            id="products"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="products-tab"
          >
            <CatalogCard
              v-for="product in getProductsByBreedSlug($route.params.slug)"
              :key="product.slug"
              :product="product"
            />
          </div>
          <div id="reviews" class="tab-pane fade" role="tabpanel" aria-labelledby="reviews-tab">
            <ProductReviews :reviews="getReviewsByBreedSlug($route.params.slug)" />
          </div>
          <div id="contact" class="tab-pane fade" role="tabpanel" aria-labelledby="contact-tab">
            <HowToBuy />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import CatalogCard from '@/views/product/card.vue'
import BreedCard from '@/views/breed/breed-card.vue'
import ProductReviews from '@/views/review/review.vue'
import HowToBuy from '@/views/buy/buy.vue'

export default defineComponent({
  name: 'BreedSlugPage',
  components: { HowToBuy, ProductReviews, BreedCard, CatalogCard },
  computed: {
    ...mapGetters(['getProductsByBreedSlug', 'getBreedBySlug', 'getReviewsByBreedSlug']),
  },
})
</script>
