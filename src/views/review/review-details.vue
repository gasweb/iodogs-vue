<template>
  <div class="row">
    <div class="col-md-8 col-md-offset-1">
      <p class="bold">{{ review.name }} ({{ review.city }})</p>
      <p>{{ review.text }}</p>
    </div>
    <div class="col-md-2 center">
      <BreedDetails :breed="getBreedBySlug(review.breed_slug)" />
    </div>
  </div>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import BreedDetails from '@/views/breed/breed-details.vue'

export default defineComponent({
  name: 'ReviewDetails',
  components: {
    BreedDetails,
  },
  props: {
    review: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
  computed: {
    ...mapGetters(['getBreedBySlug']),
  },
})
</script>
