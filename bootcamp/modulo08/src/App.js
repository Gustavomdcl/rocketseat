import React, {useState} from 'react';

function App() {
  const [techs,setTech] = useState([
    'ReactJS',
    'Node.js',
    'React Native'
  ]);
  const [newTech,setNewTech] = useState('');
  function handleAdd(){
    setTech([
      ...techs,
      newTech
    ]);
    setNewTech('');
  }
  function handleChange(e){
    setNewTech(e.target.value);
  }
  return (
    <>
      <ul>
        {techs.map((tech,key)=>(
          <li key={key}>{tech}</li>
        ))}
      </ul>
      <input type="text" onChange={handleChange} value={newTech} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;