import ProjectCard from 'components/Card-projeto';
import './styles.css';

function Projetos() {
  return (
    <div className="container-content">
      <h1 className='title-container-content'>Voce esta na pagina Projetos</h1>
      <div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      </div>
    </div>
  );
}

export default Projetos;
