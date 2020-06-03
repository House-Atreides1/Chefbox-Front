<!-- THIS IS WORK IN PROGRESS -->
<!-- ------------------------ -->

<template>
  <div class="cards-container">

    <div class="searchbar">
      <input type="text" placeholder="Find a recipe" v-model="search">
    </div>

    

    <template v-for="recipe in filteredRecipes">

      <div class="recipe-container">

        <div class="pic">
          <img v-bind:src="recipe.picture.thumbnail" alt="recipe pic">
        </div>

        <div class="recipe-title">
          <h2>{{ recipe.title }}</h2>
        </div>

        <div class="recipe-description">
          Age: {{ recipe.description }}
        </div>

      </div>

    </template>
  </div>
</template>



<style scoped>

.cards-container {
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.searchbar {
  grid-row: 1;
  grid-column: 1/4;
}
input {
  width: 100%;
  max-width: 300px;

  padding: 8px 15px;
  background: rgba(50, 50, 50, 0.2);
  border: 0px solid #dbdbdb;
}
.recipe-container {
  display: grid;
  grid-template-areas: "recipe-pic recipe-title recipe-description";
  grid-template-columns: 48px 1fr auto;
  grid-column-gap: 15px;
  padding: 10px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  background-color: white;
  border-radius: 5px;
}
.recipe-title {
  text-align: left;
  align-self: center;
}
.recipe-description {
  text-align: right;
  align-self: center;
}
.recipe-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}
.pic {
  align-self: center;
}
img {
  border: 1px solid gray;
}
</style>