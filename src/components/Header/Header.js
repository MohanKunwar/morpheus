import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import khozinfo from '../../assets/images/Khozinfo.svg';
import UserPanel from './UserPanel/UserPanel';
import SearchBar from './SearchBar';
import './Header.css';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to='/home'><img src={khozinfo} alt="KhozInfo" /></Link>
        </div>)
}


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <header className='card-container'>
                    <Logo />
                    <SearchBar />
                    <UserPanel />
                </header>
            </div>
        );
    }
}

export default Header;