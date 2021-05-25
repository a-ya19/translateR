import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, NavLink} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <NavbarBrand>
                        translateR
                    </NavbarBrand>
                </Navbar>
            </div>
            
        );
    }
}

export default Header;