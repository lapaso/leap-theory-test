<template>
  <section class="pt-5 bg-FAQ page d-flex flex-column" id="FAQ">
    <div class="container content-wrapper">
      <h2 class="text-center uc mb-5">Frequently Asked Questions</h2>

      <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <Accordion :items="items" :openedItems="[0]"></Accordion>
        </div>
      </div>
      <GetStartedButton></GetStartedButton>
    </div>

    <FooterCTA></FooterCTA>
  </section>
</template>

<script>
import FaqNotes from "./../data/FaqNotes";
import Accordion from "./../components/Accordion";
import GetStartedButton from "./../components/GetStartedButton";
import FooterCTA from "./FooterCTA";

export default {
  name: "FAQ",
  components: {
    Accordion,
    GetStartedButton,
    FooterCTA,
  },
  data: function () {
    return {
      items: FaqNotes,
    };
  },
};
</script>

<style>
</style>