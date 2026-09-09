import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const realDataPath = path.join(projectRoot, 'src', 'data', 'portfolio.real.json');
const dummyDataPath = path.join(projectRoot, 'src', 'data', 'portfolio.dummy.json');
const currentDataPath = path.join(projectRoot, 'src', 'data', 'portfolio.current.json');

function main() {
  // 1. Check if Base64 encoded environment variable is provided (e.g. on Vercel)
  const envBase64 = process.env.PORTFOLIO_DATA_BASE64 || process.env.NEXT_PUBLIC_PORTFOLIO_DATA_BASE64;
  if (envBase64 && envBase64.trim().length > 0) {
    try {
      const decoded = Buffer.from(envBase64.trim(), 'base64').toString('utf8');
      JSON.parse(decoded); // Validate JSON format
      fs.writeFileSync(currentDataPath, decoded, 'utf8');
      console.log('✅ [sync-portfolio] Successfully synced data from PORTFOLIO_DATA_BASE64 environment variable.');
      return;
    } catch (err) {
      console.error('❌ [sync-portfolio] Failed to parse PORTFOLIO_DATA_BASE64:', err.message);
    }
  }

  // 2. Check if raw JSON environment variable is provided
  const envRaw = process.env.PORTFOLIO_DATA || process.env.NEXT_PUBLIC_PORTFOLIO_DATA;
  if (envRaw && envRaw.trim().length > 0) {
    try {
      JSON.parse(envRaw.trim()); // Validate JSON format
      fs.writeFileSync(currentDataPath, envRaw.trim(), 'utf8');
      console.log('✅ [sync-portfolio] Successfully synced data from PORTFOLIO_DATA environment variable.');
      return;
    } catch (err) {
      console.error('❌ [sync-portfolio] Failed to parse PORTFOLIO_DATA:', err.message);
    }
  }

  // 3. Check if local real data file exists (local development machine)
  if (fs.existsSync(realDataPath)) {
    fs.copyFileSync(realDataPath, currentDataPath);
    console.log('ℹ️ [sync-portfolio] Synced local real data (portfolio.real.json) to portfolio.current.json.');
    return;
  }

  // 4. Fallback to dummy data (e.g. GitHub clone or public CI without secrets)
  if (fs.existsSync(dummyDataPath)) {
    fs.copyFileSync(dummyDataPath, currentDataPath);
    console.log('ℹ️ [sync-portfolio] Fallback: Synced dummy data (portfolio.dummy.json) to portfolio.current.json.');
    return;
  }

  console.error('❌ [sync-portfolio] No portfolio data sources found!');
  process.exit(1);
}

main();
