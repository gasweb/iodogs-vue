<template>
  <div class="container">
    <img src="../../assets/images/iodogs-logo.jpg" alt="" class="img-thumbnail" />
    <div class="jumbotron">
      <p>
        Косметика для собак «Isle Of Dogs» (Айл Оф Догз) - это полноценная система по уходу за
        шерстью и кожей Вашей собаки. Косметика производится в США. Она основана на уникальном
        использовании природных компонентов, предназначенных для укрепления шерсти.
      </p>
    </div>

    <div id="myCarousel" class="carousel slide" data-interval="3000" data-ride="carousel">
      <!-- Carousel items -->
      <div class="carousel-inner">
        <div class="item">
          <router-link to="/line/coature">
            <img
              src="../../assets/images/couture.jpg"
              alt="Серия «Coature»"
              class="img-thumbnail mauto"
            />
          </router-link>
        </div>
        <div class="item">
          <router-link to="/line/vanity">
            <img
              src="../../assets/images/style.jpg"
              alt="Серия «Vanity»"
              class="img-thumbnail mauto"
            />
          </router-link>
        </div>
        <div class="item active">
          <router-link to="/line/salon">
            <img
              src="../../assets/images/saloon.jpg"
              alt="Серия «Salon Elements»"
              class="img-thumbnail mauto"
            />
          </router-link>
        </div>
        <div class="item">
          <router-link to="/line/everyday">
            <img
              src="../../assets/images/everyday.jpg"
              alt="Серия «Everyday»"
              class="img-thumbnail mauto"
            />
          </router-link>
        </div>
        <div class="item">
          <router-link to="/line/naturaluxury-everyday">
            <img
              src="../../assets/images/naturaluxury.jpg"
              alt="Серия «Naturaluxury Everyday»"
              class="img-thumbnail mauto"
            />
          </router-link>
        </div>
      </div>
      <!-- Carousel nav -->
      <a class="carousel-control left" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="carousel-control right" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>
    </div>

    <h2>Линия продуктов</h2>

    <p>
      Косметика для собак «Isle Of Dogs» включает в себя шампуни, кондиционеры, спреи для
      расчесывания, а также добавки для шерсти и наиболее эффективна при использовании в комплексной
      системе. Шампуни и кондиционеры являются концентратами и могут быть разбавлены с водой, что
      является очень экономичным решением, если Вам приходится часто мыть свою собаку.
    </p>

    <h2>Косметика для всех собак</h2>

    <p>
      Косметика «Isle Of Dogs» идеально подходит для большинства пород собак. Косметику можно
      использовать как для ежедневного мытья собаки так и для мытья перед выставкой. Шампуни и
      кондиционеры «Isle Of Dogs» очищают и питают шерсть и кожу Вашей собаки в процессе мытья,
      легко наносятся на шерсть и легко смываются водой. Богатая линия средств для укладки поможет
      придать шерсти Вашей собаки дополнительный объем перед выставкой, дополнительно увлажнить
      шерсть, либо сделать потрясающую укладку.
    </p>

    <p class="italic">
      Подарите Вашей собаке косметику «Isle Of Dogs» и Вы будете вознаграждены как здоровьем собаки,
      так и здоровыми отношениями между вами и вашей собакой.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: {},
})
</script>
