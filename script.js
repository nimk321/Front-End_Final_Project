let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItemsList.appendChild(li);
    });
}

function showCart() {
    const cartSection = document.querySelector('.cart-section');
    const checkoutSection = document.querySelector('.checkout-section');
    cartSection.style.display = 'block';
    checkoutSection.style.display = 'none';
    updateCartDisplay();
}

function checkout() {
    const cartSection = document.querySelector('.cart-section');
    const checkoutSection = document.querySelector('.checkout-section');
    cartSection.style.display = 'none';
    checkoutSection.style.display = 'block';
}
