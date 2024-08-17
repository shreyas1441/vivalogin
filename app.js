
const firebaseConfig = {
    apiKey: "AIzaSyDEDxxRfxEvNEhvTKY4r0R76WZkNeonC-Q",
    authDomain: "viva-smarts-project.firebaseapp.com",
    databaseURL: "https://viva-smarts-project-default-rtdb.firebaseio.com",
    projectId: "viva-smarts-project",
    storageBucket: "viva-smarts-project.appspot.com",
    messagingSenderId: "103234362604510264255",
    appId: "1:103234362604510264255:web:abcdefg1234567"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const status = document.getElementById("status");

    status.textContent = "Verifying...";

    const userRef = database.ref('Users');
    
    userRef.once('value', (snapshot) => {
        const data = snapshot.val();
        const savedUsername = data.username;
        const savedPassword = data.password;

        if (usernameInput === savedUsername && passwordInput === savedPassword) {
            status.textContent = "Login successful!";
            setTimeout(() => {
                window.location.href = "home.html";
            }, 1000);
        } else {
            status.textContent = "Incorrect username or password.";
        }
    }).catch((error) => {
        status.textContent = "Error: " + error.message;
    });
}
