# Step-by-Step Setup Guide

This guide will walk you through setting up the Broccoli Direct Proxy from scratch.

## Prerequisites

You'll need:
- A computer with internet access
- Basic knowledge of using a terminal/command prompt

## Step 1: Install Node.js

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version for your operating system
3. Run the installer and follow the on-screen instructions
4. Verify installation by opening a terminal/command prompt and typing:
   ```
   node -v
   npm -v
   ```
   You should see version numbers for both commands

## Step 2: Get the Code

1. Download the project files to your computer
2. Extract the files if they're in a zip archive
3. Open a terminal/command prompt
4. Navigate to the folder where you extracted the files:
   ```
   cd path/to/broccoli-direct-proxy
   ```

## Step 3: Install Dependencies

1. In your terminal/command prompt, make sure you're in the project folder
2. Run the following command:
   ```
   npm install
   ```
3. Wait for the installation to complete
   - This installs all the required packages defined in package.json
   - You should see a new "node_modules" folder in your project directory

## Step 4: Start the Proxy Server

1. In the same terminal window, run:
   ```
   node proxy-server.js
   ```
2. You should see a message like:
   ```
   Proxy server running at http://localhost:3000
   ```
3. Keep this terminal window open while using the proxy

## Step 5: Open the Web Interface

1. Find the `index.html` file in your project folder
2. Double-click to open it in your default web browser
   - Or right-click and select "Open with" to choose a specific browser

## Step 6: Use the Proxy

1. From the web interface, you'll see a list of proxy servers
2. Click on a proxy server to select it
3. Enter a URL in the input field (e.g., https://www.example.com)
4. Click the "Navigate" button
5. The browser will load the requested website through the selected proxy

## Step 7: Navigate the Proxy Browser

- Use the browser navigation buttons (Back, Forward, Refresh) in the proxy interface
- Enter new URLs in the address bar inside the proxy browser
- Close the proxy browser to return to the main interface

## Troubleshooting

### Problem: "No proxy server selected" error
- Solution: Make sure you've clicked on one of the proxy servers in the list

### Problem: Cannot connect to websites
- Solution 1: Check that the proxy server is still running in your terminal
- Solution 2: Try a different proxy from the list
- Solution 3: Verify your internet connection is working

### Problem: Proxy server won't start
- Solution 1: Make sure you're in the correct folder
- Solution 2: Check that you've installed all dependencies (Step 3)
- Solution 3: Try restarting your computer and trying again

## Next Steps

Once you're comfortable with the basic setup, you can:
1. Add your own proxy servers to the list in `index.html`
2. Customize the user interface
3. Deploy the proxy server to a hosting service for remote access 