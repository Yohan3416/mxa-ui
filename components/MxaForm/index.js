import MxaForm from "./src/main.vue";

MxaForm.install = function (Vue) {
  Vue.component(MxaForm.name, MxaForm);
};
export default MxaForm;