<template>
  <section class="page py-5 bg-HowItWorks" id="HowItWorks">
    <div class="container content-wrapper ">
      <h2 class="text-center uc mb-5">How it works?</h2>
      <div class="row justify-content-center mb-5">
        <Stepper :items="items"></Stepper>
      </div>
      <GetStartedButton></GetStartedButton>
    </div>
  </section>
</template>

<script>
import HowItWorksSteps from "./../data/HowItWorksSteps";
import Stepper from "./../components/Stepper";
import GetStartedButton from "./../components/GetStartedButton";

export default {
  name: "HowItWorks",
  components: {
    Stepper,
    GetStartedButton
  },
  data: function () {
    return {
      items: HowItWorksSteps,
    };
  },
};
</script>
