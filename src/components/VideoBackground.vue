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

<style>
.video-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  min-height: -webkit-fill-available;
  z-index: 0;
  will-change: position;
  overflow: hidden;
  font-size: 0;
}
.video-background-wrapper video {
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  object-fit: cover;
  opacity: 0.7;
}
.video-background-wrapper {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1b2533;
}
.video-content-wrap {
  position: relative;
  width: 100%;
  margin-top: -70vh;
  z-index: 5 !important;
}

</style>