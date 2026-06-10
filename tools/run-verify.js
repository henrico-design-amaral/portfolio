const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const port = 4173;
const ROOT = path.resolve(__dirname, '..');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.ttf': 'font/ttf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  const decodedUrl = decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(ROOT, decodedUrl === '/' ? 'index.html' : decodedUrl);
  const ext = path.extname(filePath);
  let contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found: ' + decodedUrl);
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Static server running at http://127.0.0.1:${port}/`);

  console.log('Starting verification script...');
  const verifyProcess = spawn('node', [path.join(__dirname, 'portfolio-verify.js')], {
    stdio: 'inherit',
    env: { ...process.env, PORTFOLIO_BASE_URL: `http://127.0.0.1:${port}` }
  });

  verifyProcess.on('close', (code) => {
    console.log(`Verification process exited with code ${code}`);
    server.close(() => {
      console.log('Server stopped.');
      process.exit(code);
    });
  });
});
