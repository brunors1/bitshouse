import { initializeApp } from "firebase/app";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCtQGUBSz4_aaBWXVMC73nxnLrbdIwf2Zo",
  authDomain: "bitshouse-f8c39.firebaseapp.com",
  projectId: "bitshouse-f8c39",
  storageBucket: "bitshouse-f8c39.appspot.com",
  messagingSenderId: "521891076173",
  appId: "1:521891076173:web:96cc227715016873fb6404"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
