<template>
  <div class="video-background-wrapper">
    <div class="video-wrapper">
      <video autoplay muted loop class="video-background" style>
        <source src="./../assets/Need_Cash_for_Your_Next_Pay_Day_loop.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="video-content-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoBackground",
  mounted: function () {
    var self = this;
    window.addEventListener("scroll", function () {
      let videoEl = self.$el.querySelector(".video-wrapper video");
      let scrollTop = window.pageYOffset;

      let elementHeight = self.$el.offsetHeight;

      let opacity = (elementHeight - scrollTop) / elementHeight;

      opacity = opacity < 0.6 ? 0.6 : opacity;

      videoEl.style.opacity = opacity;
    });
  },
};
</script>