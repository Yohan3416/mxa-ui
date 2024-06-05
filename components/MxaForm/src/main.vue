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