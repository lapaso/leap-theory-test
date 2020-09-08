<template>
  <div class="call-to-action text-center">
    <button type="button" class="btn btn-cta uc trigger-form get-started-btn">Get Started</button>
  </div>
</template>

<script>
export default {
  name: "GetStartedButton",
};
</script>

<style>
.get-started-btn {
  background: linear-gradient(
    90deg,
    rgba(56, 239, 125, 1) 0%,
    rgba(17, 153, 142, 1) 100%
  );
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px 60px 10px 60px;
  outline: 0;
  border: 0;
  background-size: 100% 1px;
  -webkit-transition: background 0.2s cubic-bezier(0, 0, 0.58, 1);
  transition: background 0.2s cubic-bezier(0, 0, 0.58, 1);
}
</style>