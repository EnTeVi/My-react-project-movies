import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from "./redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}>
        <h1 className='Development'>The site is under development...</h1>
        <App/>
    </Provider>
);


