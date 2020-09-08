<template>
  <section id="footer-cta" class="py-5 bg-darkgrey txt-white">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <h2 class="text-center uc">
            Solve your financial emergency quickly using our
            <span class="grad-text">easy to use</span> form
          </h2>
        </div>
      </div>
      <GetStartedButton />
    </div>
  </section>
</template>

<script>
import GetStartedButton from "./../components/GetStartedButton";
export default {
  name: "FooterCTA",
  components: {
    GetStartedButton,
  },
};
</script>

<style>
.grad-text {
  background: -moz-linear-gradient(
    90deg,
    rgba(56, 239, 125, 1) 0%,
    rgba(17, 153, 142, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(56, 239, 125, 1) 0%,
    rgba(17, 153, 142, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(56, 239, 125, 1) 0%,
    rgba(17, 153, 142, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #eb7327;
}

.bg-darkgrey {
  background-color: #1a1f21;
}

.txt-white {
  color: #fff;
}
</style>