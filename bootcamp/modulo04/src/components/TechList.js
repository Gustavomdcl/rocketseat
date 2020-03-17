import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };
  handleInputChange = e => {
    this.setState({newTech:e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    const {techs,newTech} = this.state;
    this.setState({techs:[...techs,newTech],newTech:''});
  }
  handleDelete = (tech) => {
    const {techs} = this.state;
    this.setState({techs:techs.filter(t=>t!=tech)});
  }
  render(){
    const {techs,newTech} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {techs.map((tech,key)=>(
            <li key={key}>
              {tech}
              <button onClick={()=>this.handleDelete(tech)} type="button">Remover</button>
            </li>
          ))}
        </ul>
        <input type="text" onChange={this.handleInputChange} value={newTech} />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;