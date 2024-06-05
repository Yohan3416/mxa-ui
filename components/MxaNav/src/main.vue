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