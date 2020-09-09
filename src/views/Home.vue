<template>
  <section class="page" id="Home">
    <div class="container content-wrapper">
      <h1 class="text-center uc grad-text mb-4">Need Cash for Your Next Pay Day?</h1>
      <div class="row justify-content-center  mb-5">
        <div class="col-lg-8">
          <h2 class="uc mb-4">Loans from $100 - $1,000 are only moments away</h2>
          <ul class="tick-list mb-4">
            <li>Fast Real Time Results</li>
            <li>All Credit Types Accepted</li>
            <li>Safe and Secure</li>
          </ul>
        </div>
      </div>
      <GetStartedButton></GetStartedButton>
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

<style>
.content-wrapper {
  padding: 1.3rem;
  background-color: rgba(256, 256, 256, 0.5);;
}
</style>