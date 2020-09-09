<template>
  <section class="page py-5" id="WhyChoose">
    <div class="container content-wrapper">
      <h2 class="text-center uc mb-5">Why Choose Loan2Funds?</h2>

      <div class="row justify-content-center">
        <div class="col-lg-8" v-for="(item,index) in items" :key="index">
          <ParagraphWithIcon :item="item"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WhyChooseNotes from "./../data/WhyChooseNotes"
import ParagraphWithIcon from "./../components/ParagraphWithIcon"

export default {
  name: "WhyChoose",
  components:{
    ParagraphWithIcon
  },
  data:function(){
    return{
      items: WhyChooseNotes
    }
  }
};
</script>
