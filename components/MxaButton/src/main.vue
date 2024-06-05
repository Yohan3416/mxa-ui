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