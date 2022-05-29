<template>
  <h1>{{ line.title }}</h1>
  <div class="jumbotron">
    <p>{{ line.description }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LineDetail',
  props: {
    line: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
})
</script>
