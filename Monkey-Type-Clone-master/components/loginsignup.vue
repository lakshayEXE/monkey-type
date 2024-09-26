<template>
  <div>
    <!-- Login Form -->
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>

    <!-- Signup Form -->
    <form @submit.prevent="signup">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$emit("login", { email: this.email, password: this.password });
    },
    signup() {
      this.$emit("signup", { email: this.email, password: this.password });
    }
  }
};
</script>