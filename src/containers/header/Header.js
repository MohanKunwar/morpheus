import React, { Component } from 'react'

import Logo from './Logo/Logo';
import Search from './Search/Search';
import AddPanel from './AddPanel/AddPanel';
import './Header.css'; 
class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Logo />
                <Search />
                <AddPanel />
            </header>
        );
    }
}

export default Header;