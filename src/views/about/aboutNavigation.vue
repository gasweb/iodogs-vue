<template>
  <div class="content_sidebar__menu">
    <ul class="nav nav-pills nav-stacked">
      <li class="active">
        <a href="/brand">История бренда</a>
      </li>
      <li>
        <a href="/ingredients">Ингредиенты</a>
      </li>
      <li>
        <a href="/faq">Вопросы и ответы</a>
      </li>
      <li>
        <a href="/video">Видео</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutNavigation',
})
</script>
