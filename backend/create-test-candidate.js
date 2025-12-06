#!/usr/bin/env node

/**
 * Quick script to create a test candidate account
 * Usage: node create-test-candidate.js
 */

require('dotenv').config();
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createTestCandidate() {
  try {
    console.log('🚀 Creating test candidate account...\n');

    // Hash password
    const hashedPassword = await bcrypt.hash('Test123456', 10);

    // Create candidate user
    const candidate = await prisma.user.upsert({
      where: { email: 'candidate@test.com' },
      update: {
        password: hashedPassword,
        name: 'Test Candidate',
        status: 'ACTIVE',
      },
      create: {
        email: 'candidate@test.com',
        password: hashedPassword,
        name: 'Test Candidate',
        role: 'CANDIDATE',
        regNo: 'TEST001',
        program: 'Bachelor of Science in Computer Science',
        status: 'ACTIVE',
        emailVerified: true,
      },
    });

    console.log('✅ Test candidate created successfully!\n');
    console.log('📝 Login Credentials:');
    console.log('━'.repeat(50));
    console.log(`📧 Email:    ${candidate.email}`);
    console.log(`🔐 Password: Test123456`);
    console.log(`👤 Name:     ${candidate.name}`);
    console.log('━'.repeat(50));
    console.log('\n📋 Steps to test:');
    console.log('1. Go to http://localhost:3000');
    console.log('2. Click "Login"');
    console.log('3. Select role: "Admin"');
    console.log('4. Enter credentials above');
    console.log('5. Should redirect to /candidate/dashboard');
    console.log('6. Upload manifesto and photo for nomination\n');

  } catch (error) {
    console.error('❌ Error creating test candidate:', error.message);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

createTestCandidate();
