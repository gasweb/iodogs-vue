<template>
  <div v-if="hasReviews()" class="container">
    <h3>Отзывы</h3>
    <ReviewDetails v-for="review in reviews" :key="review.id" :review="review" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ReviewDetails from '@/views/review/review-details.vue'

export default defineComponent({
  name: 'ProductReviews',
  components: {
    ReviewDetails,
  },
  props: {
    reviews: {
      type: [Array],
      default() {
        return []
      },
    },
  },
  methods: {
    hasReviews() {
      return this.reviews.length > 0
    },
  },
})
</script>
