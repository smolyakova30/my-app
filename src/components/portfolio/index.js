import React from 'react'; 
import ProjectCards from '../../components/Projects'
import portfolio from '../../portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container mb-5">
          <div className="project">
            <h2 className="top-title">My projects</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;