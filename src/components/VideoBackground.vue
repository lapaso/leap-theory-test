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
};
</script>