const addToCart = document.getElementById("addToCart");
let cartValue = document.getElementById("cartValue").getAttribute("value");
const removeFromCart = document.getElementById("removeFromCart");

addToCart.addEventListener("click", function() { 
  cartValue++; 
  update();
});

removeFromCart.addEventListener("click", function() { 
  cartValue--; 
  update();
});

function update() {
  document.getElementById("cartValue").setAttribute("value", cartValue);
  if(cartValue <= 0)
    {
      removeFromCart.style.display = "none";
    } 
    else 
    {
      removeFromCart.style.display = "inline-block";
    }
}

update();