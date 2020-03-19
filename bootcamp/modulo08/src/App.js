import React, {useState, useEffect} from 'react';

function App() {
  const [techs,setTech] = useState([]);
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
  useEffect(()=>{
    const storageTechs = localStorage.getItem('techs');
    if(storageTechs){
      setTech(JSON.parse(storageTechs));
    }

    // return ()=>{}; // componentWillUmount
  },[]);
  useEffect(()=>{
    localStorage.setItem('techs',JSON.stringify(techs));
  },[techs]);
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