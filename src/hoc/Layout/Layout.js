import React, {Component} from 'react'
import './Layout.css';
import Aux from './../Aux';
import Header from '../../containers/header/Header';
import Navigation from '../../containers/navigation/Navigation';
class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <nav className='nav'>
                    <Navigation />
                </nav>
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;