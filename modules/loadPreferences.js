import userPreferences from "./auxillary/userPreferences.js";

const loadPreferences = () => {
    // Load the user's preferred font from sessionStorage and store it in a variable called "getGlobalFont";
    const getGlobalFont = sessionStorage.getItem('globalFont');
    // If a preferred font is found, apply it to the body of the document; otherwise, use a default font;
    document.body.style.fontFamily = getGlobalFont || "Merriweather, serif";
    

    // Retrieve the HTML element where the user selects their preferred font and store it in a variable called "fontSelect";
    const fontSelect = document.getElementById("global-font");
    // IF the font selection element exists and a preferred font is found, we:
    if (fontSelect && getGlobalFont) {
        // [1] set the selection to the preferred font;
        fontSelect.value = getGlobalFont;
    };

    // Retrieve the HTML element where the user selects their preferred shipping method and store it in a variable called "shippingSelect";
    const shippingSelect = document.getElementById("shipping-method");
    // IF the shipping selection element exists and a preferred shipping method is found, we:
    if (shippingSelect && userPreferences().shippingMethod) {
        // [1] set the selection to the preferred shipping method;
        shippingSelect.value = userPreferences().shippingMethod;
    };

    // Retrieve the HTML element where the user selects their preferred currency and store it in a variable called "currencySelect";
    const currencySelect = document.getElementById("currency");
    // IF the currency selection element exists and a preferred currency is found, we:
    if (currencySelect && userPreferences().currency) {
        // [1] set the selection to the preferred currency;
        currencySelect.value = userPreferences().currency;
    };
}

export default loadPreferences;