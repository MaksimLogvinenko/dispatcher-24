<template>
  <section class="section-cards">
    <h2 class="font-bold mt-16 mb-8 text-primary text-4xl">
      {{ $t("cards.title") }}
    </h2>
    <div class="flex flex-wrap -m-4 text-center h-full">
      <router-link
        class="p-4 w-1/4 lg:w-1/2 sm:w-full"
        v-for="card in cards"
        :key="card.title"
        :to="card.url"
        tag="a"
      >
        <div class="p-4 h-60 sm:h-50 rounded-lg relative bg-white shadow-lg">
          <img
            :src="require(`@/assets/images/cards/${card.img}`)"
            :alt="card.alt"
            class="mx-auto"
          />
          <div
            class="flex absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <h2 class="font-medium text-lg text-secondary mx-auto w-36">
              {{ $t("cards." + card.title) }}
            </h2>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        img: "card-1.svg",
        title: "card-item-1",
        alt: "Логістичні оператори",
        url: "/",
      },
      {
        img: "card-2.svg",
        title: "card-item-2",
        alt: "Транспортні компанії",
        url: "/",
      },
      {
        img: "card-3.svg",
        title: "card-item-3",
        alt: "Рітейлери та дистриб’ютори",
        url: "/",
      },
      {
        img: "card-4.svg",
        title: "card-item-4",
        alt: "Виробничі компанії",
        url: "/",
      },
    ],
  }),
};
</script>