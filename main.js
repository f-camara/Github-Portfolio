import displayProducts from './modules/displayProducts.js';
import addToCart from './modules/addToCart.js';
import displayCart from './modules/displayCart.js';
import displayCartTotal from './modules/displayCartTotal.js';
import deleteCartItems from './modules/deleteCartItems.js';
import userDashboard from './modules/userDashboard.js';

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js');
}

// Wait for the DOM to load before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Check if the product list element exists on the page before attempting to display products
    if (document.getElementById('product-list')) {
        displayProducts();
    }

    // Check if the user dashboard element exists on the page before attempting to display the user dashboard
    if (document.getElementById('user-dashboard')) {
        userDashboard();
    }
    // Call functions to display the cart, cart total, and set up event listeners for adding and deleting items from the cart
    displayCart();
    displayCartTotal();
    addToCart();
    deleteCartItems();
});