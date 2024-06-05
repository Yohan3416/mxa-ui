import MxauserCard from "./src/main.vue";

MxauserCard.install = function (Vue) {
  Vue.component(MxauserCard.name,MxauserCard);
};
export default MxauserCard;