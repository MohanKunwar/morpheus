import React, { Component } from 'react'

import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import AddPanel from './AddPanel/AddPanel';
import './Header.css'; 
class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Logo />
                <SearchBar />
                <AddPanel />
            </header>
        );
    }
}

export default Header;