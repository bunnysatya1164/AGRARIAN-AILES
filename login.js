document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default link behavior

        // Perform any necessary cleanup (e.g., remove user session, tokens)
        // For demonstration, we'll use a simple alert and redirect
        alert('Logout successful!');

        // Redirect to login page
        window.location.href = 'account.html';
    });
});
