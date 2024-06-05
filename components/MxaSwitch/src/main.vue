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