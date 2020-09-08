<template>
  <ul class="nav">
    <li class="nav-item" v-for="item in items" :key="item.hash">
      <a class="nav-link active" @click="onClickNavLink" :href="item.hash">{{item.text}}</a>
    </li>
  </ul>
</template>

<script>
import $ from "jquery";

export default {
  name: "Navigation",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onClickNavLink: function (event) {
      if (event.target.hash !== "") {
        event.preventDefault();

        var hash = event.target.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    },
  },
};
</script>

<style>
ul.nav li a {
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}
</style>