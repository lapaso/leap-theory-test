<template>
  <section class="page" id="Home">
    <div id="hero-solid" class="d-flex align-items-center justify-content-center">
      <div>
        <h1 class="uc grad-text mb-4">Need Cash for Your Next Pay Day?</h1>
        <h2 class="uc mb-4">Loans from $100 - $1,000 are only moments away</h2>
        <ul class="tick-list mb-4">
          <li>Fast Real Time Results</li>
          <li>All Credit Types Accepted</li>
          <li>Safe and Secure</li>
        </ul>

        <GetStartedButton></GetStartedButton>
        <button type="button" class="btn btn-cta uc trigger-form">Get Started</button>
      </div>
    </div>
  </section>
</template>

<script>
import GetStartedButton from "./../components/GetStartedButton";
export default {
  name: "Home",
  components: {
    GetStartedButton,
  },
};
</script>

<style scoped>
</style>