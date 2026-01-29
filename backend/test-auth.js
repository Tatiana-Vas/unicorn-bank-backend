const axios = require('axios');

async function testAuthFlow() {
  try {
    // 1. Register a parent
    console.log('1. Registering parent...');
    const registerResponse = await axios.post('http://localhost:3000/auth/register', {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test Parent'
    });
    
    console.log('Registration successful:', registerResponse.data);
    const token = registerResponse.data.accessToken;
    
    // 2. Generate invitation code
    console.log('\n2. Generating invitation code...');
    const invitationResponse = await axios.post(
      'http://localhost:3000/api/parents/invitations/generate',
      {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    console.log('Invitation generated:', invitationResponse.data);
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testAuthFlow();