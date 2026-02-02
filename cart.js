let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItems = document.getElementById("cartItems");
let total = 0;

cart.forEach(item => {
  total += item.price;
  cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
});

cartItems.innerHTML += `<h3>Total: $${total}</h3>`;
