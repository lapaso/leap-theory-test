(function(t){function e(e){for(var n,r,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==s[l]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/leap-theory-test/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"031d":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0b1f":function(t,e,a){},"12c9":function(t,e,a){"use strict";var n=a("e3d5"),s=a.n(n);s.a},"1bd9":function(t){t.exports=JSON.parse('[{"step":"step 01","header":"Loan2Funds\' easy-bake two minute form","text":"You only need to answer a few basic questions about your identity, employment and income. Our simple form makes for fast, secure and easy processing. In just a few minutes if approved, you’ll be ready to review your offer."},{"step":"step 02","header":"We\'ll search for a loan for you","text":"Grab yourself a coffee, while we shake the money tree for you. In a couple of minutes we’ll search for a loan from our network of lenders. If you are accepted by a lender, you’ll be forwarded to their acceptance page."},{"step":"step 03","header":"Review the terms and sign an agreement","text":"Carefully review the terms and conditions of the offer. An E-Sign page will be presented by the lender to complete the process. If you do not like the terms of the loan, you are under no obligation to accept."},{"step":"step 04","header":"Receive the funds to your account and start spending","text":"After your sign your agreement your funds will be transferred to your account usually within 24-48 hours depending on the conditions of the loan agreement. Remember to use any loan responsibly."}]')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("AppHeader"),a("div",{attrs:{"data-spy":"scroll","data-target":"#app-navbar"}},[a("div",[a("VideoBackground",[a("Home"),a("WhyChoose")],1),a("HowItWorks"),a("FAQ"),a("FooterCTA")],1),a("AppFooter")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed-top container justify-content-md-center"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light",attrs:{id:"app-navbar"}},[t._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[a("Navigation",{staticClass:"uc",attrs:{items:t.items}})],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[n("img",{attrs:{src:a("cf05"),alt:"",loading:"lazy"}})])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav"},t._l(t.items,(function(e){return a("li",{key:e.hash,staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{href:e.hash},on:{click:t.onClickNavLink}},[t._v(t._s(e.text))])])})),0)},c=[],u=a("1157"),d=a.n(u),p={name:"Navigation",props:{items:{type:Array,required:!0}},methods:{onClickNavLink:function(t){if(""!==t.target.hash){t.preventDefault();var e=t.target.hash;d()("html, body").animate({scrollTop:d()(e).offset().top},800,(function(){window.location.hash=e}))}}}},f=p,m=(a("9028"),a("2877")),h=Object(m["a"])(f,l,c,!1,null,null,null),v=h.exports,y={name:"AppHeader",components:{Navigation:v},data:function(){return{items:[{hash:"#WhyChoose",text:"Why Choose Us"},{hash:"#HowItWorks",text:"How It Works"},{hash:"#FAQ",text:"FAQ"}]}}},b=y,g=(a("5773"),Object(m["a"])(b,r,i,!1,null,"2e627974",null)),_=g.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"py-5 bg-footer txt-white"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-sm-6 col-md-3 col-lg-2 fs16 mb-5 mb-md-0"},[a("h6",{staticClass:"mb-4"},[t._v("Legal")]),a("Navigation",{staticClass:"footerNavs",attrs:{items:t.legalItems}})],1),a("div",{staticClass:"col-sm-6 col-md-3 col-lg-2 fs16"},[a("h6",{staticClass:"mb-4"},[t._v("Company")]),a("Navigation",{staticClass:"footerNavs",attrs:{items:t.companyItems}})],1)])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-8 text-left mb-4 mb-md-0"},[n("div",{staticClass:"mb-4"},[n("img",{attrs:{src:a("cf05"),alt:"",loading:"lazy"}})]),t._v("© 2020 Loan2Funds "),n("sup",{staticClass:"p10"},[t._v("SM")])])}],x={name:"AppFooter",components:{Navigation:v},data:function(){return{legalItems:[{hash:"/legal/tos",text:"Terms of Service"},{hash:"/legal/privacy",text:"Privacy Policy"},{hash:"/legal/california",text:"CCPA Privacy Notice"},{hash:"/legal/disclaimer",text:"Disclaimer"},{hash:"/legal/e-consent",text:"E-Consent"},{hash:"/unsubscribe",text:"Unsubscribe"}],companyItems:[{hash:"/",text:"Home"},{hash:"/#why-choose-us",text:"Why Choose Us"},{hash:"/#how-it-works",text:"How it Works"},{hash:"/#faq",text:"FAQ"},{hash:"/registration/1",text:"Get Started"}]}}},k=x,S=(a("7886"),Object(m["a"])(k,C,w,!1,null,null,null)),A=S.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page py-5 bg-FAQ",attrs:{id:"FAQ"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text-center uc mb-5"},[t._v("Frequently Asked Questions")]),a("div",{staticClass:"row justify-content-center mb-5"},[a("Accordion",{attrs:{items:t.items,openedItems:[0]}})],1),a("GetStartedButton")],1)])},j=[],I=a("aab5"),F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"accordion",attrs:{id:t.componentId}},t._l(t.items,(function(e,n){return a("div",{key:e.id?e.id:n,staticClass:"card"},[t._t("header",[a("div",{staticClass:"card-header",attrs:{id:t.headerIdTemplate+n}},[a("h2",{staticClass:"mb-0"},[a("button",{staticClass:"btn btn-link btn-block text-left",attrs:{type:"button","data-toggle":"collapse","aria-expanded":"true","data-target":"#"+t.bodyIdTemplate+n,"aria-controls":t.bodyIdTemplate+n}},[t._v(t._s(e.header))])])])],{item:e}),t._t("body",[a("div",{staticClass:"collapse",class:{show:-1!==t.openedItems.indexOf(e.id?e.id:n)},attrs:{id:t.bodyIdTemplate+n,"aria-labelledby":t.headerIdTemplate+n,"data-parent":"#"+t.componentId}},[a("div",{staticClass:"card-body"},[t._v(t._s(e.body))])])],{item:e})],2)})),0)},T=[],$=0,N={name:"Accordion",props:{items:{type:Array,requires:!0},openedItems:{type:Array,default:function(){return[]}}},data:function(){var t="accordion"+$;return{componentId:t,headerIdTemplate:t+"heading",bodyIdTemplate:t+"collapsed"}},beforeCreate:function(){$++}},E=N,W=Object(m["a"])(E,F,T,!1,null,null,null),H=W.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"call-to-action text-center"},[a("button",{staticClass:"btn btn-cta uc trigger-form get-started-btn",attrs:{type:"button"}},[t._v("Get Started")])])}],G={name:"GetStartedButton"},q=G,L=(a("af6d"),Object(m["a"])(q,P,B,!1,null,null,null)),Q=L.exports,R={name:"FAQ",components:{Accordion:H,GetStartedButton:Q},data:function(){return{items:I}}},D=R,M=(a("b444"),Object(m["a"])(D,O,j,!1,null,null,null)),J=M.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page",attrs:{id:"Home"}},[a("div",{staticClass:"d-flex align-items-center justify-content-center",attrs:{id:"hero-solid"}},[a("div",[a("h1",{staticClass:"uc grad-text mb-4"},[t._v("Need Cash for Your Next Pay Day?")]),a("h2",{staticClass:"uc mb-4"},[t._v("Loans from $100 - $1,000 are only moments away")]),t._m(0),a("GetStartedButton"),a("button",{staticClass:"btn btn-cta uc trigger-form",attrs:{type:"button"}},[t._v("Get Started")])],1)])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"tick-list mb-4"},[a("li",[t._v("Fast Real Time Results")]),a("li",[t._v("All Credit Types Accepted")]),a("li",[t._v("Safe and Secure")])])}],U={name:"Home",components:{GetStartedButton:Q}},V=U,K=Object(m["a"])(V,Y,z,!1,null,"75f339aa",null),X=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page py-5 bg-HowItWorks",attrs:{id:"HowItWorks"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text-center uc mb-5"},[t._v("How it works?")]),a("div",{staticClass:"row justify-content-center mb-5"},[a("Stepper",{attrs:{items:t.items}})],1),a("GetStartedButton")],1)])},tt=[],et=a("1bd9"),at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-10"},t._l(t.items,(function(e,n){return a("div",{key:n,staticClass:"row mb-5 mb-lg-0",class:{"justify-content-end":"odd"===t.left&&n%2!==0}},[a("div",{staticClass:"col-3 col-sm-2 col-lg-2 text-center order-lg-last"},[a("div",{staticClass:"hiw-step",class:{last:n===t.items.length-1}},[t._v(t._s(e.step))])]),a("div",{staticClass:"col-9 col-sm-10 col-lg-5",class:{"order-lg-last":"odd"===t.left&&n%2!==0}},[a("h3",[t._v(t._s(e.header))]),t._v(" "+t._s(e.text)+" ")])])})),0)},nt=[],st={name:"Stepper",props:{items:{type:Array,required:!0},left:{type:String,default:"odd"}}},ot=st,rt=(a("d043"),Object(m["a"])(ot,at,nt,!1,null,null,null)),it=rt.exports,lt={name:"HowItWorks",components:{Stepper:it,GetStartedButton:Q},data:function(){return{items:et}}},ct=lt,ut=(a("9d23"),Object(m["a"])(ct,Z,tt,!1,null,null,null)),dt=ut.exports,pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page",attrs:{id:"WhyChoose"}},[a("div",{staticClass:"container"},[a("h2",{staticClass:"text-center uc mb-5"},[t._v("Why Choose Loan2Funds?")]),a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-8"},[a("div",{staticClass:"box bg-white mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h5",[t._v("Fast Real Time Results")]),t._v("Submit your request using Loan2Funds and we will search our network to find you a loan provider in real time, no expired offers, no waiting. ")]),a("div",{staticClass:"ml-auto pl-4 reason-icon"})])]),a("div",{staticClass:"box bg-white mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h5",[t._v("Funds as Soon as the Next Business Day")]),t._v("Our service connects you with lenders to conveniently get your Funds as quickly as possible. ")]),a("div",{staticClass:"ml-auto pl-4 reason-icon"})])]),a("div",{staticClass:"box bg-white mb-3"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h5",[t._v("All Credit Types Accepted")]),t._v("Our lender network allows your request to be seen by multiple lenders, which should increase your odds of acceptance. ")]),a("div",{staticClass:"ml-auto pl-4 reason-icon"})])]),a("div",{staticClass:"box bg-white"},[a("div",{staticClass:"d-flex align-items-center"},[a("div",[a("h5",[t._v("Safe and Secure")]),t._v("Your personal data is secured using industry 256-bit SSL encryption technology when using our service. ")]),a("div",{staticClass:"ml-auto pl-4 reason-icon"})])])])])])])}],mt={name:"WhyChoose"},ht=mt,vt=Object(m["a"])(ht,pt,ft,!1,null,null,null),yt=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-5 bg-darkgrey txt-white",attrs:{id:"footer-cta"}},[a("div",{staticClass:"container"},[t._m(0),a("GetStartedButton")],1)])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mb-5"},[a("div",{staticClass:"col-lg-8"},[a("h2",{staticClass:"text-center uc"},[t._v(" Solve your financial emergency quickly using our "),a("span",{staticClass:"grad-text"},[t._v("easy to use")]),t._v(" form ")])])])}],_t={name:"FooterCTA",components:{GetStartedButton:Q}},Ct=_t,wt=(a("8a07"),Object(m["a"])(Ct,bt,gt,!1,null,null,null)),xt=wt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-background-wrapper"},[n("div",{staticClass:"video-wrapper"},[n("video",{staticClass:"video-background",attrs:{autoplay:"",muted:"",loop:""},domProps:{muted:!0}},[n("source",{attrs:{src:a("5721"),type:"video/mp4"}})])]),n("div",{staticClass:"video-content-wrap"},[t._t("default")],2)])},St=[],At={name:"VideoBackground"},Ot=At,jt=(a("12c9"),Object(m["a"])(Ot,kt,St,!1,null,null,null)),It=jt.exports,Ft={name:"App",components:{AppHeader:_,AppFooter:A,FAQ:J,Home:X,HowItWorks:dt,WhyChoose:yt,FooterCTA:xt,VideoBackground:It}},Tt=Ft,$t=(a("034f"),Object(m["a"])(Tt,s,o,!1,null,null,null)),Nt=$t.exports;a("4989"),a("ab8b");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Nt)}}).$mount("#app")},5721:function(t,e,a){t.exports=a.p+"media/Need_Cash_for_Your_Next_Pay_Day_loop.14188a89.mp4"},5773:function(t,e,a){"use strict";var n=a("b883"),s=a.n(n);s.a},6394:function(t,e,a){},7886:function(t,e,a){"use strict";var n=a("0b1f"),s=a.n(n);s.a},"85ec":function(t,e,a){},"8a07":function(t,e,a){"use strict";var n=a("d564"),s=a.n(n);s.a},"8c11":function(t,e,a){},9028:function(t,e,a){"use strict";var n=a("db78"),s=a.n(n);s.a},"9d23":function(t,e,a){"use strict";var n=a("6394"),s=a.n(n);s.a},aab5:function(t){t.exports=JSON.parse('[{"header":"What is a Personal Loan?","body":"Personal loans are generally loans without collateral (hence the name personal). Personal loans can be used for any purpose, but common uses include debt consolidation, credit card payoffs, etc.. It may go without saying but personal loans should be used responsibly. Be sure to read the terms before accepting."},{"header":"What is a Short Term Loan?","body":"Short term loans are designed around addressing an immediate financial need or emergency. This could be an unexpected medical bill, a broken down car, etc. The loan amount range is usually up to $1,000 and the term can range from under 30 days for a payday style loan to monthly or weekly installments for an installment style loan."},{"header":"Why are you collecting my SSN and Bank Details?","body":"Our network of lenders use your SSN and bank details to help them make a decision about whether or not to extend you a loan offer. The bank details also help the lender that you are connected to know how to send money to your account. Our websites are encrypted using industry recognized encryption technology to help keep your information safe. Additionally, lenders use the SSN to help ensure the identity of the applicant is really the person they say they are."},{"header":"Are you a lender?","body":"No, we are not a lender. We work with several lenders to make up a network that can help you to find a loan. After submitting a request, if accepted, we will forward you to the lender\'s website where you will be able to learn more about your specific loan offer."}]')},af6d:function(t,e,a){"use strict";var n=a("031d"),s=a.n(n);s.a},b444:function(t,e,a){"use strict";var n=a("8c11"),s=a.n(n);s.a},b883:function(t,e,a){},bbca:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.a46759ee.png"},d043:function(t,e,a){"use strict";var n=a("bbca"),s=a.n(n);s.a},d564:function(t,e,a){},db78:function(t,e,a){},e3d5:function(t,e,a){}});
//# sourceMappingURL=app.03afdcd7.js.map