import React,{useState,useEffect} from 'react';
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg';

import Header from './components/Header';

function App(){
  const [projects,setProjects] = useState([]);

  useEffect(()=>{
    api.get('projects').then(response=>{
      setProjects(response.data);
    });
  },[]);

  async function handleAddProject(){
    // setProjects([...projects,`Novo projeto ${Date.now()}`]);

    const response = await api.post('projects',{
      title: `Novo projeto ${Date.now()}`,
      owner: "Gustavo Lima"
    });

    const project = response.data;

    setProjects([...projects,project]);
  }
  return (<>
    <img src={backgroundImage} width={300} alt=""/>

    <Header title="HomePage">
      <ul>
        <li>HomePage</li>
        <li>Projects</li>
      </ul>
    </Header>

    <Header title="Projects">
      <ul>
        <li>HomePage</li>
        <li>Projects</li>
        <li>Login</li>
      </ul>
    </Header>

    <ul>
      {projects.map(project=><li key={project.id}>{project.title}</li>)}
    </ul>

    <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
  </>);
}

export default App;