import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as singleSpa from 'single-spa';
import {registerReactttApp} from "./apps/react-app";
import {registerAngularApp} from "./apps/angular-app";

ReactDOM.render(<App/>, document.getElementById('root'));


registerReactttApp();
registerAngularApp();

singleSpa.start();
