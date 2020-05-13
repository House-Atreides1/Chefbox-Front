<!-- THIS IS WORK IN PROGRESS -->
<!-- ------------------------ -->

<template>
  <div class="recipe-container">

    <div class="searchbar">
      <input type="text" placeholder="Find a recipe" v-model="search">
    </div>

    

    <!-- <template v-for="member in filteredMembers">

      <div class="member-container" :key="member.dob.date" v-on:click="setMemberProfile(member)">

        <div class="pic">
          <img v-bind:src="member.picture.thumbnail" alt="member pic">
        </div>

        <div class="member-name">
          <h2>{{ member.name.first }} {{ member.name.last }}</h2>
        </div>

        <div class="member-age">
          Age: {{ member.dob.age }}
        </div>

      </div>

    </template> -->
  </div>
</template>



<style scoped>

.recipe-container {
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
.member-container {
  display: grid;
  grid-template-areas: "member-pic member-name member-age";
  grid-template-columns: 48px 1fr auto;
  grid-column-gap: 15px;
  padding: 10px 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  background-color: white;
  border-radius: 5px;
}
.member-name {
  text-align: left;
  align-self: center;
}
.member-age {
  text-align: right;
  align-self: center;
}
.member-container:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
}
.pic {
  align-self: center;
}
img {
  border: 1px solid gray;
}
</style>