import 'dotenv/config';
import { defineConfig } from 'prisma/config';

// Ensure DATABASE_URL is loaded
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
