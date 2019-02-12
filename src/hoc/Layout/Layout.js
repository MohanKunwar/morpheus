import React, { Component } from 'react'
import './Layout.css';
// import Aux from './../Aux';
import Header from '../../containers/header/Header';
import Navigation from '../../containers/navigation/Navigation';
// import Footer from './../../containers/footer/Footer';
// import axios from './../../axios';
// import API from './../../api';
// import ContextService from './../../services/index';
import ContextProvider from './../ContextProvider/ContextProvider';

class Layout extends Component {

    render() {
        const layout = (<div className="main-container'">
            <ContextProvider>
                <Header />
                <Navigation />
                <main className='content'>
                    {this.props.children}
                </main>
                {/* <Footer /> */}
            </ContextProvider>
        </div>)

        return (layout);
    }
}

export default Layout;