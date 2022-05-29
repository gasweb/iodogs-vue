<template>
  <h1>{{ solution.title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SolutionDetails',
  props: {
    solution: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
})
</script>
