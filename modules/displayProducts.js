import shopInventory from './auxillary/shopInventory.js';
import userPreferences from './auxillary/userPreferences.js';
import loadPreferences from './loadPreferences.js';

const displayProducts = () => {
    // Retrieving the Parent Node from the Front-End
    const productList = document.getElementById('product-list');
    // For every product of the shopInventory array, we:
    for (const product of shopInventory) {
        // [1] Create a <div> element and assign it to a singleProduct variable;
        const singleProduct = document.createElement('div');
        // [2] Give that <div> element a class name of "single-product";
        singleProduct.className = 'single-product';
        // [3] Create & assign the innerHTML of the <div> element;
        singleProduct.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" />
            <div>
            <h3>${product.name}</h3>
            <h4>${userPreferences().currencySymbol} ${product.price}</h4>
            <p>${product.description}</p>
            <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        // [4] Append the <div> element to the Parent Node we sourced @ the begining of the function.
        productList.appendChild(singleProduct);
        // [5] Call the loadPreferences() function to apply user preferences to the newly created product elements.
        loadPreferences();
    }
}

export default displayProducts;