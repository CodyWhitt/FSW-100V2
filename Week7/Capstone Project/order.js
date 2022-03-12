var burger = document.getElementById("burger")
var burrito = document.getElementById("burrito")
var pizza = document.getElementById("pizza")
var total = document.getElementById("total")
var button = document.getElementById("button")

burgerPrice = 5
burritoPrice = 4
pizzaPrice = 12

button.addEventListener("click", function(e) {
    e.preventDefault()
    num1 = (parseInt(burger.value) * burgerPrice)
    num2 = (parseInt(burrito.value) * burritoPrice)
    num3 = (parseInt(pizza.value) * pizzaPrice)
    total.value = (num1 + num2 + num3)
})

var homeButton = document.getElementById("homeButton")
homeButton.addEventListener("mousedown", function() {
    window.location = "homepage.html"
})