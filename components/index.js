// components文件夹 -> index.js文件的内容
// 引入组件
import MxaButton from "./MxaButton";
import MxaForm from "./MxaForm";
import MxaSwitch from "./MxaSwitch";
import MxaNav from "./MxaNav";
import MxaSearchBox from "./MxaSearchBox";
import MxauserCard from "./MxauserCard";
import MxadropDown from "./MxadropDown"

const components = {
  MxaButton,
  MxaForm,
  MxaSwitch,
  MxaNav,
  MxaSearchBox,
  MxauserCard,
  MxadropDown,
};

// 添加 install 方法，
// 在vue中调用 Vue.use(组件)将自动调用 install 方法注册所有组件
const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};

// 导出所有组件
export default {
  install,
};
