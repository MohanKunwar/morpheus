import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './helpers/ScrollToTop';



const app = (
    <BrowserRouter>
        {/* <ScrollToTop> */}
            <App />
        {/* </ScrollToTop> */}
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
