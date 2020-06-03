const RecipeStore = {
    data: {
        recipeCard: ""
    },
    methods: {
        setRecipeToCard(recipe) {
            RecipeStore.data.recipeCard = recipe;
        }
    }
}
export default RecipeStore;