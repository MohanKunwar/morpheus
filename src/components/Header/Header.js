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
    constructor(props) {
        super(props);

        this.state = {};

        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('header');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
    document.body.style.paddingTop = this.state.scroll > this.state.top ? 
             `${this.state.height}px` : 0;
    }
    render() {
        return (
            <div className={this.state.scroll > this.state.top ? 'fixed-header' : 'header'}>
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