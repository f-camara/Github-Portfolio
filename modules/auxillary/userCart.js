// The userCart array is initialized as an empty array.
const userCart = []

// The storageAdd function saves the current state of the userCart array to localStorage. It converts the array to a JSON string before storing it.
const storageAdd = () => {
    localStorage.setItem('userCart', JSON.stringify(userCart));
};

// The storageRetrieve function checks if there is a saved cart in localStorage.
function storageRetrieve() {
    // Fisrt, it retrieves the 'userCart' item from localStorage.
    const cartHasItems = localStorage.getItem('userCart');
    // If there is a saved cart, we:
    if (cartHasItems) {
        // [1] Parse the JSON string back into an array.
        const parsedCart = JSON.parse(cartHasItems);
        // [2] Clear the current userCart array.
        userCart.length = 0;
        // [3] Push the parsed items into the userCart array.
        userCart.push(...parsedCart);
    };
}

// The storageRetrieve function is called to initialize the userCart array with any saved items from localStorage when the script is loaded.
storageRetrieve();

export { userCart, storageAdd };