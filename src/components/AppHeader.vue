<template>
  <div class="fixed-top container justify-content-md-center bg-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="./../assets/logo.png" alt loading="lazy" />
      </a>

      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <Navigation :items="items" class="uc spyScroll"></Navigation>
      </div>
    </nav>
  </div>
</template>

<script>
import Navigation from "./Navigation";
export default {
  name: "AppHeader",
  components: {
    Navigation,
  },
  data: function () {
    return {
      items: [
        {
          hash: "#WhyChoose",
          text: "Why Choose Us",
        },
        {
          hash: "#HowItWorks",
          text: "How It Works",
        },
        {
          hash: "#FAQ",
          text: "FAQ",
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 227px;
}

.bg-header {
  background: rgba(0, 0, 0, 0.6);
}
</style>