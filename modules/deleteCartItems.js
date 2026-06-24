import { userCart, storageAdd } from "./auxillary/userCart.js";
import displayCart from "./displayCart.js";
import displayCartTotal from "./displayCartTotal.js";

const deleteCartItems = () => {
    // If a click occurs on our document, we:
    document.addEventListener('click', (e) => {
        // [1] Check to see if what has been clicked has a class of 'remove-btn'. If it does, we:
        if (e.target.classList.contains('remove-btn')) {
            // [1] Find the I.D of the button that has been clicked and store it to a variable called productId;
            const productId = parseInt(e.target.dataset.id);
            // [2] Find the index of the product in the userCart array that has the same ID as productId and store it to a variable called index;
            const index = userCart.findIndex(item => item.id === productId);
            
            // If the index is not equal to -1 OR ~ if the product exists in the cart ~, we:
            if (index !== -1) {
                // [1] Remove the product from the userCart array using the splice method and store it to a variable called removedItem;
                const removedItem = userCart.splice(index, 1);
                // [2] Store the cart to local storage
                storageAdd();
            }
            // [3] Call the displayCart and displayCartTotal functions to update the cart display and total price on the webpage
            displayCart();
            displayCartTotal();
        };
    });
}

export default deleteCartItems;