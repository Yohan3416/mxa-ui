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