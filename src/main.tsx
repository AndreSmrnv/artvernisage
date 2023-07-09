import React        from 'react';
import ReactDOM     from 'react-dom/client';
import {Provider}   from "react-redux";
import {App}        from "./components/app";
import store        from "./services/store";
import                  'normalize.css';
import                  './main.scss';




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
)
