import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const realDataPath = path.join(projectRoot, 'src', 'data', 'portfolio.real.json');

function main() {
  if (!fs.existsSync(realDataPath)) {
    console.error('❌ File src/data/portfolio.real.json tidak ditemukan!');
    process.exit(1);
  }

  const rawJson = fs.readFileSync(realDataPath, 'utf8');
  // Minify JSON to save bytes
  const minified = JSON.stringify(JSON.parse(rawJson));
  const base64String = Buffer.from(minified, 'utf8').toString('base64');

  console.log('\n======================================================');
  console.log('   DATA PORTOFOLIO ASLI (BASE64) UNTUK VERCEL');
  console.log('======================================================\n');
  console.log('Langkah-langkah untuk Vercel:');
  console.log('1. Buka dashboard Vercel Anda di https://vercel.com');
  console.log('2. Pilih proyek portofolio ini -> Buka tab "Settings" -> "Environment Variables"');
  console.log('3. Tambahkan variable baru:');
  console.log('   - Key   : PORTFOLIO_DATA_BASE64');
  console.log('   - Value : (Salin string panjang di bawah ini)\n');
  console.log('--- SALIN MULAI DARI BAWAH INI ---');
  console.log(base64String);
  console.log('--- SALIN SELESAI ---\n');
  console.log('Setelah ditambahkan di Vercel, lakukan redeploy (atau push commit ke GitHub).');
  console.log('Website di Vercel akan otomatis menampilkan data asli Anda, sementara di GitHub tetap tersamar!\n');
}

main();
