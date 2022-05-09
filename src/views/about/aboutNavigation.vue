<template>
  <div class="content_sidebar__menu">
    <ul class="nav nav-pills nav-stacked">
      <li class="active">
        <a href="http://www.isleofdogs.ru/brand">История бренда</a>
      </li>
      <li>
        <a href="http://www.isleofdogs.ru/ingredients">Ингредиенты</a>
      </li>
      <li>
        <a href="http://www.isleofdogs.ru/faq">Вопросы и ответы</a>
      </li>
      <li>
        <a href="http://www.isleofdogs.ru/video">Видео</a>
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
