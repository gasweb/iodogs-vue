<template>
  <div class="container">
    <h1 class="text-center">Часто задаваемые вопросы</h1>
    <div id="faq" class="panel-group">
      <div id="accordion" class="accordion">
        <div class="accordion-item">
          <h2 id="faq-1-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-1"
              aria-expanded="true"
              aria-controls="faq-1"
            >
              1. Как работают усилители цвета, и почему их нет в продуктах других производителей?
            </button>
          </h2>
          <div
            id="faq-1"
            class="accordion-collapse collapse"
            aria-labelledby="faq-1-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Наши усилители цвета работают по принципу «Омбре» (окрашивание волос цветными
                мелками). Масло вечерней примулы является вспомогательным средством, оно помогает
                удержать усилители цвета в шерсти. Как и все водорастворимые красители, красящие
                компоненты наших шампуней самостоятельно не будут окрашивать шерсть, только лишь в
                комбинации с маслом вечерней примулы можно добиться стойкого эффекта. И опять-таки,
                такое окрашивание не нанесёт непоправимый вред шерсти Вашего любимца. Краска будет
                вымываться с течением времени. Мы могли бы использовать усилители цвета и в других
                линейках нашей продукции, но как говорилось выше, они работают только в сочетании с
                маслом Вечерней примулы и соответственно смоются во время ополаскивания собаки.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-2-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-2"
              aria-expanded="true"
              aria-controls="faq-2"
            >
              2. Какие из ваших продуктов будут работать, как очищающий шампунь?
            </button>
          </h2>
          <div
            id="faq-2"
            class="accordion-collapse collapse"
            aria-labelledby="faq-2-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Очищающие шампуни необходимы, чтобы удалить пыль, грязь, жир, накопленные шерстью
                остатки косметических средств (после применения стайлинговых средств, некоторых
                шампуней и кондиционеров) и другие вредные вещества, которые накапливаются в течение
                времени. Шампуни
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
          <h2 id="faq-3-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-3"
              aria-expanded="true"
              aria-controls="faq-3"
            >
              3. Что такое маточное молочко и чем оно полезно для моей собаки?
            </button>
          </h2>
          <div
            id="faq-3"
            class="accordion-collapse collapse"
            aria-labelledby="faq-3-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Маточное молочко является пищей для Пчеломатки. Это одна из самых чистых форм белка,
                доступных в природе. Исследования показали, что питание волосяного фолликула
                стимулирует его к регенерации волос. Важно помнить, что генетика и окружающая среда
                играют большую роль в росте волос, чем все остальное. Мы не будем обещать выращивать
                шерсть там, где она не может быть выращена. Но мы можем, стимулировать рост, что
                будет происходить в любом случае. Кроме того, наш шампунь
                <router-link :to="{ name: 'Продукт', params: { slug: '20-royal-jelly-shampoo' } }"
                  >№ 20</router-link
                >
                помогает добавить объем для существующих волос, создав видимость более полной,
                здоровой шерсти.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-4-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-4"
              aria-expanded="true"
              aria-controls="faq-4"
            >
              4. Что такое масло вечерней примулы и чем оно полезно для моей собаки?
            </button>
          </h2>
          <div
            id="faq-4"
            class="accordion-collapse collapse"
            aria-labelledby="faq-4-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Масло Вечерней Примулы (ЕРО) – создано на основе вытяжки масла из семян растения
                Энотеры. Жирные кислоты являются смазкой, которая зачастую менее жирная или сальная
                чем растительные, минеральные масла или ланолин, и, следовательно, дают волосам
                ощущение мягкости, не делая их тяжёлыми или толстыми. Продукция Isle of Dogs
                доставит чистое масло вечерней примулы холодного отжима к коже и шерсти вашего
                питомца. Важно понять, что другие экстракты Масла Вечерней примулы не будут давать
                таких же результатов.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-5-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-5"
              aria-expanded="true"
              aria-controls="faq-5"
            >
              5. Насколько концентрированные продукты Isle of Dogs и можно ли их разводить водой?
            </button>
          </h2>
          <div
            id="faq-5"
            class="accordion-collapse collapse"
            aria-labelledby="faq-5-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Коэффициент разбавления наших косметических средств очень субъективен. Isle of Dogs
                рекомендует: используйте нашу продукцию неразбавленной, и ваша собака будет получать
                максимальную пользу от ингредиентов, которые мы считаем важными для здоровья кожи и
                шерсти. Тем не менее, некоторые породы собак имеют типы шерсти, в которые очень
                трудно проникнуть без использования некоторого количества воды. В таких случаях мы
                рекомендуем разбавить наши продукты 10-20 частями воды на 1 часть шампуня.
              </p>
              <p>
                Можно провести аналогию и с кондиционерами – степень разведения зависит от того
                захотите ли вы его тщательно вымыть из шерсти, частично оставить или вообще
                использовать в полную силу.
              </p>
              <p>
                Кондиционеры используются, чтобы обеспечить лёгкое расчёсывание, защитить шерсть от
                повреждений, вызванных средствами для укладки, придать блеск и смягчить шерсть. В
                зависимости от того, как вы используете продукт – вы получите желаемый результат.
                Наши облегчающие и утяжеляющие кондиционеры могут использоваться неразбавленными,
                разбавленными или даже частично оставаться в шерсти. Вы можете использовать
                кондиционеры как для утяжеления или придания объёма шерсти, так и для защиты от
                повреждений. А вот, например, используя шампунь
                <router-link :to="{ name: 'Продукт', params: { slug: '20-royal-jelly-shampoo' } }"
                  >№ 20</router-link
                >, вы промоете шерсть от остатков кондиционирующих компонентов, которые имеют
                свойство накапливаться в шерсти и вернёте объём в шерсть.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-6-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-6"
              aria-expanded="true"
              aria-controls="faq-6"
            >
              6. Шампунь для жёсткой шерсти действительно не делает шерсть мягкой?
            </button>
          </h2>
          <div
            id="faq-6"
            class="accordion-collapse collapse"
            aria-labelledby="faq-6-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Какие компоненты шампуня делают шерсть мягкой? Ответ прост – это кондиционирующие
                ингредиенты. В нашем шампуне
                <router-link :to="{ name: 'Продукт', params: { slug: '33-coarse-coat-shampoo' } }"
                  >№ 33</router-link
                >
                они не используются. Регулярное купание всех пород собак способствует сохранению
                здоровой шерсти вашего питомца. Предположение, что купание вашей собаки шампунем для
                жёсткой шерсти смягчит шерсть, не соответствует действительности. Наш продукт всего
                лишь очистит шерсть и кожу от грязи, продуктов стайлинга, которые могут
                накапливаться в течение долгого времени и вызывать тусклый и тяжёлый вид шерсти.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-7-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-7"
              aria-expanded="true"
              aria-controls="faq-7"
            >
              7. Почему Вы рекомендуете использовать кондиционеры для жёсткой и склонной к
              утяжелению шерсти?
            </button>
          </h2>
          <div
            id="faq-7"
            class="accordion-collapse collapse"
            aria-labelledby="faq-7-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Как уже упоминалось выше, даже жесткая и шерсть склонная к утяжелению изредка
                нуждается в обработке кондиционерами для защиты волосяного фолликула от повреждений,
                вызванных средствами для стайлинга или инструментами грумера. Наши кондиционеры
                останутся в шерсти только до следующего купания.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-8-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-8"
              aria-expanded="true"
              aria-controls="faq-8"
            >
              8. Может ли маточное молочко быть причиной пушистой шерсти?
            </button>
          </h2>
          <div
            id="faq-8"
            class="accordion-collapse collapse"
            aria-labelledby="faq-8-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Шампунь
                <router-link :to="{ name: 'Продукт', params: { slug: '20-royal-jelly-shampoo' } }"
                  >№ 20</router-link
                >
                не содержит кондиционирующих компонентов, поэтому не завивает, не электризует и не
                распушивает шерсть. К этим проблемам может привести излишняя сухость шерсти,
                вызванная, к примеру, сухим воздухом. Маточное молочко, содержащееся в шампуне №20
                Royal Jelly, предназначено для восстановления и придания объёма шерсти.
              </p>
              <p>
                Для собак со вспушенной шерстью или статикой мы рекомендуем
                <router-link
                  :to="{
                    name: 'Продукт',
                    params: { slug: '62-evening-primrose-oil-conditioning-mist' },
                  }"
                  >№ 62</router-link
                >, масло, которого поможет уложить шерсть или
                <router-link
                  :to="{ name: 'Продукт', params: { slug: '63-detangle-conditioning-mist' } }"
                  >№ 63</router-link
                >, в котором содержится силикон, и который идеально подходит для курчавой шерсти или
                в случае наличия колтунов.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-9-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-9"
              aria-expanded="true"
              aria-controls="faq-9"
            >
              9. Есть ли у Вас продукция от блох и клещей?
            </button>
          </h2>
          <div
            id="faq-9"
            class="accordion-collapse collapse"
            aria-labelledby="faq-9-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Да, мы можем вам предложить
                <router-link :to="{ name: 'Продукт', params: { slug: 'flea-and-tick-shampoo' } }"
                  >шампунь от блох и клещей</router-link
                >! Этот шампунь имеет безопасный и естественный репеллент, который эффективно
                удаляет и отталкивает блох и клещей. На мокрую шерсть нанесите шампунь, намыльте и
                тщательно смойте. Для достижения наилучшего результата нанесите Ваш любимый
                кондиционер от Isle of Dogs.
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 id="faq-10-heading" class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq-10"
              aria-expanded="true"
              aria-controls="faq-10"
            >
              10. Какие из Ваших продуктов помогают решить проблему статического электричества
              шерсти?
            </button>
          </h2>
          <div
            id="faq-10"
            class="accordion-collapse collapse"
            aria-labelledby="faq-10-heading"
            data-bs-parent="#accordion"
          >
            <div class="accordion-body">
              <p>
                Наэлектризованность шерсти чаще всего вызывается отсутствием влаги. Оба наших спрея
                помогут в борьбе со статикой двумя способами.
                <router-link
                  :to="{
                    name: 'Продукт',
                    params: { slug: '62-evening-primrose-oil-conditioning-mist' },
                  }"
                  >№ 62</router-link
                >
                доставит масло в шерсть, которое утяжелит её и поможет удержать необходимую влагу. В
                нашем спрее
                <router-link
                  :to="{ name: 'Продукт', params: { slug: '63-detangle-conditioning-mist' } }"
                  >№ 63</router-link
                >
                используется силикон, который помогает убрать статику без утяжеления шерсти.
              </p>
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
  name: 'AboutFaq',
})
</script>
