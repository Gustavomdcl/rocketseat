import React, {useState, useEffect, useMemo, useCallback} from 'react';

function App() {
  const [techs,setTech] = useState([]);
  const [newTech,setNewTech] = useState('');
  const handleAdd = useCallback(()=>{
    setTech([
      ...techs,
      newTech
    ]);
    setNewTech('');
  },[techs,newTech]);
  const handleChange = useCallback((e)=>{
    setNewTech(e.target.value);
  },[]);
  useEffect(()=>{
    const storageTechs = localStorage.getItem('techs');
    if(storageTechs){
      setTech(JSON.parse(storageTechs));
    }
    // return ()=>{}; // componentWillUmount
  },[]);

  const techSize = useMemo(()=>techs.lenght,[techs]);
  // Chama somente se a techs mudar...

  useEffect(()=>{
    localStorage.setItem('techs',JSON.stringify(techs));
  },[techs]);
  return (
    <>
      <ul>
        {techs.map((tech,key)=>(
          <li key={key}>{tech}</li>
        ))}
      </ul><br />
      <strong>Você tem {techSize} tecnologias.</strong><br />
      <input type="text" onChange={handleChange} value={newTech} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;