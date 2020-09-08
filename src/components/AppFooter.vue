<template>
  <footer class="py-5 bg-footer txt-white">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-8 text-left mb-4 mb-md-0">
          <div class="mb-4">
            <img src="./../assets/logo.png" alt loading="lazy" />
          </div>© 2020 Loan2Funds
          <sup class="p10">SM</sup>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-2 fs16 mb-5 mb-md-0">
          <h6 class="mb-4">Legal</h6>
          <Navigation :items="legalItems" class="footerNavs"></Navigation>
        </div>
        <div class="col-sm-6 col-md-3 col-lg-2 fs16">
          <h6 class="mb-4">Company</h6>
          <Navigation :items="companyItems" class="footerNavs"></Navigation>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Navigation from "./Navigation";
export default {
  name: "AppFooter",
  components: {
    Navigation,
  },
  data: function () {
    return {
      legalItems: [
        {
          hash: "/legal/tos",
          text: "Terms of Service",
        },
        {
          hash: "/legal/privacy",
          text: "Privacy Policy",
        },
        {
          hash: "/legal/california",
          text: "CCPA Privacy Notice",
        },
        {
          hash: "/legal/disclaimer",
          text: "Disclaimer",
        },
        {
          hash: "/legal/e-consent",
          text: "E-Consent",
        },
        {
          hash: "/unsubscribe",
          text: "Unsubscribe",
        },
      ],
      companyItems: [
        {
          hash: "/",
          text: "Home",
        },
        {
          hash: "/#why-choose-us",
          text: "Why Choose Us",
        },
        {
          hash: "/#how-it-works",
          text: "How it Works",
        },
        {
          hash: "/#faq",
          text: "FAQ",
        },
        {
          hash: "/registration/1",
          text: "Get Started",
        },
      ],
    };
  },
};
</script>

<style>
.fs16{
      font-size: 16px;
}
.footerNavs .nav-link {
  padding: 0;
}
.bg-footer {
  background-color: #343a40;
}
</style>