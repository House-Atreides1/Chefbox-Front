<template>
  <div class="login">
    <h1 v-if="!$auth.isAuthenticated">Log In</h1>
    <h1 v-if="$auth.isAuthenticated">Log Out</h1>
    <div v-if="!$auth.loading">
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>