<template>
  <div>
    <h1>Recipes</h1>
    <div v-for="recipe in recipes" :key="recipe._id">
      <h1>{{recipe.title}}</h1>
      <h3>{{recipe.description}}</h3>
      <p>{{recipe.directions}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      recipes: []
    };
  },
  methods: {
    getRecipes() {
      axios.get("http://localhost:5500/recipes").then(response => {
        return (this.recipes = response.data);
      });
    }
  },
  created: function() {
    this.getRecipes();
  }
};
</script>
