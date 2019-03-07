import React, { Component } from 'react';
import './dropdown.css';

class DropdownToggle extends Component{
    constructor(){
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
               <div  className="dropdown">
                <div className="button-dropdown" onClick={this.showDropdownMenu}>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                </div>
       
                 { this.state.displayMenu ? (
                 <div className="displayMenu">
                <div className="displayItem">edit</div>
                <div className="displayItem">delete</div>
                 </div>
               ):
               (
                 null
               )
               }
       
              </div>
       
           );
         }
}

export default DropdownToggle;