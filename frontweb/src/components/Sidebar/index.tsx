import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { ReactComponent as Bag } from 'assets/img/bag.svg';
import { ReactComponent as Box } from 'assets/img/box.svg';
import { ReactComponent as Hide } from 'assets/img/expand.svg';
import { ReactComponent as Meta } from 'assets/img/meta.svg';
import { NavLink } from 'react-router-dom';
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  useProSidebar
} from 'react-pro-sidebar';

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
              <SubMenu label="Charts" icon={<Box />} className="menu-primary">
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Charts" icon={<Box />}>
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Charts" icon={<Box />}>
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
              </SubMenu>
              <SubMenu label="Charts" icon={<Box />}>
                <MenuItem> Pie charts</MenuItem>
                <MenuItem> Line charts</MenuItem>
                <MenuItem> Bar charts</MenuItem>
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
            <Hide onClick={() => collapseSidebar()} cursor="pointer" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Side;
