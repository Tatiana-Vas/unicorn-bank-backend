// Minimal test for database connection
require('dotenv').config();

const { Pool } = require('pg');

async function testConnection() {
  console.log('🔗 Testing database connection...');
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/unicorn_bank',
  });

  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time');
    
    console.log('✅ Database connected successfully!');
    console.log('⏰ Current time:', result.rows[0].current_time);
    
    await client.end();
    
    console.log('🚀 Simple test passed - database is working!');
    
    return { success: true, message: 'Database connection successful' };
  } catch (error) {
    console.log('❌ Database connection failed:', error.message);
    return { success: false, error: error.message };
  }
}

testConnection();