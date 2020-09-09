<template>
  <ul class="nav">
    <li class="nav-item" v-for="item in items" :key="item.hash">
      <a class="nav-link active" :href="item.hash">{{item.text}}</a>
    </li>
  </ul>
</template>

<script>

export default {
  name: "Navigation",
  props: {
    items: {
      type: Array,
      required: true,
    },
  }
};
</script>

<style>
ul.nav li a {
  font-weight: 700;
  font-size: 16px;
  color: #fff;
}
</style>