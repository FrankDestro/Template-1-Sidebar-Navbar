/* eslint-disable react-hooks/rules-of-hooks */
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { ReactComponent as Bag } from 'assets/img/bag.svg';
import { ReactComponent as Box } from 'assets/img/box.svg';
import { ReactComponent as Hide } from 'assets/img/expand.svg';
import { ReactComponent as Meta } from 'assets/img/meta.svg';
import { useState } from 'react';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar
} from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

import './styles.css';

function Side() {

  const { collapseSidebar } = useProSidebar();

  return (
    <>
      <div className="sidebar-container">
        <Sidebar transitionDuration={1000}>
          <Menu>
            <Menu>
              <div className="menu-title">Modulos</div>
              <SubMenu label="APP" icon={<Box />} className="menu-primary">
                <MenuItem>
                  <NavLink to="/">Dashobard </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/projetos">Projetos</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/clientes">Clientes</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/tarefas">Tarefas</NavLink>
                </MenuItem>
              </SubMenu>
              <SubMenu label="Charts" icon={<Box />}>
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <div className="menu-title">Cadastro</div>
              <SubMenu label="Maps" icon={<Bag />}>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" icon={<Meta />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <div className="menu-title">Settings</div>
              <SubMenu label="Maps" icon={<Bag />}>
                <MenuItem> Google maps</MenuItem>
                <MenuItem> Open street maps</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" icon={<Meta />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
            </Menu>
          </Menu>
        </Sidebar>
        <main style={{ padding: 10 }}>
          <div>
            <Hide
              onClick={() => collapseSidebar()}
              cursor="pointer"
              id="arrow"
            />
          </div>
        </main>
      </div>
    </>
  );
}

export default Side;
