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
            <div className="user-dropdown">
                <div className="user-dropdown-button" onClick={e => this.showDropdownMenu(e)}><FaAngleDown className={'down'} /></div>
                {
                    this.state.displayMenu
                        ? (
                            <div className='user-dropdown-list'>
                                <div><p className="disabled">Hi {this.props.user.name}</p></div>
                                <div id="myaccount">
                                <img src={require("../../../assets/images/user.svg")} alt="user svg" />
                                <p>My Account</p>
                                </div>
                                <hr style={{marginTop: "3px", marginBottom: "10px"}}/>
                                <div><p>Businessess</p></div>
                                <div className="user-business-list">{
                                    this.props.user.businesses && this.props.user.businesses.length > 0
                                        ?
                                        this.props.user.businesses.map((business, index) =>

                                            <div className='user-business' key={index}>
                                            {
                                                business.logo 
                                                ? <img src={business.logo} alt={business.name} />
                                                : <img id="default-business" src={require("../../../assets/images/default-business.svg")} alt={business.name} />
                                            }
                                                <span>{business.name}</span>
                                            </div>
                                        )
                                        :
                                        null
                                }</div>
                                <hr style={{marginTop: "8px", marginBottom: "6px"}}/>
                                <div onClick={(e) => this.props.logout(e)}><p>Logout</p></div>
                            </div>
                        )
                        : null
                }
            </div>
        )
    }
}
export default Dropdown;