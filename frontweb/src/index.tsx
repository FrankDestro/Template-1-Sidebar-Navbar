import './assets/styles/custom.scss';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ProSidebarProvider>
    <App />
    </ProSidebarProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
