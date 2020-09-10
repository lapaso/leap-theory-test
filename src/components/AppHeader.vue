<template>
  <div class="fixed-top container-fluid justify-content-md-center bg-header">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand ml-5 pl-5" href="#">
        <img src="./../assets/logo.png" alt loading="lazy" class="headerLogo"/>
      </a>

      <div class="collapse navbar-collapse justify-content-end mr-15p" id="navbarSupportedContent">
        <Navigation :items="items" class="uc spyScroll font-header-menu" ref="navs"></Navigation>
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
  mounted: function () {
    var self = this;
    window.addEventListener("scroll", function () {
      let currentPage = "";
      document.querySelectorAll(".page").forEach(function (el) {
        if (currentPage) {
          return;
        }
        let top = el.offsetTop;
        let height = el.offsetHeight;

        if (top <= window.pageYOffset && top + height >= window.pageYOffset) {
          currentPage = el.id;
          return;
        }
      });

      let newSelected = self.$refs.navs.$el.querySelector(
        `a[href='#${currentPage}']`
      );
      if (currentPage) {
        self.$refs.navs.$el
          .querySelectorAll(".selectedHeaderMenu")
          .forEach((sel) => {
            sel.classList.remove("selectedHeaderMenu");
          });
      }
      if (newSelected) {
        newSelected.classList.add("selectedHeaderMenu");
      }
    });
  },
};
</script>