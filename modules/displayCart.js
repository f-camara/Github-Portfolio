import { userCart } from './auxillary/userCart.js';
import displayCartTotal from './displayCartTotal.js';
import userPreferences from './auxillary/userPreferences.js';

const displayCart = () => {
    // Retrieve the Parent Node from the front end;
    const cartContainer = document.getElementById('cart-items');
    // Clear the innerHTML of the parent node so that we can append our cart items to it;
    cartContainer.innerHTML = '';
    // FOR each item of the userCart array, we:
    for (const item of userCart) {
        // [1] Create a div element and store it to a variable called singleItem;
        const singleItem = document.createElement('div');
        // [2] Assign the class of 'single-item' to the div element;
        singleItem.className = 'single-item';
        // [3] Calculate the line item total by multiplying the quantity of the item by its price and store it to a variable called lineItem;
        const lineItem = item.quantity * item.price;
        // [4] Assign the innerHTML of the div element to a template literal that contains the HTML structure for a single cart item;
        singleItem.innerHTML = `
        <div class="cart-product-single-item">
            <div class="cp-section-one">
                <img src="${item.imageUrl}" alt="${item.name}" />
                <div>
                <h3>${item.name}</h3>
                <p>unit price: ${userPreferences().currencySymbol} ${item.price}</p>
                <p>quantity: ${item.quantity}</p>
                </div>
                <button class="remove-btn" data-id="${item.id}">✕</button>
            </div>
            <div class="cp-section-two">
            <p>Line Item Total:</p>
            <p>${userPreferences().currencySymbol} ${lineItem.toFixed(2)}</p>
            </div>
        <div>
        `
        // [5] Append the div element to the parent node;
        cartContainer.appendChild(singleItem);
    }
    // After the for loop, we retrieve the sidebar footer element;
    const sidebarFooter = document.getElementById('grand-total')
    // We clear the innerHTML of the sidebar footer;
    sidebarFooter.innerHTML = '';
    // We create a div element and store it to a variable called grandTotalSect;
    const grandTotalSect = document.createElement('div');
    // We assign the class of 'grand-total' to the div element;
    grandTotalSect.className = 'grand-total';
    // We assign the innerHTML of the div element to a template literal that contains the HTML structure for the grand total section;
    grandTotalSect.innerHTML = `
    <h2>${userPreferences().currencySymbol} ${displayCartTotal().toFixed(2)}</h2>
    `;
    // We append the div element to the sidebar footer;
    sidebarFooter.appendChild(grandTotalSect);
}

export default displayCart;