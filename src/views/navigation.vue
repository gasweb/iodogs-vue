<template>
  <div id="navbarToggleExternalContent" class="collapse navbar-collapse p-4">
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
            <router-link to="/brand" class="dropdown-item"> История бренда </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/ingredients" class="dropdown-item"> Ингредиенты </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/faq" class="dropdown-item"> Вопросы и ответы </router-link>
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
            <router-link to="/catalog/shampoo" class="dropdown-item"> Шампуни </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/conditioners" class="dropdown-item">
              Кондиционеры
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/spray" class="dropdown-item">
              Спреи для грумминга
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/styling" class="dropdown-item">
              Средства для укладки
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/catalog/replascent" class="dropdown-item"> Дезодоранты </router-link>
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
            <router-link to="/line/coature" class="dropdown-item"> Coature </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/vanity" class="dropdown-item"> Vanity </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/salon" class="dropdown-item"> Salon </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/everyday" class="dropdown-item">Everyday </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/line/naturaluxury-everyday" class="dropdown-item">
              Naturaluxury Everyday
            </router-link>
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
            <router-link to="/breed" class="dropdown-item"> Для породы </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/shedding" class="dropdown-item">
              Выпадение шерсти
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/itchy-flaky-skin" class="dropdown-item">
              Зудящая, шелушащаяся кожа
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/undesirable-odor" class="dropdown-item"
              >Нежелательный запах
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/allergies" class="dropdown-item"> Аллергии </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/thin-lifeless-hair" class="dropdown-item">
              Тонкая, безжизненная шерсть
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/dull-coat" class="dropdown-item">
              Тусклая шерсть
            </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/solution/static-flyaways" class="dropdown-item">
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
            <router-link to="/bathe-basic" class="dropdown-item"> Основы купания </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/dry-basic" class="dropdown-item"> Основы сушки </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/myths" class="dropdown-item"> Разрушаем мифы </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/do-dont" class="dropdown-item">Правила ухода за собакой </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/puppy" class="dropdown-item"> Уход за щенками </router-link>
          </li>
          <li class="dropdown-item">
            <router-link to="/coat-types" class="dropdown-item"> Типы шерсти </router-link>
          </li>
        </ul>
      </li>
      <router-link
        v-slot="{ href, navigate, isActive, isExactActive }"
        to="/buy"
        class="dropdown-item"
        custom
      >
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
