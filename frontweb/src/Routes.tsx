import Header2 from 'components/Header2';
import Side from 'components/Sidebar';
import Clientes from 'Pages/Clientes';
import Dashboard from 'Pages/Dashboard';
import Projetos from 'Pages/Projetos';
import Tarefas from 'Pages/Tarefas';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <div className="main-container">
        <Side />
        <div className="app-container">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/clientes" exact>
              <Clientes />
            </Route>
            <Route path="/projetos">
              <Projetos />
            </Route>
            <Route path="/tarefas">
              <Tarefas />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
