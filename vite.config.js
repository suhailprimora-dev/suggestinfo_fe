import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import zlib from 'zlib'

// PNG scanner with decompression
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, 'src', 'assets');
const keywords = ['keka', 'bayzat', 'folks', 'no-bs', 'rasi', 'altexsoft', 'reinvest', 'rippling', 'simplilearn', 'salesforce', 'naffco', 'zimyo', 'suggest'];

function readPngMetadata(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    if (buffer.readUInt32BE(0) !== 0x89504E47 || buffer.readUInt32BE(4) !== 0x0D0A1A0A) {
      return '';
    }
    let textContent = '';
    let pos = 8;
    while (pos < buffer.length) {
      if (pos + 8 > buffer.length) break;
      const length = buffer.readUInt32BE(pos);
      const type = buffer.toString('ascii', pos + 4, pos + 8);
      if (type === 'IEND') break;
      if (type === 'tEXt' || type === 'zTXt') {
        const chunkData = buffer.slice(pos + 8, pos + 8 + length);
        const nullSepIdx = chunkData.indexOf(0);
        if (nullSepIdx !== -1) {
          const keyword = chunkData.toString('ascii', 0, nullSepIdx);
          let val = '';
          if (type === 'tEXt') {
            val = chunkData.toString('utf8', nullSepIdx + 1);
          } else {
            const compMethod = chunkData[nullSepIdx + 1];
            const compressedData = chunkData.slice(nullSepIdx + 2);
            if (compMethod === 0) {
              try {
                val = zlib.inflateSync(compressedData).toString('utf8');
              } catch (e) {
                val = '[Decompress Error]';
              }
            }
          }
          textContent += ` [${keyword}: ${val}]`;
        }
      }
      pos += 12 + length;
    }
    return textContent;
  } catch (err) {
    return 'Error: ' + err.message;
  }
}

try {
  const files = fs.readdirSync(assetsDir);
  const mappings = [];
  files.forEach(file => {
    if (file.startsWith('Overlay+Shadow') && file.endsWith('.png')) {
      const filePath = path.join(assetsDir, file);
      const metaText = readPngMetadata(filePath);
      const matches = [];
      keywords.forEach(word => {
        if (metaText.toLowerCase().includes(word) || file.toLowerCase().includes(word)) {
          matches.push(word);
        }
      });
      if (matches.length > 0) {
        mappings.push(`${file} -> ${matches.join(', ')} (Meta: ${metaText})`);
      }
    }
  });
  fs.writeFileSync(path.join(__dirname, 'src', 'mapping.txt'), mappings.join('\n'));
} catch (e) {
  fs.writeFileSync(path.join(__dirname, 'src', 'mapping.txt'), 'Error: ' + e.message);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
