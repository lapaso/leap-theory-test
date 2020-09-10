<template>
  <section class="page" id="Home">
    <div class="container content-wrapper">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <h1 class="uc bg-gradient grad-text mb-4">Need Cash for Your Next Pay Day?</h1>
          <h2 class="uc mb-4">Loans from $100 - $1,000 are only moments away</h2>
          <ul class="tick-list mb-4">
            <li>Fast Real Time Results</li>
            <li>All Credit Types Accepted</li>
            <li>Safe and Secure</li>
          </ul>
          <GetStartedButton class="get-started-btn-header"></GetStartedButton>
        </div>
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
