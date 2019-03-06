import React, { Component } from 'react'
import khozinfo from '../../assets/images/khozinfo.png';
import UserPanel from './UserPanel/UserPanel';
import './Header.css';

const Logo = () => {
    return (
        <div style={{ margin: 'auto auto auto 0', padding: '10px 0' }}>
            <img src={khozinfo} alt="KhozInfo" />
        </div>)
}
const SearchBar = () => {
    return (
        <div className='search-bar'>
            <input type='text' className='search-input' />
        </div>
    );

}
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