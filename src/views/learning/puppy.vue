<template>
  <div class="container">
    <div class="col-md-9">
      <h1 class="text-center">Уход за щенками</h1>
      <div class="puppy_page_block">
        <img src="/img/material/puppy.jpg" alt="" class="img-responsive img-thumbnail pull-left" />
        <p>
          Щенков можно и нужно регулярно купать с восьминедельного возраста. Приучившись к купанию с
          раннего возраста, они будут спокойнее относиться к этому процессу, когда вырастут. Купание
          также является отличной возможностью сблизиться со щенком. В процессе роста щенка, его
          шерсть проходит многие стадии. Использование
          <router-link :to="{ name: 'Продукт', params: { slug: 'tearless-puppy-shampoo' } }"
            >шампуня «без слез» для щенков</router-link
          >
          от Isle of Dogs поможет шерсти перенести изменения и сохранит кожу здоровой, а также
          поможет сократить выпадение шерсти.
        </p>
        <p>
          Маленькие щенки плохо терпят слишком холодную или слишком горячую воду. Необходимо
          использовать именно теплую воду во время купания, и что более важно – держать щенка в
          сухом и теплом месте до тех пор, пока его шерсть и кожа не высохнут полностью.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LearningPuppy',
})
</script>
