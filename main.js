//querySeletor 
var radioBtn = document.querySelectorAll('input[name="btn"]');
var letsCookbtn = document.querySelector('.lets-cook-btn');
var outPut = document.querySelector('#outPut');
//event listener 
letsCookbtn.addEventListener('click',displayRecipe);
radioBtn.addEventListener('click', getRandomRecipe);
//event handler
function displayRecipe(dish) {
  
}
function getRandomRecipe() {
  var recipeArray;
  if (radioBtn.checked) {
    recipeArray = radioBtn.value;
  }
}

output.innerText = recipeArray ? `You should make: ${}`


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function randomize() {
 var randomQuote = quotes[randomQuoteIndex];
 document.querySelector('.poster-quote').textContent = randomQuote;
}

var dessertRecipe = ['Apple Pie','Lemon Meringue Pie','Black Forest Cake','Banana Bread','Peach Cobbler','Cheesecake','Funfetti Cake','Baklava','Flan','Macarons','Macaroons','Chocolate Cupcakes','Pavlova','Pumpkin Pie','Key Lime Pie','Tart Tatin','Croissants','Eclairs'];
var mainRecipes = ['Spaghetti and Meatballs','Pineapple Chicken','Shakshuka','Thai Yellow Curry','Bibimbap','Chicken Parmesean','Butternut Squash Soup','BBQ Chicken Burgers','Ramen','Empanadas','Chicken Fried Rice','Sheet Pan Fajitas','Margarita Pizza'];
var sideRecipes = ['Miso Glazed Carrots','Coleslaw','Garden Salad','Crispy Potatoes','Sweet Potato Tots','Coconut Rice','Caeser Salad','Shrimp Summer Rolls','Garlic Butter Mushrooms','Hush Puppies'];