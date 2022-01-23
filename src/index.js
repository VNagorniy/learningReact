import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <StrictMode>
    <App />
    <BootstrapTest></BootstrapTest>
  </StrictMode>,
  document.getElementById('root')
);
