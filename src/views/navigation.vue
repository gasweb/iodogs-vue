<template>
  <div class="collapse navbar-collapse">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
        <a
          id="nav-home-id"
          class="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >О косметике
        </a>
        <ul class="dropdown-menu" aria-labelledby="nav-home-id">
          <li class="dropdown-item">
            <router-link to="/brand"> История бренда </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/ingredients"> Ингредиенты </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/faq"> Вопросы и ответы </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          id="nav-catalog-id"
          class="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Продукция
        </a>
        <ul class="dropdown-menu" aria-labelledby="nav-catalog-id">
          <li class="dropdown-item">
            <router-link to="/catalog/shampoo"> Шампуни </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/conditioners"> Кондиционеры </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/spray"> Спреи для грумминга </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/styling"> Средства для укладки </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/replascent"> Дезодоранты </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          id="nav-series-id"
          class="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Серии
        </a>
        <ul class="dropdown-menu" aria-labelledby="nav-series-id">
          <li class="dropdown-item">
            <router-link to="/line/coature"> Coature </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/vanity"> Vanity </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/salon"> Salon </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/everyday">Everyday </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/naturaluxury-everyday"> Naturaluxury Everyday </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          id="nav-solutions-id"
          class="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Решения
        </a>
        <ul class="dropdown-menu" aria-labelledby="nav-solutions-id">
          <li class="dropdown-item">
            <router-link to="/breed"> Для породы </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/shedding"> Выпадение шерсти </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/itchy-flaky-skinn"> Зудящая, шелушащаяся кожа </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/undesirable-odor">Нежелательный запах </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/allergies"> Аллергии </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/thin-lifeless-hair">
              Тонкая, безжизненная шерсть
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/solution/dull-coat"> Тусклая шерсть </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/static-flyaways">
              Наэлектризованная, непослушная шерсть
            </router-link>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a
          id="nav-education-id"
          class="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          >Обучение
        </a>
        <ul class="dropdown-menu" aria-labelledby="nav-education-id">
          <li class="dropdown-item">
            <router-link to="/bathe-basic"> Основы купания </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/dry-basic"> Основы сушки </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/myths"> Разрушаем мифы </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/do-dont">Правила ухода за собакой </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/puppy"> Уход за щенками </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/coat-types"> Типы шерсти </router-link>
          </li>
        </ul>
      </li>
      <router-link v-slot="{ href, navigate, isActive, isExactActive }" to="/buy" custom>
        <li
          :class="[
            'nav-item',
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
          ]"
        >
          <a :href="href" class="nav-link" @click="navigate">Купить</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AppNavigation',
})
</script>
