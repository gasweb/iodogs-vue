<template>
  <div class="container">
    <blockquote class="pull-right" style="width: 70%; overflow: hidden; text-align: right">
      <span class="italic">«{{ aphorism.quote }}»</span>
      <br />{{ aphorism.author }}
    </blockquote>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppAphorism',
  props: {
    aphorism: {
      type: [Object],
      default() {
        return {}
      },
    },
  },
})
</script>
