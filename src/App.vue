<template>
  <div id="app" class>
    <AppHeader></AppHeader>
    <div data-spy="scroll" data-target=".spyScroll">
      <div>
        <VideoBackground>
          <Home></Home>
          <WhyChoose></WhyChoose>
        </VideoBackground>

        <HowItWorks></HowItWorks>
        <FAQ></FAQ>
        <FooterCTA></FooterCTA>
      </div>
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

import FAQ from "./views/FAQ";
import Home from "./views/Home";
import HowItWorks from "./views/HowItWorks";
import WhyChoose from "./views/WhyChoose";
import FooterCTA from "./views/FooterCTA";
import VideoBackground from "./components/VideoBackground";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    FAQ,
    Home,
    HowItWorks,
    WhyChoose,
    FooterCTA,
    VideoBackground,
  },
};
</script>