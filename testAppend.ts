import 'dotenv/config';
import { ensureLeadsHeader } from './src/services/googleSheets.js';

async function testHeader() {
    try {
        await ensureLeadsHeader();
        console.log('Successfully ensured header!');
    } catch (err: any) {
        console.error('Failed to ensure header:', err.message);
    }
}

testHeader();
