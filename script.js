const pizzaBtn = document.getElementById("pizzaBtn");
const donutBtn = document.getElementById("donutBtn");
const contactBtn = document.getElementById("contactBtn");

pizzaBtn.addEventListener("click", function () {
    window.location.href = "pizza-orders.html";
});

donutBtn.addEventListener("click", function () {
    window.location.href = "donut-orders.html";
});

contactBtn.addEventListener("click", function () {
    window.location.href = "about-contact.html";
});