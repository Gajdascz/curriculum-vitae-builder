import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import IndexHeader from './components/Index/IndexHeader.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IndexHeader />
    <App />
  </React.StrictMode>
);
