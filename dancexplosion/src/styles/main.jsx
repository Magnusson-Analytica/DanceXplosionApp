import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App.jsx'; 
import './index.css'; 
import { initAmplitude } from '../services/analytics'; 

const storedConsent = localStorage.getItem('cookieConsent');

if (storedConsent) {
  try {
    const consent = JSON.parse(storedConsent);
    if (consent.analytics) {
      initAmplitude();
    }
  } catch (error) {
    console.error("Failed to parse cookie consent", error);
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)