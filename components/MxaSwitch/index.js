import MxaSwitch from "./src/main.vue";

MxaSwitch.install = function (Vue) {
  Vue.component(MxaSwitch.name,MxaSwitch);
};
export default MxaSwitch;