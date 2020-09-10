<template>
  <section class="page py-5" id="WhyChoose">
    <div class="container content-wrapper bg-content-wrapper">
      <h2 class="text-center uc mb-5">Why Choose Loan2Funds?</h2>

      <div class="row justify-content-center mb-5">
        <div class="col-lg-8">
          <div class="paragraph-box bg-white mb-3" v-for="(item,index) in items" :key="index">
            <ParagraphWithIcon :item="item" />
          </div>
        </div>
      </div>

      <GetStartedButton></GetStartedButton>
    </div>
  </section>
</template>

<script>
import WhyChooseNotes from "./../data/WhyChooseNotes";
import ParagraphWithIcon from "./../components/ParagraphWithIcon";
import GetStartedButton from "./../components/GetStartedButton";

export default {
  name: "WhyChoose",
  components: {
    ParagraphWithIcon,
    GetStartedButton
  },
  data: function () {
    return {
      items: WhyChooseNotes,
    };
  },
};
</script>
