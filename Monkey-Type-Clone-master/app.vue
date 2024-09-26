<template>
  <div id="app">
    <div v-if="user">
      <!-- User is authenticated, show typing test components -->
      <typing-test-result v-show="result_test_component" :score="typing_test_score" :scorelist="typing_chart_score"></typing-test-result>
      <typing-keyboard v-show="typing_test_component"></typing-keyboard>
      <typing-test-component v-show="typing_test_component" @show-result="showHideComponents"></typing-test-result>
      <button @click="logout">Logout</button>
    </div>
    <div v-else>
      <!-- User is not authenticated, show login/signup form -->
      <login-signup @login="login" @signup="signup"></login-signup>
    </div>
  </div>
</template>

<script>
import firebase from "./firebase"; // Import the firebase configuration
import LoginSignup from "./components/LoginSignup.vue"; // Import the login/signup component

export default {
  components: {
    LoginSignup
  },
  data() {
    return {
      user: null,
      typing_test_component: true,
      result_test_component: false,
      typing_test_score: 0,
      typing_chart_score: 0
    };
  },
  methods: {
    login({ email, password }) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
          this.user = userCredential.user;
        })
        .catch(error => {
          console.error("Login error:", error.message);
        });
    },
    signup({ email, password }) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
          this.user = userCredential.user;
        })
        .catch(error => {
          console.error("Signup error:", error.message);
        });
    },
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.user = null;
        })
        .catch(error => {
          console.error("Logout error:", error.message);
        });
    },
    showHideComponents(value, chart_list) {
      // Your existing method implementation
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>