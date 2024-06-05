<template>
  <div>
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
  name: "Mxa-dropDown",
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
  overflow: auto;
  background-color: #f9f9f9;
  border: 1px solid lightgray;
  padding: 10px;
}

.dropdown-expand-enter-active, .dropdown-expand-leave-active {
  transition: all 0.5s;
}

.dropdown-expand-enter, .dropdown-expand-leave-to {
  opacity: 0;
}
</style>