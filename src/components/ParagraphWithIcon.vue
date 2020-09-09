<template>
  <div class="box mb-3">
    <div class="d-flex align-items-center">
      <div>
        <h5>{{item.header}}</h5>
        {{item.text}}
      </div>
      <div class="ml-auto pl-4 reason-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ParagraphWithIcon",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
