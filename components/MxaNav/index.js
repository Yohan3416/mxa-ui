import MxaNav from "./src/main.vue";

MxaNav.install = function (Vue) {
  Vue.component(MxaNav.name, MxaNav);
};
export default MxaNav;