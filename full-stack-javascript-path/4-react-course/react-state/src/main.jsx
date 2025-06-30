import React from 'react';
import ReactDOM from 'react-dom/client';
import {Person} from './Person'
import { HandleIncreaseAge } from './Componenet';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Person />
    <HandleIncreaseAge/>
  </React.StrictMode>,
);
