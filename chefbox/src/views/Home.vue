<template>
  <div class="home">
    <div class="header">
      <h1>House Atreides Chefbox</h1>
      <img src="../assets/images/HouseA_logo.png" />
    </div>
  </div>
</template>


<script>
export default {
  name: "Home",
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
