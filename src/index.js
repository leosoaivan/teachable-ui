import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContext from './contexts/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);
