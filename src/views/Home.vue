<template>
  <div class="bg-gray-light">
    <header id="header" class="h-screen relative bg-after">
      <NavbarApp />
      <img src="@/assets/images/devices.png" class="absolute md:hidden max-w-3xl w-3/5 top-1/2 transform -translate-y-1/2 lg:w-1/2 right-4 z-20" alt="">
      <div class="container xl-container mx-auto px-4">
        <div
          class="absolute pr-8 transform -translate-y-1/2 md:w-full z-30 top-1/2 w-96 text-white"
        >
          <h1 class="font-bold text-5xl">{{ $t("header.title") }}</h1>
          <p class="font-medium mt-4">
            {{ $t("header.subtitle") }}
          </p>
          <div class="relative w-full">
            <img
              class="hidden w-3/4 md:block mx-auto"
              src="@/assets/images/devices.png"
              alt=""
            />
          </div>
          <a
            href="#"
            class="text-primary bg-white font-bold text-center inline-block border-0 py-4 px-8 sm:px-5 sm:w-full rounded text-md mt-8"
            >{{ $t("header.button") }}</a
          >
        </div>
      </div>
    </header>
  </div>
  <div class="container xl-container mx-auto px-4">
    <Cards />
  </div>
</template>

<script>
import NavbarApp from "@/components/NavbarApp";
import Cards from "@/components/Cards";
export default {
  components: { NavbarApp, Cards },
  methods: {
    setLocale(locale) {
      import(`../locales/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs);
        this.$i18n.locale = locale;
      });
    },
  },
};
</script>
