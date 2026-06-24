/* ════════════════════════════════════════════════════════════════════════════════════════════════════════════════

   ╔════════════════════════════════════╗
   ║          COOKIE SURVIVOR           ║
   ║    ═════════════════════════════   ║
   ║        I parsed this stupid        ║
   ║    cookie string manually, only    ║
   ║      to learn about this regex     ║
   ║            code later              ║
   ╚════════════════════════════════════╝

    const getUserName = (username) => {
        let cookieArray = document.cookie.split('; ');
        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            let parts = cookie.split('=');
            let name = parts[0];
            let value = parts[1];
            if (name === username) {
                return value
            }
        }
    }
    let username = getUserName("username")

════════════════════════════════════════════════════════════════════════════════════════════════════════════════ */

// The currencyIcons object maps currency codes to their corresponding symbols. This allows the application to display prices in the user's preferred currency format.
const currencyIcons = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CAD: "$",
    AUD: "$",
    CHF: "₣",
    CNY: "¥",
    INR: "₹",
    BRL: "R$",
    ZAR: "R",
    NZD: "$",
    KRW: "₩",
    SGD: "$",
    MXN: "$"
};

const userPreferences = () => {
    // The getCookie parsing function retrieves the value of a cookie by its name. Ref: https://stackoverflow.com/questions/10730362/get-cookie-by-name
    const getCookie = (name) => document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)')?.[2];
    // The userPrefObject is an object that stores the user's preferences, including their username, shipping method, and currency. It retrieves these values from cookies using the getCookie function.
    const userPrefObject = {
        username: getCookie("username"),
        shippingMethod: getCookie("shippingMethod"),
        currency: getCookie("currency"),
    };
    // The selectedCurrencyIcon variable retrieves the corresponding currency symbol from the currencyIcons object based on the user's selected currency. If the currency is not found in the object, it defaults to "R" (South African Rand).
    const selectedCurrencyIcon = currencyIcons[userPrefObject.currency] || "R";
    // The userPrefObject.currencySymbol property is then set to the selectedCurrencyIcon, allowing the application to display prices in the user's preferred currency format.
    userPrefObject.currencySymbol = selectedCurrencyIcon;
    // Finally, the userPrefObject is returned, providing access to the user's preferences for use in the application.
    return userPrefObject;
};

export default userPreferences;

