<template>
  <div class="container">
    <div class="row">
      <div v-for="breed in getBreeds()" :key="breed.id" class="col-md-3">
        <BreedDetails :breed="breed" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import BreedDetails from '@/views/breed/breed-details.vue'

export default defineComponent({
  name: 'BreedPage',
  components: {
    BreedDetails,
  },
  computed: {
    ...mapGetters(['getBreeds']),
  },
})
</script>
