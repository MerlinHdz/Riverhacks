document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const loginLink = document.getElementById('loginLink');
    const username = document.getElementById('username');
    const logoutLink = document.getElementById('logoutLink');

    // Check if token exists
    const token = getCookie('token'); // Retrieve token from cookie
    console.log(token);

    if (token) {
        // TEST
        console.log("HERE");
        console.log(token);
        console.log(data.username);

        // Hide login link
        loginLink.style.display = 'none';
        
        // Show username
        getUsername().then((data) => {
            username.textContent = data.username;
            username.style.display = 'inline';
        });

        // Show logout link
        logoutLink.style.display = 'inline';
    }
});

// Function to get username using the token
async function getUsername() {
    try {
        const response = await fetch('/api/user', { // Replace with your user endpoint
            headers: {
                'Authorization': `Bearer ${getCookie('token')}` // Pass token in Authorization header
            }
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        return { username: 'User' }; // Default username or handle error
    }
}

// Function to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) return parts.pop().split(';').shift();
}
