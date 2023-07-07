const api_key = "863a360fa07944a588c96cb2cb81e158";
const recipeListEl = document.querySelector('.recipe-list')



function displayRecipes(recipes){

    recipeListEl.innerHTML = "";

   
    recipes.forEach((recipe) => {

        //li container
        const recipeItem = document.createElement('li');
        recipeItem.classList.add('recipe-item');

        //img-container
        const recipeImgContainer = document.createElement('div')
        recipeImgContainer.classList.add('img-container');

        //image
        const recipeImg = document.createElement('img');
        recipeImg.src = recipe.image;
        recipe.alt = recipe.title;

        //info

        const recipeTitle = document.createElement('h2');
        recipeTitle.innerText = recipe.title;

        const recipeIngriedent = document.createElement('p');
        recipeIngriedent.innerHTML = ` <strong>Ingridents: </strong>
          ${recipe.extendedIngredients.map((ingredient) => { return ingredient.original}).join(',')}
`

        //link container

        const recipeLinkContainer = document.createElement('div')
        recipeLinkContainer.classList.add('link-container')

        recipeLinkContainer.innerHTML = `  <a href="${recipe.sourceUrl}" target = "_blank">View Recipe</a> `

        recipeImgContainer.appendChild(recipeImg)
        recipeItem.appendChild(recipeImgContainer)
        recipeItem.appendChild(recipeTitle)
        recipeItem.appendChild(recipeIngriedent)
        recipeItem.appendChild(recipeLinkContainer)
        recipeListEl.appendChild(recipeItem)
    })

}


async function getRecipe(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${api_key}`)
    const data = await response.json();

    return data.recipes
}


async function loadRecipe(){
    const recipes = await getRecipe()
    console.log(recipes)
    displayRecipes(recipes)
}

window.addEventListener("DOMContentLoaded",loadRecipe)

