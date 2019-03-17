import React, { Component } from 'react';
import "./Dropdown.css";
import { FaAngleDown } from 'react-icons/fa';
class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }
    render() {
        console.log('dropdown log', this.props.user)
        return (
            <div className="user_dropdown" >
                <div className="button" onClick={e => this.showDropdownMenu(e)}><FaAngleDown className={'down'} /></div>
                {
                    this.state.displayMenu
                        ? (
                            <div className='user-dropdown'>
                                <span>Hi {this.props.user.name} </span>
                                <br />
                                <span>My Account</span>
                                <br />
                                <span>Businessess</span>
                                <span>{
                                    this.props.user.businesses && this.props.user.businesses.length > 0
                                        ?
                                        this.props.user.businesses.map((business, index) =>

                                            <div className='user-businesses' key={index}>
                                            {
                                                business.logo 
                                                ? <img src={business.logo} alt={business.name} />
                                                : null // placeholder business image
                                            }
                                                <span>{business.name}</span>
                                            </div>
                                        )
                                        :
                                        null
                                }</span>
                                <span onClick={(e) => this.props.logout(e)}>Logout</span>
                            </div>
                        )
                        : null
                }
            </div>
        )
    }
}
export default Dropdown;