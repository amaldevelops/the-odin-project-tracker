import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
import App from '../Class Based Components/App';
import RenderName from '../LessonTypeCheckingWithPropTypes/TypeCheckingProps'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RenderName/>
  </React.StrictMode>,
);
