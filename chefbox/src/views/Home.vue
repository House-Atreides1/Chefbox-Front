<template>
  <div class="home">
    <HelloWorld msg="Welcome to House Atreides Chefbox." />
    <div class="header">
      <h1>House Atreides Chefbox</h1>
      <img src="../assets/images/HouseA_logo.png">
      <p>Test</p>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
