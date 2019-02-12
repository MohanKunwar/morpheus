import React, { Component } from 'react'

import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearchBar';
import UserPanel from './UserPanel/UserPanel';
import './Header.css';
class Header extends Component {
    componentWillMount() {
        console.log('contxt header', this.context);
    }
    render() {
        return (
            <header className='header'>
                <div className='card-container'>
                    <div className='header-area'>
                        <Logo />
                        <div className='search-area'>
                            <SearchBar />
                        </div>
                        <div className='user-panel-area'>

                            <UserPanel />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;