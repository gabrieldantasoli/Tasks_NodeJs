import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { LoadingContextProvider } from './context/backendLoading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <LoadingContextProvider>
        <App />
      </LoadingContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);