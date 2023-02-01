
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar';
import collapse from '../../assets/img/collapseicon.png';

import './styles.css';


function Side() {

  const { collapseSidebar } = useProSidebar();

  return (
    <div className='sidebar-container'>
      <Sidebar transitionDuration={1000}>
        <Menu>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <SubMenu label="Maps">
              <MenuItem> Google maps</MenuItem>
              <MenuItem> Open street maps</MenuItem>
            </SubMenu>
            <SubMenu label="Theme">
              <MenuItem> Dark</MenuItem>
              <MenuItem> Light</MenuItem>
            </SubMenu>
          </Menu>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <img
            src={collapse}
            alt="Profile"
            onClick={() => collapseSidebar()}
            id="logout-img"
            className="image-expand brightness blur saturate grayscale contrast"
          />
        </div>
      </main>
    </div>
  )
}

export default Side;
