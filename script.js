let cartCount = 0;

// Function to update the cart count
function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Function to handle adding items to the cart
function addToCart() {
    cartCount++;
    updateCartCount();
    alert('Item added to cart!');
}

// Add event listeners to buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initialize cart count on page load
updateCartCount();