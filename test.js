// Simple test file for the GitHub test project
const { greetGitHub } = require('./index.js');

console.log('🧪 Running tests...');

// Test 1: Check if greetGitHub function exists
try {
    const result = greetGitHub();
    if (result && typeof result === 'string') {
        console.log('✅ Test 1 PASSED: greetGitHub function works');
    } else {
        console.log('❌ Test 1 FAILED: greetGitHub function returned unexpected result');
    }
} catch (error) {
    console.log('❌ Test 1 FAILED: greetGitHub function threw an error:', error.message);
}

// Test 2: Check if the message contains expected text
try {
    const message = greetGitHub();
    if (message.includes('GitHub')) {
        console.log('✅ Test 2 PASSED: Message contains "GitHub"');
    } else {
        console.log('❌ Test 2 FAILED: Message does not contain "GitHub"');
    }
} catch (error) {
    console.log('❌ Test 2 FAILED:', error.message);
}

console.log('🏁 Tests completed!');
