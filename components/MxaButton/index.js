import MxaButton from "./src/main.vue";

MxaButton.install = function (Vue) {
  Vue.component(MxaButton.name, MxaButton);
};
export default MxaButton;