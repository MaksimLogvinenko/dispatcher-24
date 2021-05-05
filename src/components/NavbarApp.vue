<template>
  <div>
    <transition name="fade">
      <div class="fixed z-50 w-full" v-if="openMobileMenu">
        <div
          class="h-screen px-4 pb-6 flex flex-col justify-between bg-primary"
        >
          <div class="flex justify-between items-center py-5">
            <a href="#" @click.prevent="openMobileMenu = false" class="p-4 cursor-pointer hover:rotate-90"
              ><img src="@/assets/images/close.svg" alt="Закрыть меню"
            /></a>
            <router-link
              to="/"
              tag="a"
              class="text-primary bg-transparent font-bold inline-block border-2 py-2 px-8 rounded text-md md:border-none md:bg-transparent md:text-white"
              >{{ $t("navbar.button") }}</router-link
            >
          </div>
          <div class="flex flex-col">
            <h2 class="text-5xl text-white font-medium mb-14">
              {{ $t("navbar.mobile.title") }}
            </h2>
            <li
              class="list-none"
              v-for="(link, linkIndex) of links"
              :key="linkIndex"
            >
              <router-link
                tag="a"
                :to="link.url"
                :exact="link.exact"
                class="font-regular text-3xl text-white border-b block border-gray-light border-opacity-10 py-4"
              >
                {{ $t("navbar.menu." + link.title) }}
              </router-link>
            </li>
          </div>
          <select
            class="outline-none block bg-primary text-2xl appearance-none font-regular border-none text-white w-10"
            v-model="$i18n.locale"
          >
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
              {{ lang }}
            </option>
          </select>
        </div>
      </div>
    </transition>
    <div class="container xl-container mx-auto px-4">
      <div class="z-30 relative">
        <div class="flex justify-between py-6 items-center">
          <div class="flex items-center">
            <a href="#"
            @click.prevent="openMobileMenu = true"
              ><img
                src="@/assets/images/bar.svg"
                class="hidden md:block p-4 cursor-pointer"
                alt=""
            /></a>
            <div class="inline-block">
              <a class="md:hidden flex" href="#"
                ><img src="@/assets/images/logo.svg" alt="Dispatcher"
              /></a>
            </div>
            <div class="md:hidden flex">
              <li
                class="ml-7 list-none first:ml-16"
                v-for="(link, linkIndex) of links"
                :key="linkIndex"
              >
                <router-link
                  tag="a"
                  :to="link.url"
                  :exact="link.exact"
                  class="text-gray-50 font-regular text-base text-white"
                >
                  {{ $t("navbar.menu." + link.title) }}
                </router-link>
              </li>
            </div>
          </div>
          <div class="flex items-center">
            <select
              class="outline-none md:hidden bg-gray-light mr-10 font-regular border-none text-primary"
              v-model="$i18n.locale"
            >
              <option
                v-for="(lang, i) in langs"
                :key="`Lang${i}`"
                :value="lang"
              >
                {{ lang }}
              </option>
            </select>
            <router-link
              to="/"
              tag="a"
              class="text-primary bg-transparent font-bold inline-block border-2 py-2 px-8 rounded text-md md:border-none md:bg-transparent md:text-white"
              >{{ $t("navbar.button") }}</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: "link-1", url: "/", exact: true },
      { title: "link-2", url: "/" },
      { title: "link-3", url: "/" },
    ],
    openMobileMenu: false,
    langs: ["en", "ua"],
  }),
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>