import React from 'react';
import ReactDOM from 'react-dom';
import App from './Assets/Main/App.tsx';
import './reset.css';
import './index.scss';

const destination = document.querySelector('#app');

ReactDOM.render(<App />, destination);