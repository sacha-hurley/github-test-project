// GitHub Test Project
// A simple application to test GitHub connectivity

console.log('🚀 GitHub Test Project Started!');
console.log('✅ This project is working correctly');
console.log('📊 Current date:', new Date().toISOString());

// Simple function to demonstrate the project
function greetGitHub() {
    return 'Hello GitHub! This test project is ready for version control.';
}

// Test the function
const message = greetGitHub();
console.log('💬 Message:', message);

// Export for testing
module.exports = { greetGitHub };
