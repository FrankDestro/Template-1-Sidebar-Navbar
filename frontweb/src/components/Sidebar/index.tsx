/* eslint-disable react-hooks/rules-of-hooks */
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { ReactComponent as Bag } from 'assets/img/bag.svg';
import { ReactComponent as Box } from 'assets/img/box.svg';
import { ReactComponent as Hide } from 'assets/img/expand.svg';
import { ReactComponent as Meta } from 'assets/img/meta.svg';
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
              <div className="menu-title">Projetos</div>
              <SubMenu label="Projetos" icon={<Box />} className="menu-primary">
                <MenuItem>
                  <NavLink to="/">Visualizar projetos</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/projetos">Criar um novo Projeto</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/clientes">Tarefas</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/tarefas">Equipe</NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/tarefas">Dashboard / Relatórios</NavLink>
                </MenuItem>
              </SubMenu>
              <div className="menu-title">Service Desk</div>
              <SubMenu label="Service Call" icon={<Bag />}>
                <MenuItem> Novo chamado</MenuItem>
                <MenuItem> Vizualizar Chamados</MenuItem>
                <MenuItem> Relatório Dashboard</MenuItem>
              </SubMenu>
              <SubMenu label="Theme" icon={<Meta />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
              <div className="menu-title">IT Operations</div>
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
