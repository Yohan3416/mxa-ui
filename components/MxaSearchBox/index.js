import MxaSearchBox from "./src/main.vue";

MxaSearchBox.install = function (Vue) {
  Vue.component(MxaSearchBox.name,MxaSearchBox);
};
export default MxaSearchBox;