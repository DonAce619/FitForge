import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Intercept and block problematic network requests
const originalFetch = window.fetch
window.fetch = function(...args) {
  const [url, options] = args
  
  // Block common problematic requests
  if (typeof url === 'string') {
    // Block analytics and tracking
    if (url.includes('google-analytics') || 
        url.includes('googletagmanager') ||
        url.includes('facebook') ||
        url.includes('fbq') ||
        url.includes('analytics') ||
        url.includes('tracking')) {
      return Promise.resolve(new Response('blocked', { status: 200 }))
    }
    
    // Block font requests that might fail
    if (url.includes('fonts.googleapis') || 
        url.includes('fonts.gstatic')) {
      return Promise.resolve(new Response('blocked', { status: 200 }))
    }
  }
  
  return originalFetch.apply(this, args)
}

// Intercept XMLHttpRequest
const originalXHROpen = XMLHttpRequest.prototype.open
XMLHttpRequest.prototype.open = function(method, url, ...args) {
  if (typeof url === 'string') {
    // Block same problematic requests
    if (url.includes('google-analytics') || 
        url.includes('googletagmanager') ||
        url.includes('facebook') ||
        url.includes('fbq') ||
        url.includes('analytics') ||
        url.includes('tracking') ||
        url.includes('fonts.googleapis') || 
        url.includes('fonts.gstatic')) {
      // Don't actually open the request
      return
    }
  }
  
  return originalXHROpen.apply(this, [method, url, ...args])
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
