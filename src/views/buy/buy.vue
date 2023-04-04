<template>
  <div class="container">
    <div class="buy" style="display: none">
      <h2 class="text-center">Оптовые закупки</h2>
      <h3 class="text-center">Работаем с оптовиками, грумерами и питомниками</h3>
      <ul class="list-unstyled list-inline center">
        <li>
          <span class="glyphicon glyphicon-phone"></span>
          <a href="tel:79037926112">+7(903)792-6112</a>
        </li>
        <li>
          <a href="mailto:shop@isleofdogs.ru"
            ><span class="glyphicon glyphicon-envelope"></span> shop@isleofdogs.ru</a
          >
        </li>
      </ul>
    </div>
    <hr />
    <h1 class="text-center">Розничные продажи</h1>
    <div class="buy">
      <h2 class="text-center">Интернет Магазин Pet Gear</h2>
      <h3 class="text-center">Доставка по Москве, отправка по всей территории России</h3>
      <ul class="list-unstyled list-inline center">
        <li>
          <a
            class="btn btn-success"
            href="http://petgear.ru/catalog/groom/cosmetic/Isleofdogs/"
            target="_blank"
            ><span class="glyphicon glyphicon-shopping-cart"></span> Перейти в магазин</a
          >
        </li>
        <li>
          <a class="btn btn-default" href="http://petgear.ru/payment/" target="_blank"
            ><span class="glyphicon glyphicon-info-sign"></span> Доставка и оплата</a
          >
        </li>
      </ul>
    </div>
    <div class="buy">
      <h2 class="text-center">Интернет-зоомагазин Petcetera</h2>
      <h3 class="text-center">Доставка по Москве, отправка по всей территории России</h3>
      <ul class="list-unstyled list-inline center">
        <li>
          <a
            class="btn btn-success"
            href="https://petcetera.ru/catalog/kosmetika/kosmetika_isle_of_dogs/"
            target="_blank"
            ><span class="glyphicon glyphicon-shopping-cart"></span> Перейти в магазин</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HowToBuy',
})
</script>
