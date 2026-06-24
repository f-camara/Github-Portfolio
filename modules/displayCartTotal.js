import { userCart } from "./auxillary/userCart.js";
import userPreferences from './auxillary/userPreferences.js';

const displayCartTotal = () => {
    // Retrieve the Parent Node from the Front-End;
    const totalButton = document.getElementById('cart-total');
    // Clear the innerText of the Parent Node;
    totalButton.innerText = '';
    // Create an empty array to store the line totals of each item in the cart;
    const lineTotalArray = [];
    // FOR each item of the userCart array, we:
    for (const item of userCart) {
        // [1] Calculate the line total of each item by multiplying its quantity by its price and store it to a variable called "lineTotal";
        const lineTotal = item.quantity * item.price;
        // [2] Push the lineTotal to the lineTotalArray;
        lineTotalArray.push(lineTotal);
    }
    // We then use the reduce method to sum all the values of the lineTotalArray and store it to a variable called grandTotal;
    const grandTotal = lineTotalArray.reduce((a, b) => a + b, 0);
    // Finally, we update the innerText of the Parent Node to display the grand total of the cart;
    totalButton.innerText = `${userPreferences().currencySymbol} ${grandTotal.toFixed(2)}`;
    // We also return the grandTotal so that it can be used in other modules;
    return grandTotal;
};

export default displayCartTotal;