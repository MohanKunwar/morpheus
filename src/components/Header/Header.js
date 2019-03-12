import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import khozinfo from '../../assets/images/khozinfo.png';
import UserPanel from './UserPanel/UserPanel';
import SearchBar from './SearchBar';
import './Header.css';

const Logo = () => {
    return (
        <div>
            <Link to='/home'><img src={khozinfo} alt="KhozInfo" /></Link>
        </div>)
}


class Header extends Component {
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