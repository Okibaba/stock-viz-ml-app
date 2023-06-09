import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav, 
    NavItem,
    Container
} from 'reactstrap';

import { NavLink } from 'react-router-dom';
import svml_Logo from '../app/assets/img/svml-logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md' className='full-width-navbar'>
            
            <NavbarBrand className='ms-5' href='/'>
                <img src={svml_Logo} alt='svml logo' className='float-start' />
                <h1 className='mt-1'>SVML</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    
                </Nav>
            </Collapse>
            
        </Navbar>
    );
};

export default Header;