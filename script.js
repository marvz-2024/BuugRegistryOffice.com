// Allowed users array
const allowedUsers = [
    { username: "marvin", password: "marvz2024" },
    { username: "cleenith", password: "001100" },
    { username: "criselda", password: "criselda123" }
];    

document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check for valid credentials
    const user = allowedUsers.find(user => user.username === username && user.password === password);

    if (user) {
        document.getElementById("message").innerText = "";
        // Open a new tab
        window.open('record.html', '_self'); // Replace with your desired URL
    } else {
        document.getElementById("message").innerText = "";
    }
});
