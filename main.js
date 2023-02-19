var side = document.querySelector('#side'),
    main = document.querySelector('#main-dish'),
    dessert = document.querySelector('#dessert'),
    entireMeal = document.querySelector('#entire-meal'),
    letsCookBtn = document.querySelector('.lets-cook-btn'),
    outPut = document.querySelector('#outPut'),
    hidePotImg = document.querySelector('#pot-img'),
    displayTxt = document.querySelector('.you-should-make');
 
  letsCookBtn.addEventListener('click', hidePot, getRandomRecipe);

function getRandomIndex(array) {
  return Math.floor(Math.random()*array.length)
}

function getRandomRecipe() {
  var randomRecipeIndex1 = getRandomIndex(mainRecipes),
      randomRecipeIndex2 = getRandomIndex(sideRecipes),
      randomRecipeIndex3 = getRandomIndex(dessertRecipes),
      randomRecipe1 = mainRecipes[randomRecipeIndex1],
      randomRecipe2 = sideRecipes[randomRecipeIndex2],
      randomRecipe3 = dessertRecipes[randomRecipeIndex3]

  if (side.checked) {
      document.querySelector('#array-output').textContent = (randomRecipe2)
  }

  if (main.checked) {
    document.querySelector('#array-output').textContent = (randomRecipe1)
  }

  if (dessert.checked) {
    document.querySelector('#array-output').textContent = (randomRecipe3)
  }

  if (entireMeal.checked) {
     document.querySelector('#array-output').textContent = `${randomRecipe1} with a side of ${randomRecipe2} and ${randomRecipe3} for dessert!`;
  }
}

function hidePot() {
  hidePotImg.classList.add('hide');
  displayTxt.classList.remove('hide');
  getRandomRecipe();
}



var dessertRecipes = ['Apple Pie','Lemon Meringue Pie','Black Forest Cake','Banana Bread','Peach Cobbler','Cheesecake','Funfetti Cake','Baklava','Flan','Macarons','Macaroons','Chocolate Cupcakes','Pavlova','Pumpkin Pie','Key Lime Pie','Tart Tatin','Croissants','Eclairs'],
    mainRecipes = ['Spaghetti and Meatballs','Pineapple Chicken','Shakshuka','Thai Yellow Curry','Bibimbap','Chicken Parmesean','Butternut Squash Soup','BBQ Chicken Burgers','Ramen','Empanadas','Chicken Fried Rice','Sheet Pan Fajitas','Margarita Pizza'],
    sideRecipes = ['Miso Glazed Carrots','Coleslaw','Garden Salad','Crispy Potatoes','Sweet Potato Tots','Coconut Rice','Caeser Salad','Shrimp Summer Rolls','Garlic Butter Mushrooms','Hush Puppies'];
