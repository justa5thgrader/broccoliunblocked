# Broccoli Direct Proxy

A web-based proxy browser supporting multiple proxy types with tab cloaking and security features.

## Step-by-Step Setup

### Step 1: Install Node.js
- Download and install Node.js from [nodejs.org](https://nodejs.org/)
- Verify installation by running `node -v` and `npm -v` in your terminal

### Step 2: Install Dependencies
```
npm install
```

### Step 3: Start the Proxy Server
```
node proxy-server.js
```

### Step 4: Use the Proxy
1. Open `index.html` in your browser
2. Select a proxy from the list 
3. Enter a URL in the input field
4. Click "Navigate" to browse through the proxy

## Troubleshooting

- **No proxies appear**: Check that proxy servers are defined in the proxyServers array
- **Cannot connect**: Make sure the proxy server is running (Step 3)
- **Proxy errors**: Try a different proxy from the list

## Features

- HTTP, HTTPS, SOCKS4, and SOCKS5 proxy support
- Tabbed user interface with browser simulation
- Security features (script blocking, URL encryption)
- Tab cloaking to disguise browsing

## Components

- **Client**: `index.html` handles UI and user interaction
- **Server**: `proxy-server.js` routes requests through selected proxies

## Making Changes

### Add Custom Proxies

Add your proxies to the `proxyServers` array in `index.html`:
```javascript
{ 
  ip: '123.45.67.89', 
  port: '8080', 
  type: 'http', 
  country: 'US',
  protocol: 'HTTP',
  // other properties...
}
```

### Deploy to Production

1. Host on a cloud service (Heroku, Vercel, etc.)
2. Update `serverUrl` in index.html to your deployed server URL
3. Configure package.json for your hosting provider

## Security Note

This software is for educational purposes only. Running a proxy server has security and legal implications. 