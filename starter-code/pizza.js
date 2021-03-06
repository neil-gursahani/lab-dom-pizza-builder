// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}


function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
    document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    } else {
      $mushroom.style.visibility = "hidden";
    }
    
  })
}

function renderGreenPeppers() {
    document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    } else {
      $greenPepper.style.visibility = "hidden";
    }
    
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelector(".sauce").classList.toggle("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelector(".crust").classList.toggle("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  event.currentTarget.classList.toggle("active"); 

  // document.querySelectorAll(".btn").forEach(function(element){
  //   for (var property in ingredients) {
  //     if (ingredients[key].name === document.querySelector(".btn").innerHTML && state[key] === true){
  //       document.querySelector(".btn").classList.remove("active")
  //     } else {
  //       document.querySelector(".btn").classList.add("active")
  //     }
  //   }
  // })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

// renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderPepperonni();
  renderButtons();
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function() {
  state.mushrooms = !state.mushrooms
  renderMushrooms();
  renderButtons();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function() {
  state.greenPeppers = !state.greenPeppers
  renderGreenPeppers();
  renderButtons();

});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function() {
  
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderButtons();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderButtons();
});