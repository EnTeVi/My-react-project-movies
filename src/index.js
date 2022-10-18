import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {serupStore} from "./redux";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = serupStore();

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


