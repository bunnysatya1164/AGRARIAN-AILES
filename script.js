function login() {
    // Set the "loggedIn" cookie to "true"
    setCookie("loggedIn", "true", 1);

    // Remove the login button and show the logout button
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "inline-block";

    alert("Login successful!");
}

// Function to handle logout
function logout() {
    // Set the "loggedIn" cookie to "false"
    setCookie("loggedIn", "false", 1);

    // Show the login button and hide the logout button
    document.getElementById("login-btn").style.display = "inline-block";
    document.getElementById("logout-btn").style.display = "none";

    alert("Logout successful!");
    window.location.href='account.html';
}

// When the page loads
window.onload = function() {
    // Check if the user is logged in
    if (isLoggedIn()) {
        // If logged in, remove the login button and show the logout button
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("logout-btn").style.display = "inline-block";
    } else {
        // If not logged in, show the login button and hide the logout button
        document.getElementById("login-btn").style.display = "inline-block";
        document.getElementById("logout-btn").style.display = "none";
    }
};