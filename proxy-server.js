const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const SocksProxyAgent = require('socks-proxy-agent');
const HttpProxyAgent = require('http-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic setup
app.use(cors());
app.use(express.static('./'));

// Status route
app.get('/', (req, res) => {
  res.send('Proxy server running');
});

// Main proxy endpoint for HTTP/HTTPS/SOCKS
app.use('/proxy', (req, res, next) => {
  const { url: targetUrl, proxyIp, proxyPort, proxyType } = req.query;
  
  if (!targetUrl) {
    return res.status(400).send('Missing URL parameter');
  }
  
  console.log(`Proxying: ${targetUrl} via ${proxyType || 'direct'} ${proxyIp}:${proxyPort}`);
  
  // Setup proxy options
  let proxyOptions = {
    target: targetUrl,
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
    secure: false,
    onProxyRes: (proxyRes) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      delete proxyRes.headers['content-security-policy'];
    }
  };
  
  // Add proxy agent if proxy details provided
  if (proxyIp && proxyPort) {
    if (proxyType === 'http') {
      proxyOptions.agent = new HttpProxyAgent(`http://${proxyIp}:${proxyPort}`);
    } else if (proxyType === 'https') {
      proxyOptions.agent = new HttpsProxyAgent(`https://${proxyIp}:${proxyPort}`);
    } else if (proxyType === 'socks4' || proxyType === 'socks5') {
      proxyOptions.agent = new SocksProxyAgent(`${proxyType}://${proxyIp}:${proxyPort}`);
    }
  }
  
  createProxyMiddleware(proxyOptions)(req, res, next);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
}); 