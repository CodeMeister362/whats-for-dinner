//querySeletor 
var side = document.querySelector('#side'),
    main = document.querySelector('#main-dish'),
    dessert = document.querySelector('#dessert'),
    entireMeal = document.querySelector('#entire-meal'),
    letsCookBtn = document.querySelector('.lets-cook-btn'),
    outPut = document.querySelector('#outPut'),
    hidePotImg = document.querySelector('#pot-img'),
    displayTxt = document.querySelector('.you-should-make');
 
//event listener
letsCookBtn.addEventListener('click', hidePot, getRandomRecipe);
//event handler
function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length)
}

function getRandomRecipe() {
  if (side.checked) {
    var randomRecipeIndex = getRandomIndex(sideRecipes),
        randomRecipe = sideRecipes[randomRecipeIndex];
  }
  if (main.checked) {
    var randomRecipeIndex = getRandomIndex(mainRecipes),
        randomRecipe = mainRecipes[randomRecipeIndex];
  }
  if (dessert.checked) {
    var randomRecipeIndex = getRandomIndex(dessertRecipes),
        randomRecipe = dessertRecipes[randomRecipeIndex];
  }
  if (entireMeal.checked) {
    var randomRecipeIndex = getRandomIndex(mainRecipes,dessertRecipes,sideRecipes),
        randomRecipe1 = mainRecipes[randomRecipeIndex],
        // randomRecipeIndex = getRandomIndex(dessertRecipes),
        randomRecipe3 = dessertRecipes[randomRecipeIndex],
        // randomRecipeIndex = getRandomIndex(sideRecipes),
        randomRecipe2 = sideRecipes[randomRecipeIndex];

    var randomRecipe123 = randomRecipe1 + randomRecipe2 + randomRecipe3;
  }
  console.log(randomRecipe123)
  document.querySelector('#array-output').textContent = (randomRecipe)
}

function hidePot() {
  hidePotImg.classList.add('hide');
  displayTxt.classList.remove('hide');
  getRandomRecipe();
}



var  dessertRecipes = ['Apple Pie','Lemon Meringue Pie','Black Forest Cake','Banana Bread','Peach Cobbler','Cheesecake','Funfetti Cake','Baklava','Flan','Macarons','Macaroons','Chocolate Cupcakes','Pavlova','Pumpkin Pie','Key Lime Pie','Tart Tatin','Croissants','Eclairs'],
     mainRecipes = ['Spaghetti and Meatballs','Pineapple Chicken','Shakshuka','Thai Yellow Curry','Bibimbap','Chicken Parmesean','Butternut Squash Soup','BBQ Chicken Burgers','Ramen','Empanadas','Chicken Fried Rice','Sheet Pan Fajitas','Margarita Pizza'],
     sideRecipes = ['Miso Glazed Carrots','Coleslaw','Garden Salad','Crispy Potatoes','Sweet Potato Tots','Coconut Rice','Caeser Salad','Shrimp Summer Rolls','Garlic Butter Mushrooms','Hush Puppies'],
     entireMealRecipes = [];