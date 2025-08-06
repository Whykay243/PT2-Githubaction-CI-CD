// auth.js

// Make sure to include Amplify script in your HTML before this script:
// <script src="https://cdn.jsdelivr.net/npm/aws-amplify@4.3.27/dist/aws-amplify.min.js"></script>

const Amplify = window.aws_amplify;

Amplify.Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_3wLP1P6C8',
    userPoolWebClientId: '2a1eutbrhfcim7emu27l9sc3oc',
  }
});

// Call this on page load to check if user is logged in
async function checkAuth() {
  try {
    const user = await Amplify.Auth.currentAuthenticatedUser();
    console.log("User is signed in:", user);
    return user;
  } catch (error) {
    console.log("User not signed in, redirecting to login...");
    window.location.href = 'index.html';  // your login page
    throw new Error("Redirecting to login");
  }
}

// Logout function to sign user out
async function logout() {
  try {
    await Amplify.Auth.signOut();
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

// Auto-bind logout button if present
document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      logout();
    });
  }
});

// Expose globally
window.checkAuth = checkAuth;
window.logout = logout;
