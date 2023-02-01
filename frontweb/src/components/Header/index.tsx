/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-has-content */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoMain from '../../assets/img/logomain.png';
import { ReactComponent as Notification } from 'assets/img/notification.svg';
import { ReactComponent as Resources } from 'assets/img/resources.svg';

import './styles.css';

function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" className='navbar' >
                <Container>
                    <div className='logomain-container'>
                        <img src={LogoMain} alt="Speedometer" />
                    </div>
                    <Navbar.Brand href="#home">Sistema</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <div className="menu-content">
                          <span>administrador@grbsf.com.br</span>
                            <NavDropdown title={
                                <Resources />
                            } id="collasible-nav-dropdown">
                                  
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <div className='notification-container'>
                                <NavDropdown title={
                                    <><><Notification /></><span className="label label-danger">3</span></>
                                } id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            </div>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
}

export default Header;
