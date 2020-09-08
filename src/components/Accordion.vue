<template>
  <div class="accordion" :id="componentId">
    <div class="card" v-for="(item,index) in items" :key="item.id ? item.id :index">
      <slot name="header" v-bind:item="item">
        <div class="card-header" :id="headerIdTemplate+index">
          <h2 class="mb-0">
            <button
              class="btn btn-link btn-block text-left"
              type="button"
              data-toggle="collapse"
              aria-expanded="true"
              :data-target="'#'+bodyIdTemplate+index"
              :aria-controls="bodyIdTemplate+index"
            >{{item.header}}</button>
          </h2>
        </div>
      </slot>

      <slot name="body" v-bind:item="item">
        <div
          class="collapse"
          :id="bodyIdTemplate+index"
          :class="{ show: openedItems.indexOf(item.id ? item.id :index)!==-1 }"
          :aria-labelledby="headerIdTemplate+index"
          :data-parent="'#'+componentId"
        >
          <div class="card-body">{{item.body}}</div>
        </div>
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

<style>
</style>