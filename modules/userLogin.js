const userLogin = () => {
    // Retrieve the Parent Node from the Front-End
    const userLoginLogout = document.getElementById('user-login-logout');
    // Create a <div> element and assign it to a loginSection variable;
    const loginSection = document.createElement('div');
    // Give that <div> element a class name of "login-section";
    loginSection.className = "login-section";
    // Create & assign the innerHTML of the <div> element;
    loginSection.innerHTML = `
    <H2>Log In</H2>
        <p>Welcome back! <br> Please enter your name to access your dashboard.</p>
        <form action="" method="get" class="form-example">
            <input type="text" name="name" id="users-name" required />
            <button type="submit" class="sign-in-button">Sign In</button>
        </form>
    `
    // Append the <div> element to the Parent Node we sourced @ the begining of the function.
    userLoginLogout.appendChild(loginSection)
}


export default userLogin;