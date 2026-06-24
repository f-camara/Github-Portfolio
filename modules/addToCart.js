import shopInventory from './auxillary/shopInventory.js';
import { userCart, storageAdd } from './auxillary/userCart.js'
import displayCart from './displayCart.js';
import displayCartTotal from './displayCartTotal.js';

const addToCart = () => {
    // If a click occurs on our document, we:
    document.addEventListener('click', (e) => {
        // Check to see if what has been clicked has a class of 'add-to-cart-btn'. If it does, we:
        if (e.target.classList.contains('add-to-cart-btn')) {
            // [1] Find the I.D of the button that has been clicked and store it to a variable called productId > REMEMBER < Our button has a "data-id" attribute that is equal to {product.id};
            const productId = parseInt(e.target.dataset.id);
            // [2] Iterate through the shopInventory array to find the product that has the same ID as productId and store it to a variable called product;
            const product = shopInventory.find(product => {
                return product.id === productId;
            });
            // [3] Iterate through the userCart array to ascertain whether the product already exists in our cart;
            const existingCartItem = userCart.find(item => {
                return item.id === productId
            });
            // [4] If the product exists we simply increment the value of its quantity key by one
            if (existingCartItem) {
                existingCartItem.quantity += 1;
            }
            // [5] Else if it does not exist, we add the product and assign a key value pair of "quantity: 1"
            else {
                userCart.push({ ...product, quantity: 1 });
            }
            // [6] Store the cart to local storage
            storageAdd();
            displayCart();
            displayCartTotal();
        }
    })
}

export default addToCart;