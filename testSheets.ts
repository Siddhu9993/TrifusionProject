import 'dotenv/config';
import { testSheetsConnection } from './src/services/googleSheets.js';

testSheetsConnection().then(console.log).catch(console.error);
