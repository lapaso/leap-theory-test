<template>
  <div :id="componentId">
    <div
      class="card mb-2 accordion-box"
      v-for="(item,index) in items"
      :key="item.id ? item.id :index"
    >
      <slot name="header" v-bind:item="item">
        <h5
          role="button"
          class="mb-0 accordion-header"
          data-toggle="collapse"
          aria-expanded="true"
          :data-target="'#'+bodyIdTemplate+index"
          :aria-controls="bodyIdTemplate+index"
          :id="headerIdTemplate+index"
        >{{item.header}}</h5>
      </slot>

      <slot name="body" v-bind:item="item">
        <div
          class="accordion-body"
          :id="bodyIdTemplate+index"
          :class="{ show: openedItems.indexOf(item.id ? item.id :index)!==-1 }"
          :aria-labelledby="headerIdTemplate+index"
          :data-parent="'#'+componentId"
        >{{item.body}}</div>
      </slot>
    </div>
  </div>
</template>

<script>
var uniqId = 0;

export default {
  name: "Accordion",
  props: {
    items: {
      type: Array,
      requires: true,
    },
    openedItems: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data: function () {
    let componentId = "accordion" + uniqId;

    return {
      componentId,
      headerIdTemplate: componentId + "heading",
      bodyIdTemplate: componentId + "collapsed",
    };
  },
  beforeCreate: () => {
    uniqId++;
  },
};
</script>