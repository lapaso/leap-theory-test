<template>
  <div class="col-xl-10">
    <div
      class="row mb-5 mb-lg-0"
      v-for="(item,index) in items"
      :key="index"
      :class="{'justify-content-end': left==='odd' && index%2!==0}"
    >
      <div class="col-3 col-sm-2 col-lg-2 text-center order-lg-last">
        <div class="hiw-step" :class="{'last': index === items.length-1}">{{item.step}} <i :class="item.icon" class="how-it-works-icon-position"></i></div>
      </div>
      <div
        class="col-9 col-sm-10 col-lg-5"
        :class="{'order-lg-last': left==='odd' && index%2!==0 }"
      >
        <h3>{{item.header}}</h3>
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stepper",
  props: {
    items: {
      type: Array,
      required: true,
    },
    left: {
      type: String,
      default: "odd", //odd | even
    },
  },
};
</script>