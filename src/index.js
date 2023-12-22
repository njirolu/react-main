import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Jika kamu ingin memulai pengukuran performa di aplikasi kamu, lewatkan sebuah fungsi
// untuk mencatat hasilnya (contohnya: reportWebVitals(console.log))
// atau kirim ke endpoint analitik. Pelajari lebih lanjut: https://bit.ly/CRA-vitals
reportWebVitals();

