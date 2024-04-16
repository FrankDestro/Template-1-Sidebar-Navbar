# Exemplo de Navbar.

```js

import { useState } from 'react';
import {
  DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar,
  NavbarBrand, NavItem, UncontrolledDropdown
} from 'reactstrap';
import { ReactComponent as Notification } from 'assets/img/notification.svg';
import { ReactComponent as Resources } from 'assets/img/resources.svg';
import { ReactComponent as Logo } from 'assets/img/logo3.svg';


function AppNavbar() {
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  return (
    <Navbar className="navbar bg-primary">
      <NavbarBrand href="#">
       <Logo /> <span>Sistemas</span>
      </NavbarBrand>
      <Nav className="ml-auto">
        <NavItem>
          <UncontrolledDropdown isOpen={notificationDropdownOpen} toggle={() => setNotificationDropdownOpen(!notificationDropdownOpen)}>
            <DropdownToggle className="navbar-icon-toggle">
              <Notification />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Notificação 1</DropdownItem>
              <DropdownItem>Notificação 2</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
        
        <NavItem>
          <UncontrolledDropdown isOpen={profileDropdownOpen} toggle={() => setProfileDropdownOpen(!profileDropdownOpen)}>
            <DropdownToggle className="navbar-icon-toggle">
              <Resources />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Perfil</DropdownItem>
              <DropdownItem>Configurações</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Sair</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default AppNavbar;

```
