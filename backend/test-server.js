const { PrismaClient } = require('./generated/prisma/client.js');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://postgres:password@localhost:5432/unicorn_bank',
    },
  },
});

// Simple Express server to test basic functionality
const express = require('express');
const app = express();

app.use(express.json());

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      message: 'Basic server is running',
      database: 'connected',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: error.message,
      timestamp: new Date().toISOString(),
    });
  }
});

// Test parent creation
app.post('/api/test/parent', async (req, res) => {
  try {
    const { email, name, password } = req.body;
    
    const parent = await prisma.parent.create({
      data: {
        email,
        name,
        password,
      },
    });
    
    res.json({ success: true, parent: { id: parent.id, email: parent.email, name: parent.name } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test child creation with ParentChild relation
app.post('/api/test/child', async (req, res) => {
  try {
    const { name, parentId, password } = req.body;
    
    const child = await prisma.child.create({
      data: {
        name,
        password,
      },
    });
    
    // Create ParentChild relationship
    await prisma.parentChild.create({
      data: {
        parentId,
        childId: child.id,
      },
    });
    
    // Create spending account
    await prisma.spendingAccount.create({
      data: {
        childId: child.id,
      },
    });
    
    res.json({ success: true, child: { id: child.id, name: child.name } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test financial transaction
app.post('/api/test/transaction', async (req, res) => {
  try {
    const { childId, amount, source, comment } = req.body;
    
    // Find child's spending account
    const account = await prisma.spendingAccount.findFirst({
      where: { childId },
    });
    
    if (!account) {
      return res.status(404).json({ success: false, error: 'Account not found' });
    }
    
    // Create transaction
    const transaction = await prisma.transaction.create({
      data: {
        amount: Number(amount),
        source: source || 'MANUAL_TOPUP',
        comment: comment || 'Test transaction',
        spendingAccountId: account.id,
      },
    });
    
    // Calculate new balance
    const allTransactions = await prisma.transaction.findMany({
      where: { spendingAccountId: account.id },
    });
    
    const balance = allTransactions.reduce((sum, t) => sum + Number(t.amount), 0);
    
    res.json({ 
      success: true, 
      transaction: { id: transaction.id, amount: transaction.amount, source: transaction.source },
      balance 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Test balance calculation
app.get('/api/test/balance/:childId', async (req, res) => {
  try {
    const { childId } = req.params;
    
    const account = await prisma.spendingAccount.findFirst({
      where: { childId },
    });
    
    if (!account) {
      return res.status(404).json({ success: false, error: 'Account not found' });
    }
    
    // Calculate balance from transactions
    const transactions = await prisma.transaction.findMany({
      where: { spendingAccountId: account.id },
    });
    
    const balance = transactions.reduce((sum, t) => sum + Number(t.amount), 0);
    
    res.json({ 
      success: true, 
      childId,
      balance,
      transactionCount: transactions.length 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Test server running on port ${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`👥 Test endpoints:`);
  console.log(`   POST http://localhost:${PORT}/api/test/parent`);
  console.log(`   POST http://localhost:${PORT}/api/test/child`);
  console.log(`   POST http://localhost:${PORT}/api/test/transaction`);
  console.log(`   GET  http://localhost:${PORT}/api/test/balance/:childId`);
});