import React, { Component } from 'react';
import './Dropdown.css';
class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: true,
        };
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this)

    };
    dom
    dropdownRef = React.createRef()
    componentDidMount() {
        document.addEventListener('click', this.hideDropdownMenu)
    }
    componentWillUpdate() {
        if (!this.state.displayMenu) this.setState({ displayMenu: true })
        document.addEventListener('click', this.hideDropdownMenu)
    }
    hideDropdownMenu(e) {
        if (!this.dom.contains(e.target)) {
            this.setState({ displayMenu: false }, () => {
                document.removeEventListener('click', this.hideDropdownMenu)
            });
        }
    }
    render() {
        return (
            this.state.displayMenu
                ? (<div className="drop_down" ref={node => this.dom = node}>
                    {this.props.content}
                </div>)
                : null

        )
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.hideDropdownMenu)
    }
}

export default Dropdown;