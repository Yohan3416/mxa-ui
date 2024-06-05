# Mxa 组件使用文

Mxa 组件是一款为Vue2开发者提供的组件库！本文档将详细介绍该组件的所有样式和功能。

## 组件库安装

在项目目录终端下执行

```js
npm i mxa-ui
```

## 组件导入

```js
//main.js
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import mxa from "../node_modules/mxa-ui/dist/mxa-ui.umd";//组件库导入
import "../node_modules/mxa-ui/dist/mxa-ui.css";//导入

Vue.use(VueRouter);
Vue.config.productionTip = false

Vue.use(mxa);//注册

const router = new VueRouter({
  mode: 'history',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

## MxaButton

MxaButton 是一个多功能的按钮组件。通过本文档，您将了解组件的所有样式类、props、slots、事件方法以及样式变量。

### Props

以下是 Mxa-Button 组件的 props 列表：

| Props      | 类型      | 描述                | 默认值 |
| ---------- | --------- | ------------------- | ------ |
| type       | String    | 按钮类型，可选值为 'default', 'primary', 'success', 'info', 'warning', 'error'            | 'default' |
| round      | Boolean   | 是否显示圆角按钮     | false |
| loading    | Boolean   | 是否显示加载中状态   | false |
| disabled   | Boolean   | 是否禁用按钮         | false |
| circle     | Boolean   | 是否显示圆形按钮     | false |

### Events

| 事件名称    | 描述            |
| ---------- | --------------- |
| click      | 按钮被点击时触发 |

### Slots

- 默认插槽：可插入按钮文字。

### 示例代码

下面是一个示例代码片段，演示如何使用 Mxa-Button 组件：

```vue
<template>
  <div>
    <Mxa-Button type="primary" @click="handleClick">提交</Mxa-Button>
    <Mxa-Button type="warning" round>警告</Mxa-Button>
    <Mxa-Button type="default" loading>加载中</Mxa-Button>
    <Mxa-Button type="success" disabled >禁用</Mxa-Button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log('按钮被点击了!');
    }
  }
}
</script>
 ```

### MxaButton组件源码

```vue
<template>
  <div>
  <button @click="handleClick" :class="getClass" :style="computeStyle">    
    
    <span v-if="!loading">
      <slot></slot>
    </span>
    <span v-if="loading">
      加载中
    </span>
  </button>
  <span v-if="loading" class="loading-indicator"></span>
  </div>
</template>
 
<script>
export default {
  name: "MxaButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    round: Boolean,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    circle: Boolean
  },
  computed: {
    getClass() {
      console.log(this.round)
      return [
        "mxa-button",
        `mxa-button-${this.type}`,
        { disabled: this.disabled },
        { round: this.round },
        { circle: this.circle }
      ]
    },
    computeStyle() {
  return {
      background: this.loading? "grey" : "",
      pointerEvents: this.loading? "none" : ""
    };
  }
  },
  methods: {
    handleClick(event) {
      if (!this.disabled) {
        // 阻止事件冒泡
        event.stopPropagation();
        // 触发自定义事件
        this.$emit('click');
      }
    }
  },
  mounted() {
    console.log(this.$slots)
    const root = document.querySelector(":root")
    const btn = document.querySelector(".mxa-button")
    const btnHeight = btn.clientHeight
    root.style.setProperty("--round", `${Math.floor(btnHeight / 2)}px`)
  }
}
</script>
 
<style lang="scss" scoped>
:root {
  --round: 20px;
}
 
.mxa-button {
  float: left;
  padding: 12px 24px;
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mxa-button-primary {
  background: rgb(236, 188, 188);
  &:hover,
  &:focus {
    background: #8ec1f7;
    border-color: #66b1ff;
    color: #fff;
  }
}

.mxa-button-success {
  background: lightgreen;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}

.mxa-button-info {
  background: lightblue;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}

.mxa-button-warning {
  background: red;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}

.mxa-button-error {
  background: blueviolet;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.mxa-button-default {
  background: default;
  border: 1px solid #ccc;
  color: #606266;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.round {
  border-radius: var(--round);
}

.disabled {
  cursor: not-allowed;
  background-image: none;
}

.circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}


.loading-indicator {
  float: left;
  margin-top: 8px;
  margin-left: 4px;
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
```

## MxaForm

`MxaForm`组件是一个用于用户登录和注册的表单组件。

### Props参数

- `formType` (String): 表单类型，可以是"login"或"register"。默认值为undefined。

- `size`(String): 可以是"small", "medium", "large"，设置组件容器的尺寸。默认值为     "medium"。

- `handleLogin`(function): 处理登录操作的自定义函数。

- `handleRegister`(function): 处理注册操作的自定义函数。

- `Loginsuccess`(function): 登录成功的回调函数。

-`Registsuccess`(function): 注册成功的回调函数。

### formData 数据结构

`formData` 是用于存储用户输入数据的对象，包含以下字段:

- `username` (String): 用户名
- `email` (String): 电子邮件地址
- `password` (String): 密码

### 方法

- `submitForm(formData, formType)`:提交表单操作,会调用handelLogin或者handelRegister数。

- `validateUsername()`: 验证用户名格式。

- `validatePassword()`: 验证密码格式。

### 示例

```vue
<template>
  <div>
    <MxaForm 
      formType="login"
      :handleLogin="customLoginHandler"
      :Loginsuccess="handleLoginSuccess"
      size="medium"
    />
  </div>
</template>

<script>

export default {
  components: {
    MxaForm
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    customLoginHandler(formData) {
      // Custom login handling logic
    },
    handleLoginSuccess() {
      // Handle login success
    }
  }
};
</script>
```

### MxaForm组件源码

```vue
<template>
  <div :class="['container', size]">
    <!-- 根据 formType 显示登录或注册表单 -->
    <form v-if="formType === 'login' || formType === undefined" @submit.prevent="submitForm(formData, handleLogin)" class="form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="formData.username" type="text" id="username" @input="validateUsername" required>
      </div>
      <p class="error-message">{{ usernameError }}</p> 

      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" id="password" @input="validatePassword" required>
      </div>
      <p class="error-message">{{ passwordError }}</p> 

      <button type="submit" :disabled="usernameError || passwordError">Login</button>
    </form>

    <form v-else-if="formType === 'register'" @submit.prevent="submitForm(formData, handleRegister)" class="form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="formData.username" type="text" id="username" @input="validateUsername" required>
      </div>
      <p class="error-message">{{ usernameError }}</p>

      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="formData.password" type="password" id="password" @input="validatePassword" required>
      </div>
      <p class="error-message">{{ passwordError }}</p>

      <button type="submit" :disabled="usernameError || passwordError">Register</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "MxaForm",
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: ""
      },
      message: "",
      usernameError: "",
      passwordError: ""
    };
  },
  methods:{
    submitForm(formData, formType) {
     if (formType === "login") {
       this.handleLogin(formData);
     } else if (formType === "register") {
       this.handleRegister(formData);
     } else {
       console.error("Invalid form type");
     }
   },
    validateUsername() {
      if (this.formData.username.length > this.usernameMaxLength) {
        this.usernameError = "Username cannot exceed "+ this.usernameMaxLength +" characters";
      } else {
        this.usernameError = "";
      }
    },
    validatePassword() {
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!passwordRegex.test(this.formData.password) || this.formData.password.length < this.minPasswordLength) {
        this.passwordError = "Password must contain at least one number, one lowercase letter, one uppercase letter, and be at least " + this.minPasswordLength + " characters long";
      } else {
        this.passwordError = "";
      }
    }
  },
  props: {
    usernameMaxLength: {
      type: Number,
      default: 16
    },
    minPasswordLength: {
      type: Number,
      default: 6
    },
    formType: {
      type: String,
      default: undefined,
      validator: function(value) {
        return ["login", "register"].includes(value);
      }
    },
    handleLogin: {
      type: Function,
      default: function(formData) {
        console.log("Default login handler. Logging in with username:", formData.username, "email:", formData.email, "and password:", formData.password);
        this.message = "Login successful";
      }
    },
    handleRegister: {
      type: Function,
      default: function(formData) {
        console.log("Default register handler. Registering with username:", formData.username, "email:", formData.email, "and password:", formData.password);
        this.message = "Registration successful";
      }
    },
    Loginsuccess: {
      type: Function,
      default: function(formData) {
        console.log("Login successful with data:", formData);
      }
    },
    Registsuccess: {
      type: Function,
      default: function(formData) {
        console.log("Registration successful with data:", formData);
      }
    },
    size: {
      type: String,
      default: "medium", // 设置默认值为中等尺寸
      validator: function(value) {
        return ["small", "medium", "large"].includes(value);
      }
    }
  }
};
</script>

<style scoped>
.form {
  width: 100%; 
  margin: 0 auto;
  padding: 20px; 
}

.form-group {
  margin-top: 25px; 
  display: flex;
  align-items: center; 
}

label {
  display: inline-block;
  width: 25%;
  text-align: right;
  margin-right: 5%; 
}

input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%; 
  box-sizing: border-box;
}

button {
  padding: 12px 5%; 
  font-size: 16px;
  border: 0;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  background: #66b1ff;
  border-radius: 8px;
  display: block;
  margin: 25px auto;
  width: 90%; 
}

button:hover,
button:focus {
  background: #85ce61;
}

.error-message {
  font-size: 12px;
  color: red;
  white-space: normal;
  max-width: 100%;
  height: 12px;
  margin: 0px;
  padding: 0px;
  border: 0px;
}

.container {
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 5px lightgray;
}

.small.container {
  width: 300px; 
}

.medium.container {
  width: 400px; 
}

.large.container {
  width: 500px; 
}
</style>
```

## MxaSwitch

### 概述

`MxaSwitch` 组件是一个自定义开关组件，用于在界面上展示可切换的开关状态。

### 使用方法

```vue
<MxaSwitch :size="'medium'" :initialSwitchValue="true" @switch-change="handleSwitchChange"></MxaSwitch>
```

### MxaSwitch-Props参数

- `initialSwitchValue`

    &#9675; 类型: Boolean

    &#9675; 默认值: false

    &#9675; 描述: 开关的初始值，控制开关的状态

- `size`

    &#9675; 类型: String

    &#9675; 默认值: 'medium'

    &#9675; 描述: 设置开关的尺寸大小，可选值为 'small', 'medium', 'large'

### 事件

- switch-change

    &#9675; 回调参数: value (Boolean)

    &#9675; 描述: 当开关状态发生改变时触发，传递当前开关状态的值

### MxaSwitch组件源码

```vue
<template>
    <div 
      :class="{ 'switch-on': switchOn, 'switch-off': !switchOn, 'switch-small': size === 'small', 'switch-medium': size === 'medium', 'switch-large': size === 'large' }" 
      class="switch" 
      @click="toggleSwitch"
      :style="{ width: size === 'small' ? '40px' : size === 'medium' ? '50px' : '60px', height: size === 'small' ? '20px' : size === 'medium' ? '25px' : '30px' }"
    >
      <div 
        :class="{ 'switch-button-on': switchOn, 'switch-button-off': !switchOn }"
        :style="{ width: size === 'small' ? '20px' : size === 'medium' ? '26px' : '32px', height: size === 'small' ? '20px' : size === 'medium' ? '26px' : '32px' }"
      ></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MxaSwitch",
    data() {
      return {
        switchOn: false
      };
    },
    methods: {
      toggleSwitch() {
        this.switchOn = !this.switchOn;
        this.$emit('switch-change', this.switchOn);
      }
    },
    props: {
      initialSwitchValue: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: 'medium'
      }
    },
    mounted() {
      this.switchOn = this.initialSwitchValue;
    }
  };
  </script>
  
  <style>
  .switch {
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  /* .switch-small {
    width: 40px;
    height: 20px;
  }
  
  .switch-medium {
    width: 50px;
    height: 25px;
  }
  
  .switch-large {
    width: 60px;
    height: 30px;
  }
   */
  .switch-on {
    background-color: lightgreen;
    transition: background-color 0.5s;
  }
  
  .switch-off {
    background-color: lightgray; 
    transition: background-color 0.5s;
  }
  
  .switch-button-on, .switch-button-off {
    position: absolute;
    top: 0;
    width: 26px; 
    height: 26px; 
    border-radius: 50%;
    transition: transform 0.5s;
  }
  
  .switch-button-off {
    left: 0;
    margin: -1px 0 0 -1px;
    background-color: white;
    transform: translateX(0);
  }
  
  .switch-button-on {
    right: 5;
    margin: -1px -1px 0 0; 
    background-color: white;
    transform: translateX(100%);
  }
  </style>
```

## MxaNav

### 描述

这个导航菜单组件可以根据您传递的菜单项目进行渲染，支持暗黑模式和垂直布局。

### 使用示例

```vue
<MxaNav 
  :menuItems="[
      { title: 'Home', link: '/home' },
      { title: 'About', link: '/about' },
      { title: 'Contact', link: '/contact' }
    ]"
  :isDark="true"
  :isVertical="false"
/>
```

### MxaNav-Props参数

- menuItems (Array): 菜单项目数组，每个项目应该包含title和link属性。
- isDark (Boolean): 是否启用暗黑模式，默认为false。
- isVertical (Boolean): 是否垂直排列菜单项，默认为false。

### MxaNav组件源码

```vue
<template>
    <div class="navigation-menu" :class="{ 'dark-mode': isDark, 'vertical': isVertical }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index" @click="handleClick(item)"
            :class="{ 'active': item === activeItem || (!activeItem && index === 0), 'dark-mode-item': isDark && (item === activeItem || (!activeItem && index === 0)) }">
            <router-link :to="item.link" 
                       :class="{ 'active-link': item === activeItem }">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "MxaNav",
    props: {
      menuItems: {
        type: Array,
        default: () => []
      },
      isDark: {
        type: Boolean,
        default: false
      },
      isVertical: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        activeItem: null // 默认activeItem设置为 null
      };
    },
    mounted() {
      if (this.menuItems.length > 0) {
        this.activeItem = this.menuItems[0]; // 设置第一个菜单项目为初始activeItem
      }
    },
    methods: {
      handleClick(item) {
        this.activeItem = item;
        console.log(`Navigating to: ${item.link}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .navigation-menu {
    font-family: Arial, sans-serif;
    background-color: lightblue;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
  }
  
  li {
    margin: 0.5em;
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
    color: white;
  }
  
  .dark-mode {
    background-color: rgb(73, 96, 116);
    color: white;
  }
  
  .vertical ul {
    flex-direction: column;
  }
  
  .vertical {
    width: 15vw;
  }
  
  /* 
  .active {
    background-color: rgb(8, 63, 22); 
    color: white;
  } */
  
  /* .dark-mode-item {
    background-color: #555; 
    color: white; 
  } */
  
  .active-link {
    font-size: large;
    font-weight: 500;
    color: rgb(11, 193, 56);
  }
  </style>
```

## MxaSearchBox

### 简介

 Mxa-SearchBox组件是一个可自定义的搜索输入框，带有一个按钮。通过传递不同的 props，该组件提供了在外观方面的灵活性。

### MxaSearchBox-Props

- `roundedInput`（布尔值）：指定输入框是否应具有圆角边框。默认值：`false`。
- `roundedButton`（布尔值）：指定搜索按钮是否应具有圆角边框。默认值：`false`。
- `placeholderText`（字符串）：输入框的占位文本。默认值：`请输入搜索内容`。
- `buttonText`（字符串）：搜索按钮上显示的文本。默认值：`搜索`。
- `buttonColor`（字符串）：搜索按钮的背景颜色。默认值：`#007bff`。
- `buttonTextColor`（字符串）：搜索按钮的文本颜色。默认值：`white`。

### search事件

- `search`：当单击搜索按钮时触发，将搜索词传递给父组件。

### 样式

您可以通过修改提供的Props自定义搜索框组件的外观。

### MxaSearchBox示例

以下是如何使用 MxaSearchBox 组件的示例：

```vue
<template>
  <MxaSearchBox 
    :roundedInput="true"
    :roundedButton="true"
    placeholderText="请输入搜索内容"
    buttonText="搜索"
    buttonColor="#ff6347"
    buttonTextColor="white"
    @search="handleSearch"
  />
</template>

<script>

export default {
  components: {
    VueSearchBox
  },
  methods: {
    handleSearch(searchTerm) {
      console.log('正在搜索:', searchTerm);
      // 在此处执行您自定义的搜索逻辑，例如发起API请求等
    }
  }
}
</script>
```

### MxaSerachBox源码

```vue
<template>
    <div 
      class="search-box" 
    >
      <input 
        type="text"
        v-model="searchTerm" 
        :placeholder="placeholderText"
        :class="{ 'rounded-input': roundedInput }"
        @input="handleInput"
      />
      <button 
        @click="handleSearch"
        :style="{ backgroundColor: buttonColor, color: buttonTextColor }"
        :class="{ 'rounded-button': roundedButton }"
        @mouseover="buttonHover"
        @mouseout="buttonUnhover"
      >
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: "MxaSearchBox",
    props: {
      roundedInput: {
        type: Boolean,
        default: false
      },
      roundedButton: {
        type: Boolean,
        default: false
      },
      // customBackground: {
      //   type: Boolean,
      //   default: false
      // },
      placeholderText: {
        type: String,
        default: '请输入搜索内容'
      },
      buttonText: {
        type: String,
        default: '搜索'
      },
      buttonColor: {
        type: String,
        default: '#007bff'
      },
      buttonTextColor: {
        type: String,
        default: 'white'
      }
    },
    data() {
      return {
        searchTerm: ''
      };
    },
    methods: {
      handleInput() {
        console.log('Search term changed:', this.searchTerm);
      },
      handleSearch() {
        // 触发自定义事件并将输入数据传递给外部
        this.$emit('search', this.searchTerm);
      },
      buttonHover(event) {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'transform 0.3s ease';
        event.target.style.backgroundColor = 'lightblue';
      },
      buttonUnhover(event) {
        event.target.style.transform = 'scale(1)';
        event.target.style.backgroundColor = this.buttonColor;
      }
    }
  };
  </script>
  
  <style>
  .search-box {
    display: flex;
    align-items: center;
    width: 250px;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
  }
  
  button {
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .rounded-input {
    border-radius: 20px;
  }
  
  .rounded-button {
    border-radius: 20px;
  }
  
  /* .custom-background {
    background-color: lightblue;
  } */
  
  /* button:hover {
    background-color: #0056b3;
  } */
  
  /* button:active {
    background-color: #003366;
  } */
  </style>
```

## MxauserCard组件文档

### MxauserCard-Props

| 属性名 | 类型 | 默认值 | 必填 | 描述 |
| --- | --- | --- | --- | --- |
| userId | String | - | 是 | 用户ID |
| username | String | - | 是 | 用户名 |
| avatarUrl | String | - | 是 | 头像URL |
| backgroundUrl | String | - | 是 | 背景图片URL |
| isRoundAvatar | Boolean | true | 否 | 是否使用圆形头像 |
| followCount | Number | 0 | 否 | 关注数量 |
| fanCount | Number | 0 | 否 | 粉丝数量 |
| userPageUrl | String | - | 是 | 用户主页URL |
| isFollowing | Boolean | false | 否 | 是否已关注该用户 |

### MxauserCard-Events

- handleFollow: 当用户点击关注或取消关注按钮时触发该事件，参数为更新后的isFollowing属性值。
- handleMessage: 当用户点击发送消息按钮时触发该事件，参数为用户ID。

### MxauserCard描述

用户卡片（Mxa-userCard）组件用于显示用户信息，包括用户的头像、用户名、ID、关注数、粉丝数等信息，并提供关注/取消关注和发送消息的交互功能。

### 用法示例

```vue
<template>
  <MxauserCard
    :userId="'12345'"
    :username="'John Doe'"
    :avatarUrl="'/path/to/avatar.png'"
    :backgroundUrl="'/path/to/background.png'"
    :userPageUrl="'/user/12345'"
    :isFollowing="true"
    :followCount="100"
    :fanCount="200"
    @handleFollow="handleFollow"
    @handleMessage="handleMessage"
  />
</template>

<script>

export default {
  components: {
    
  },
  methods: {
    handleFollow(isFollowing) {
      // 处理关注/取消关注逻辑
    },
    handleMessage(userId) {
      // 处理发送消息逻辑
    }
  }
}
</script>
```

### MxauserCard组件源码

```vue
<template>
    <div class="user-card">
        <div class="user-card-head" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}"></div>
        <div class="user-card-body">
            <div class="user-card-body-left">
                <img :src="avatarUrl" :class="{round: isRoundAvatar}">
            </div>
            <div class="user-card-body-right">
                <div class="user-card-body-right-text">
                    <div class="user-card-body-right-text-username"><a :href="userPageUrl">{{ username }}</a></div>
                    <div class="user-card-body-right-text-id">ID:{{ userId }}</div>
                    <span style="margin-right: 40px; margin-left: 9px;">关注: {{ followCount }}</span>
                    <span>粉丝: {{ localFanCount }}</span>
                
              
                <div class="user-card-body-button">
                    <button @click="handleFollow">{{ localIsFollowing ? '取消关注' : '关注' }}</button>
                    <button @click="handleMessage">发消息</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"MxauserCard",
    props: {
        userId: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        backgroundUrl: {
            type: String,
            required: true
        },
        isRoundAvatar: {
            type: Boolean,
            default: true
        },
        followCount: {
            type: Number,
            default: 0
        },
        fanCount: {
            type: Number,
            default: 0
        },
        userPageUrl: {
            type: String,
            required:true
        },
        isFollowing: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            localIsFollowing: this.isFollowing,
            localFanCount: this.fanCount 
        };
    },
  
    watch: {
      fanCount(newVal) {
        this.localFanCount = newVal;
      },
      isFollowing(newVal) {
        this.localIsFollowing = newVal;
      }
    },
  
    methods: {
        handleFollow() {
          this.localIsFollowing = !this.localIsFollowing;
            if (this.localIsFollowing) {
            this.localFanCount++;
            } else {
             this.localFanCount--;
            }
            this.localFanCount = this.localFanCount < 0 ? 0 : this.localFanCount;
            this.$emit('handleFollow', this.localIsFollowing);
        },
        handleMessage() {
            this.$emit('handleMessage', this.userId);
        }
    }
  };
  </script>
  
  <style scoped>
  .user-card {
    width: 366px;
    height: 250px;
    box-shadow: 2px 2px 5px lightgray;
    border-radius: 5px;
  }
  
  .user-card-head {
    background-size: cover;
    width: 100%;
    height: 85px;
  }
  
  .user-card-body {
    width: 100%;
    height: calc(100% - 85px);
    box-sizing: border-box;
    padding-top: 12px;
    background-color: rgb(232, 244, 244);
  }
  
  .user-card-body-left {
    width: 70px;
    height: 100%;
    float: left;
    text-align: center;
  }
  
  .user-card-body-left img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  
  .user-card-body-right {
    width: calc(100% - 70px);
    float: left;
    height: 100%;
    margin-bottom: 10px;
  }
  
  .user-card-body-right-text {
    width: 100%;
    height: 100%;
  }
  
  .user-card-body-right-text-username {
    padding-left: 10px;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
  }
  
  a{
    text-decoration: none;
    font-size: 16px;
    color: #222222;
    font-weight: bold;
  }

  .user-card-body-right-text-id {
    padding-left: 10px;
    font-size: 14px;
    color: #888888;
  }
  
  .user-card-body-button {
    text-align: center;
    margin-top: 26px;
  }
  
  .user-card-body-button button {
    width: 45%;
    height: 35px;
    margin: 0 5px;
    padding: 5px 10px;
    background-color: rgb(250, 243, 243);
    color: black;
    cursor: pointer;
    border-radius: 5px;
    border: #79aee6 solid 2px;
  }
  
  .user-card-body-button button:hover {
    background-color: #cadff5;
    box-shadow: 2px 2px 5px lightgray;
  }
  
  a:hover{
    cursor: pointer;
  }
  </style>
```

## MxadropDown

`MxadropDown` 是一个提供可交互下拉菜单功能的组件。

### 属性

| 名称            | 类型    | 默认值         | 描述                        |
|-----------------|---------|----------------|----------------------------|
| buttonStyle     | String  | 'default'      | 按钮样式                    |
| buttonText      | String  | '显示内容'     | 按钮上显示的文本            |
| dropdownMaxWidth| String  | '200px'        | 下拉菜单的最大宽度          |
| dropdownMaxHeight| String | '200px'       | 下拉菜单的最大高度          |

### 使用方式

```vue
<MxadropDown :buttonStyle="'primary'" :buttonText="'展开'" :dropdownMaxWidth="'300px'" :dropdownMaxHeight="'250px'">
  <!-- 下拉菜单内容在这里插入 -->
</MxadropDown>
```

### 可用的按钮样式

- `primary`：具有特定的背景颜色 rgb(236, 188, 188)，鼠标悬停和聚焦时背景色变为 #8ec1f7， 边框颜色变为 #66b1ff，文字颜色变为 #fff。

- `success`：背景为 lightgreen，悬停和聚焦时背景变为 #85ce61，边框颜色变为 #85ce61，文字颜色变为 #fff。

- `info`：背景为 lightblue，悬停和聚焦时背景变为 #a6a9ad，边框颜色变为 #a6a9ad，文字颜色变为 #fff。

- `warning`：背景为 red，悬停和聚焦时背景变为 #ebb563，边框颜色变为 #ebb563，文字颜色变为 #fff。

- `error`：背景为 blueviolet，悬停和聚焦时背景变为 #f78989，边框颜色变为 #f78989，文字颜色变为 #fff。

- `default`：背景为默认，有 1px 实线边框，颜色为 #ccc，文字颜色为 #606266，悬停和聚焦时颜色变为 #409eff，边框颜色变为 #c6e2ff，背景颜色变为 #ecf5ff。

### MxadropDown组件源码

```vue
<template>
    <div class="dropdown-container">
      <button :class="buttonStyle" @click="toggleDropdown">{{ buttonText }}</button>
      <transition name="dropdown-expand">
        <div v-if="showDropdown" class="dropdown" :style="{ maxHeight: dropdownMaxHeight, maxWidth: dropdownMaxWidth }">
          <slot></slot>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "MxadropDown",
    props: {
      buttonStyle: {
        type: String,
        default: 'default'
      },
      buttonText: {
        type: String,
        default: '显示内容'
      },
      dropdownMaxWidth: {
        type: String,
        default: '200px'
      },
      dropdownMaxHeight: {
        type: String,
        default: '200px'
      }
    },
    data() {
      return {
        showDropdown: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.showDropdown = !this.showDropdown;
      }
    }
  };
  </script>
  
  <style>
  .dropdown-container {
  position: relative; 
  }

  button.primary {
    background: rgb(236, 188, 188);
    &:hover,
    &:focus {
      background: #8ec1f7;
      border-color: #66b1ff;
      color: #fff;
    }
  }
  
  button.success {
    background: lightgreen;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
  }
  
  button.info {
    background: lightblue;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
  }
  
  button.warning {
    background: red;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
  }
  button.error {
    background: blueviolet;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
  }
  button.default {
    background: default;
    border: 1px solid #ccc;
    color: #606266;
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  
  .dropdown {
    position: absolute; /* 下拉框设置为绝对定位 */
    top: 100%; /* 下拉框在按钮下方显示 */
    left: 0;
    z-index: 999; /* 设置下拉框的堆叠顺序，确保在顶层显示 */
    overflow: auto;
    background-color: #f9f9f9;
    border: 1px solid lightgray;
    padding: 10px;
    opacity: 0.8;
  }
  
  .dropdown-expand-enter-active, .dropdown-expand-leave-active {
    transition: all 0.5s;
  }
  
  .dropdown-expand-enter, .dropdown-expand-leave-to {
    opacity: 0;
  }
  </style>
```
