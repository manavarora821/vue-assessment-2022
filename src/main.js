import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

// let app = Vue.createApp({
//   router,
//   store,
//   render: function (h) {
//     return h(App);
//   },
//   data: function () {
//     return {
//       greeting: "bonjour",
//       isVisible: true,
//     };
//   },
// });

// app.mount("#app");
