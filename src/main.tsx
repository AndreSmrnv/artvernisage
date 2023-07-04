import React    from 'react';
import ReactDOM from 'react-dom/client';
import {App}    from "./components/app/App";
import                'normalize.css';
import                './main.modules.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
