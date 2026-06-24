import userLogin from "./userLogin.js";
import userLogout from "./userLogout.js";
import userPreferences from "./auxillary/userPreferences.js";
import loadPreferences from "./loadPreferences.js";

const userDashboard = () => {
    // Retrieve HTML element with "user-dashboard" ID. The parent node;
    const userDashboard = document.getElementById('user-dashboard');
    // Create new <div> element and store it to "dashboardSection" variable;
    const dashboardSection = document.createElement('div');
    // Give "dashboardSection" a class of "dashboard-section";
    dashboardSection.className = "dashboard-section";

    // ══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════ //
    // Event Listeners                                                                  
    // ══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════ //
    
    document.addEventListener('click', (e) => {
        // IF event target has a class that contains "sign-in-button", we:
        if (e.target.classList.contains('sign-in-button')) {
            // [1] Retrieve the value of the HTML element with the ID of "users-name" and we store it to "username" variable;
            let username = document.getElementById("users-name").value;
            // [2] Store this "username" variable to cookies;
            document.cookie = "username=" + encodeURIComponent(username) + "; path=/; SameSite=Lax";
            // [3] Set the users status to logged in and store it to cookies;
            document.cookie = "isLoggedIn=true; path=/; SameSite=Lax";
        };
        // IF event target has a class that contains "sign-out-button", we:
        if (e.target.classList.contains('sign-out-button')) {
            // [1] Delete both cookies;
            document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // [2] reload the window to update the front end;
            window.location.reload();
        };
        // IF event target has a class that contains "save-preferences", we:
        if (e.target.classList.contains('save-preferences')) {
            // [1] Retrieve the value of the HTML element with the ID of "shipping-method" and we store it to "shippingmethod" variable;
            const shippingMethod = document.getElementById('shipping-method').value;
            // [2] Retrieve the value of the HTML element with the ID of "currency" and we store it to "currency" variable;
            const currency = document.getElementById('currency').value;
            // [3] Store these variables ( shippingMethod && currency ) to cookies;
            document.cookie = "shippingMethod=" + encodeURIComponent(shippingMethod) + "; path=/; SameSite=Lax";
            document.cookie = "currency=" + encodeURIComponent(currency) + "; path=/; SameSite=Lax";
            // [4] Retrieve the value of the HTML element with the ID of "global-font" and we store it to "userFontPref" variable;
            const userFontPref = document.getElementById('global-font').value;
            // [5] Store the "userFontPref" to session storage with a variable of "globalFont";
            sessionStorage.setItem('globalFont', userFontPref);
        };
    })

    // ══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════ //
    // HTML Injection                                                                 
    // ══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════ //

    // IF the cookie shows that the user is logged in, we:
    if (document.cookie.includes("isLoggedIn=true")) {
        // [1] Create the following HTML form
        dashboardSection.innerHTML = `
        <h2>Hello ${userPreferences().username} </h2>
        <p>Welcome to your new dashboard</p>
        <form action="" method="get" class="user-preferences-form">
            <div class="user-preferences-section">
                <label>Enter your preffered shipping method</label>
                <br>
                <select name="shipping-method" id="shipping-method">
                    <option value="collection">Collection</option>
                    <option value="delivery" selected>Delivery</option>
                </select>
            </div>
            <div class="user-preferences-section">
                <label>Enter your preffered currency</label>
                <br>
                <select name="currency" id="currency">
                    <option value="USD">$ USD - US Dollar</option>
                    <option value="EUR">€ EUR - Euro</option>
                    <option value="GBP">£ GBP - British Pound</option>
                    <option value="JPY">¥ JPY - Japanese Yen</option>
                    <option value="CAD">$ CAD - Canadian Dollar</option>
                    <option value="AUD">$ AUD - Australian Dollar</option>
                    <option value="CHF">₣ CHF - Swiss Franc</option>
                    <option value="CNY">¥ CNY - Chinese Yuan</option>
                    <option value="INR">₹ INR - Indian Rupee</option>
                    <option value="BRL">R$ BRL - Brazilian Real</option>
                    <option value="ZAR" selected>R ZAR - South African Rand</option>
                    <option value="NZD">$ NZD - New Zealand Dollar</option>
                    <option value="KRW">₩ KRW - South Korean Won</option>
                    <option value="SGD">$ SGD - Singapore Dollar</option>
                    <option value="MXN">$ MXN - Mexican Peso</option>
                </select>
            </div>
            <div class="user-preferences-section">
                <label>Enter your preffered font for this website</label>
                <br>
                <select id="global-font">
                    <option value="Georgia, serif">Georgia</option>
                    <option value="Garamond, serif">Garamond</option>
                    <option value="Palatino, serif">Palatino</option>
                    <option value="Times New Roman, serif">Times New Roman</option>
                    <option value="Bodoni, serif">Bodoni</option>
                    <option value="Didot, serif">Didot</option>
                    <option value="Playfair Display, serif">Playfair Display</option>
                    <option value="Merriweather, serif">Merriweather</option>
                </select>
            </div>
            <div class="user-preferences-section">
                <br>
                <button type="submit" class="save-preferences">Save Preferences</button>
            </div>
        </form>
        `;
        // [2] Append the innerHTML section to the Parent Node;
        userDashboard.appendChild(dashboardSection)
        // [3] Load the user log out section;
        userLogout();
        // [4] Load any existing user preferences;
        loadPreferences();
    } else {
        // ELSE we, [1] Load the user login section;
        userLogin()
        // [2] Append this section to the Parent Node;
        userDashboard.appendChild(dashboardSection)
    }
}

export default userDashboard;