/* eslint-disable react/jsx-no-undef */
import { ReactComponent as Logo } from 'assets/img/logo2.svg';
import { ReactComponent as Resources } from 'assets/img/resources.svg';
import { ReactComponent as Perfil } from 'assets/img/fotoperfil.svg';
import { useState } from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
} from 'reactstrap';

import './styles.css';

import MenuIr from 'components/NotificationBadge';

function Header2() {
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <Navbar className="navbar bg-primary">
      <NavbarBrand href="#">
        <Logo /> <span>Management</span>
      </NavbarBrand>
      <Nav className="ml-auto">
        <div className="menu-right">
          <span className="login-information">
          <span className="navbar-usuario-email">Olá, </span>{' '}
          <span className="navbar-usuario-email">administrador@gmail.com.br</span>  
          </span>

          <NavItem>
            <Perfil className="foto-perfil-content"></Perfil>            
          </NavItem>

          <NavItem className="notification-btn">
            <UncontrolledDropdown
              isOpen={notificationDropdownOpen}
              toggle={() =>
                setNotificationDropdownOpen(!notificationDropdownOpen)
              }
            >
              <DropdownToggle className="navbar-icon-toggle">
                <MenuIr />
              </DropdownToggle>
              <DropdownMenu className="menu-notification">
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
                <DropdownItem>Notificação 1</DropdownItem>
                <DropdownItem>Notificação 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>

          <NavItem>
            <UncontrolledDropdown
              isOpen={profileDropdownOpen}
              toggle={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <DropdownToggle className="navbar-icon-toggle">
                <Resources />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Perfil</DropdownItem>
                <DropdownItem>Configurações</DropdownItem>
                {/*  <DropdownItem divider /> */}
                <DropdownItem>Sair</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Header2;
