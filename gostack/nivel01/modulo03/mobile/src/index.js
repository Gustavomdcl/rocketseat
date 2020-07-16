import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,ScrollView,FlatList,Text,StyleSheet,StatusBar,Button,TouchableOpacity} from 'react-native';

import api from './services/api';

// Não possuem valor semântico (significado)
// Não possuem estilização própria
// Todos os componentes por padrão possuem "display: flex;"
// Estilos não possuem hierarquia

// StatusBar: Valores do status bar
// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3
// FlatList: Listas otimizadas com scroll
// Button: Botão com estilização própria dependendo do sistema
// Touchable: Todos que iniciam com esse são estilizáveis
//   TouchableOpacity: Fica levemente transparente quando clica
// StyleSheet: Estilos
// SafeAreaView: Não pega ali no Status bar
// ScrollView: Criar scroll

export default function App(){
  const [projects,setProjects] = useState([]);
  useEffect(()=>{
    api.get('projects').then(response=>{
      // console.log(response.data); // http://localhost:8081/debugger-ui/
      setProjects(response.data);
    });
  },[]);
  async function handleAddProject(){
    const response = await api.post('projects',{
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Gustavo Lima'
    });
    setProjects([...projects,response.data]);
  }
  return (<>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

    <SafeAreaView style={styles.container}>
      <FlatList 
        // style={styles.container}
        data={projects} // Deve ser um array
        keyExtractor={project=>project.id}
        renderItem={({item:project})=>(<Text style={styles.project}>{project.title}</Text>)}
      />
      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar projeto</Text>
      </TouchableOpacity>
    </SafeAreaView>

    {/* <View style={styles.container}>
      <Text style={styles.title}>Hello GoStack</Text>
      <ScrollView>
        {projects.map(project=>(<Text key={project.id} style={styles.project}>{project.title}</Text>))}
      </ScrollView>
    </View> */}
  </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  project: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,

  },
});