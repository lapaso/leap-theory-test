<template>
  <section class="page py-5 bg-FAQ" id="FAQ">
    <div class="container">
      <h2 class="text-center uc mb-5">Frequently Asked Questions</h2>

      <div class="row justify-content-center mb-5">
        <Accordion :items="items" :openedItems="[0]"></Accordion>
      </div>
      <GetStartedButton></GetStartedButton>
    </div>
  </section>
</template>

<script>
import FaqNotes from "./../data/FaqNotes";
import Accordion from "./../components/Accordion";
import GetStartedButton from "./../components/GetStartedButton";

export default {
  name: "FAQ",
  components: {
    Accordion,
    GetStartedButton,
  },
  data: function () {
    return {
      items: FaqNotes,
    };
  },
};
</script>

<style>
.bg-FAQ {
  background-image: url("./../assets/Frequently_Asked_Questions_Background.jpg");
  background-size: cover;
}
</style>