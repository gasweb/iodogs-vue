<template>
  <h1 class="text-center">{{ category.title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoryDetails',
  props: {
    category: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
})
</script>
