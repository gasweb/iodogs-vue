<template>
  <div class="container">
    <div class="col-md-9">
      <h1 class="text-center">Разрушаем мифы</h1>
      <div class="">
        <p>
          Много было сказано и написано о «правильном» груминге собак. К сожалению, многие источники
          либо не осведомлены по этому вопросу или делают неверные предположения. Ниже приведены
          некоторые распространенные мифы, которые мы хотели, чтобы развеять
        </p>
      </div>

      <div id="accordion" class="accordion">
        <div class="accordion-item">
          <h2 id="myth-1-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-1"
              aria-expanded="true"
              aria-controls="myth-1"
            >
              «Купание собаки вредно для его кожи»
            </button>
          </h2>
          <div
            id="myth-1"
            class="accordion-collapse collapse"
            aria-labelledby="myth-1-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Это является одним из самых больших мифов. В Isle of Dogs мы понимаем, что нет
                ничего более далекого от истины, чем это утверждение. Есть объяснение тому, как этот
                миф стал понятием в «собачьих» кругах. Первые продукты по уходу за шерстью были
                жёстче мыла, которое не подходило для рН-среды шерсти собаки: в результате возникали
                раздражения, зуд кожи и проблемная шерсть. Кроме того, купание собаки могло быть
                осложнено отсутствием соответствующего оборудования или собака была не приучена к
                купанию. Оба сценария могли повлиять на качество купания. Если мыло или даже очень
                хорошего качества шампунь не вымыть должным образом из шерсти, он может вызвать
                раздражение кожи, которое заставит собаку чесаться и создаст шелушения.
              </p>
              <p>
                Использование продуктов, специально предназначенные для собак, таких как продукция
                Isle of Dogs, при условии соблюдения правил использования, предотвратит дискомфорт и
                даже улучшит здоровье и внешний вид кожи и шерсти Вашей собаки. В частности,
                разработанные продукты по уходу за шерстью помогут восстановить, правильно
                зафиксировать ре структурировать, изменить, восстановить, перестроить или изменить
                поврежденную шерсть.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-2-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-2"
              aria-expanded="true"
              aria-controls="myth-2"
            >
              «Если шерсть вашей собаки безжизненна, то вы не сможете оживить шерстяной покров»
            </button>
          </h2>
          <div
            id="myth-2"
            class="accordion-collapse collapse"
            aria-labelledby="myth-2-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Но Вы можете стимулировать рост здоровой шерсти из здоровой кожи – так же, как люди.
                Не надо ожидать эффекта от применения наших спреев за одну ночь, однако
                использование этих продуктов в течение долгого времени будет стимулировать рост
                здоровой шерсти. Использование шампуней, кондиционеров и средств для укладки волос
                будет работать, чтобы улучшить внешний вид старого, поврежденного слоя, в то время
                как кожа будет готова произвести более здоровую новую шерсть после обработки.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-3-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-3"
              aria-expanded="true"
              aria-controls="myth-3"
            >
              «Продукты по уходу за шерстью не должны содержать спирт»
            </button>
          </h2>
          <div
            id="myth-3"
            class="accordion-collapse collapse"
            aria-labelledby="myth-3-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Это еще один миф, который прочно утвердился на груминг арене. Конечно, впитывание
                шерстью собаки спирта не рекомендуется. Однако, спирт является единственным
                компонентом, который без которого не могут обойтись некоторые масла и удерживающие
                компоненты. Обычно эта спирто содержащая форма быстро испаряется, а полезные
                ингредиенты остаются в шерсти.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-4-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-4"
              aria-expanded="true"
              aria-controls="myth-4"
            >
              «Шерсть вашей собаки может адаптироваться к шампуню, поэтому вам нужно чередовать их»
            </button>
          </h2>
          <div
            id="myth-4"
            class="accordion-collapse collapse"
            aria-labelledby="myth-4-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Это миф построен вокруг зерна истины. Шерсть не приспосабливается к шампуням, но
                некоторые шампуни, с кондиционировавшими компонентами, накапливаются в шерсти в
                течение долгого времени. Если вы попытаетесь вымыть накопившиеся компоненты одного
                шампуня другим — вы добьётесь результата. Поэтому мы рекомендуем иногда мыть собаку
                очищающими шампунями. Шампуни
                <router-link :to="{ name: 'Продукт', params: { slug: '20-royal-jelly-shampoo' } }"
                  >№ 20</router-link
                >,<router-link :to="{ name: 'Продукт', params: { slug: '33-coarse-coat-shampoo' } }"
                  >№ 33</router-link
                >,<router-link :to="{ name: 'Продукт', params: { slug: 'clean-coating-shampoo' } }"
                  >Clean Coating</router-link
                >,<router-link :to="{ name: 'Продукт', params: { slug: 'deep-cleaning-shampoo' } }"
                  >Deep Cleaning</router-link
                >, могут быть эффективно использованы в качестве очищающих шампуней.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-5-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-5"
              aria-expanded="true"
              aria-controls="myth-5"
            >
              «Продукты с SPF комплексом защитит шерсть от вредного воздействия солнечных лучей»
            </button>
          </h2>
          <div
            id="myth-5"
            class="accordion-collapse collapse"
            aria-labelledby="myth-5-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Нет достаточно достоверных или непротиворечивых способов сохранить необходимые
                защитные компоненты прикреплённые к стержня волоса. Ополаскивание, стайлинг и мытьё
                шерсти удаляет или снижает действие солнцезащитных компонентов, поэтому защита с
                такими продуктами будет недолговечной.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-6-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-6"
              aria-expanded="true"
              aria-controls="myth-6"
            >
              «Собаки с жирной кожей не должны использовать кондиционер»
            </button>
          </h2>
          <div
            id="myth-6"
            class="accordion-collapse collapse"
            aria-labelledby="myth-6-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Это не всегда верно. Кожа собаки может быть жирная, а шерсть быть сухой и требовать
                увлажнения.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="myth-7-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#myth-7"
              aria-expanded="true"
              aria-controls="myth-7"
            >
              «Чем больше пены, тем чище шерсть»
            </button>
          </h2>
          <div
            id="myth-7"
            class="accordion-collapse collapse"
            aria-labelledby="myth-7-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Ложь. На самом деле пена не связана с очищающими компонентами шампуня.
                Пенообразующие компоненты добавляются в шампунь для эмоциональной привлекательности,
                а не с научной точки зрения. Количество пенообразующих ингредиентов напрямую зависит
                от количества грязи, мусора и жиров в шерсти. Такие компоненты, как масла де
                активируют процесс пенообразования.
              </p>
            </div>
          </div>
          <div class="accordion-item">
            <h2 id="myth-8-heading" class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#myth-8"
                aria-expanded="true"
                aria-controls="myth-8"
              >
                «Шампуни без слез более мягкие, чем другие виды шампуня»
              </button>
            </h2>
            <div
              id="myth-8"
              class="accordion-collapse collapse"
              aria-labelledby="myth-8-heading"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <p>
                  Частично верно. Очищающие агенты в детских шампунях обладают меньшей способностью
                  очистки. Но если они не вымоют грязь из шерсти Вашей собаки, остатки могут вызвать
                  зуд и сухость.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LearningMyths',
})
</script>
