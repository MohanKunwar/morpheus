import React, { Component } from 'react';

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
        return (
            <div className="dropdown" >
                <div className="button" onClick={e => this.showDropdownMenu(e)}> drop</div>
                {
                    this.state.displayMenu
                        ? (
                            <div className='user-dropdown'>
                                <span>Hi {this.props.user.name} </span>
                                <br />
                                <span>My Account</span>
                                <br />
                                <span>Businessess</span>
                                {
                                    this.props.user.businesses && this.props.user.businesses.length > 0 ?
                                        <div className='user-businesses'>
                                            {
                                                this.props.user.businesses.map((business, index) =>
                                                    <div key={index}>{business.name}</div>
                                                )
                                            }
                                        </div>
                                        : <div></div>
                                }
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