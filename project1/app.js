const cupcakeButton = document.getElementById("cupcakebutton");
const cakeButton = document.getElementById("cakebutton");
const iceButton = document.getElementById("icebutton");
const waffleButton = document.getElementById("wafflebutton");

const pageCupcake = document.getElementById("pagecupcake");
const pageCake = document.getElementById("pagecake");
const pageIce = document.getElementById("pageice");
const pageWaffle = document.getElementById("pagewaffle");

const url = 'https://raw.githubusercontent.com/lmndang/Dessert-API/main/db.json';



fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {   
 
    for (let i = 0; i < Cakes.length; i++) {
        var caketoppingselect = document.getElementById("caketoppingselect");
        var caketoppingoption = document.getElementById("caketoppingoption");    
        caketoppingoption.value = data.Cakes.toppings.name;
        caketoppingoption.text = data.Cakes.topping.name;
        caketoppingselect.add(caketoppingoption); }
  })
  .catch(error => console.error('There has been a problem with your fetch operation:', error));


document.addEventListener("DOMContentLoaded", function() {
    cupcakeButton.addEventListener("click", function() {
        pageCupcake.classList.remove("hidden");
        pageCake.classList.add("hidden");
        pageIce.classList.add("hidden");
        pageWaffle.classList.add("hidden");
    });

    cakeButton.addEventListener("click", function() {
        pageCupcake.classList.add("hidden");
        pageCake.classList.remove("hidden");
        pageIce.classList.add("hidden");
        pageWaffle.classList.add("hidden");
    });

    iceButton.addEventListener("click", function() {
        pageCupcake.classList.add("hidden");
        pageCake.classList.add("hidden");
        pageIce.classList.remove("hidden");
        pageWaffle.classList.add("hidden");
    });

    waffleButton.addEventListener("click", function() {
        pageCupcake.classList.add("hidden");
        pageCake.classList.add("hidden");
        pageIce.classList.add("hidden");
        pageWaffle.classList.remove("hidden");
    });
});

