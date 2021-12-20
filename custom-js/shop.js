var total = localStorage.getItem('checkout');
total = 0;
var additem = document.getElementById('addToCart');


additem && additem.addEventListener('click', addToCart);

function addToCart() {
    
    total++;
    localStorage.setItem('checkout', total);
    document.querySelector('#checkout').innerHTML = "Checkout " + total;
    document.querySelector('#checkout').href = "checkout.html";
}

