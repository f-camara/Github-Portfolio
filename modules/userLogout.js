const userLogout = () => {
    // Retrieving the Parent Node from the Front-End
    const userLoginLogout = document.getElementById('user-login-logout');
    // Create a <div> element and assign it to a logoutSection variable;
    const logoutSection = document.createElement('div');
    // Give that <div> element a class name of "logout-section";
    logoutSection.className = "logout-section";
    // Create & assign the innerHTML of the <div> element;
    logoutSection.innerHTML = `
            <button type="submit" class="sign-out-button">Sign out</button>
    `
    // Append the <div> element to the Parent Node we sourced @ the begining of the function.
    userLoginLogout.appendChild(logoutSection)
}

export default userLogout;