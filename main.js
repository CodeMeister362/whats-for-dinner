//querySeletor 
var side = document.querySelector('#side'),
    main = document.querySelector('#main-dish'),
    letsCookbtn = document.querySelector('.lets-cook-btn'),
    outPut = document.querySelector('#outPut'),
    hidePotImg = document.querySelector('#pot-img'),
    displaytxt = document.querySelector('.you-should-make');
 
//event listener
letsCookbtn.addEventListener('click', hidePot, getRandomRecipe);
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
  document.querySelector('#array-output').textContent = randomRecipe
}

function hidePot() {
  hidePotImg.classList.add('hide');
  displaytxt.classList.remove('hide');
  getRandomRecipe();
}



var dessertRecipes = ['Apple Pie','Lemon Meringue Pie','Black Forest Cake','Banana Bread','Peach Cobbler','Cheesecake','Funfetti Cake','Baklava','Flan','Macarons','Macaroons','Chocolate Cupcakes','Pavlova','Pumpkin Pie','Key Lime Pie','Tart Tatin','Croissants','Eclairs'];
var mainRecipes = ['Spaghetti and Meatballs','Pineapple Chicken','Shakshuka','Thai Yellow Curry','Bibimbap','Chicken Parmesean','Butternut Squash Soup','BBQ Chicken Burgers','Ramen','Empanadas','Chicken Fried Rice','Sheet Pan Fajitas','Margarita Pizza'];
var sideRecipes = ['Miso Glazed Carrots','Coleslaw','Garden Salad','Crispy Potatoes','Sweet Potato Tots','Coconut Rice','Caeser Salad','Shrimp Summer Rolls','Garlic Butter Mushrooms','Hush Puppies'];