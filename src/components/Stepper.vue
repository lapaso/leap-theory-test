<template>
  <div class="col-xl-10">
    <div
      class="row mb-5 mb-lg-0"
      v-for="(item,index) in items"
      :key="index"
      :class="{'justify-content-end': left==='odd' && index%2!==0}"
    >
      <div class="col-3 col-sm-2 col-lg-2 text-center order-lg-last">
        <div class="hiw-step" :class="{'last': index === items.length-1}">{{item.step}}</div>
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

<style>
.hiw-step {
  width: 72px;
  height: 72px;
  background-color: #eceaec;
  padding: 9px 12px;
  text-align: left;
  position: relative;
}

.hiw-step:before {
  border-width: 0 4px 0 0;
  border-color: #eceaec;
  border-style: dashed;
  content: "";
  display: block;
  width: 1px;
  height: 50px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -68px;
}
.hiw-step:after {
  border-width: 8px 8px 0 8px;
  border-color: #eceaec transparent transparent;
  border-style: dashed;
  position: absolute;
  content: "";
  display: block;
  left: 50%;
  transform: translateX(-50%);
  bottom: -76px;
}
.hiw-step.last:before,
.hiw-step.last:after {
  content: none;
}
</style>

