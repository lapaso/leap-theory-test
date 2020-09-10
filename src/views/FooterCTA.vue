<template>
  <section id="footer-cta" class="py-5 bg-darkgrey txt-white mt-auto">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <h2 class="text-center uc">
            Solve your financial emergency quickly using our
            <span class="bg-gradient grad-text">easy to use</span> form
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
