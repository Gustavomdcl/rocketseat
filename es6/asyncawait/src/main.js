//AXIOS
import axios from 'axios';
//IMPORT
import soma, {sub as subFunction, sadness} from './funcoes';
import multi from './matematica';
import * as funcoes from './sapo';
console.log(soma(1,2));
console.log(subFunction(1,2));
console.log(multi(10,2));
console.log(sadness());
console.log(funcoes.sapoide());
console.log(funcoes.sapogre());
console.log(funcoes.salompas());
//CLASS ===
if(false) {
  class List {
    constructor(){
      this.data = [];
    }
    add(data){
      this.data.push(data);
      console.log(this.data);
    }
  }

  class TodoList extends List {
    constructor(){
      super();
      this.usuario = 'Gustavo';
    }
    mostraUsuario(){
      console.log(this.usuario);
    }
  }

  const MinhaLista = new TodoList();

  const button = document.createElement("button");
  var textElement = document.createTextNode("Adicionar");
  button.appendChild(textElement);
  var containerElement = document.querySelector("body");
  containerElement.appendChild(button);
  button.addEventListener('click',function(){
    MinhaLista.add('Novo todo');
  });

  MinhaLista.mostraUsuario();

  class Matematica {
    static soma(a,b){
      return a + b;
    }
  }

  console.log(Matematica.soma(1,2));
}
//ARRAY
if(false) {
  const arr = [1, 3, 4, 5, 8, 9];

  const arrMap = arr.map(function(item,index){
    return (item * 2) + ' ' + index;
  });
  console.log(arrMap);

  const arrReduce = arr.reduce(function(total,next){
    return total + ' + ' + next;
  });
  console.log(arrReduce);

  const arrFilter = arr.filter(function(item){
    return item % 2 === 0;//Verifica se o número é par, divisível por 2 o resto é 0
  });
  console.log(arrFilter);

  const arrFind = arr.find(function(item){
    return item === 4;
  });
  console.log(arrFind);
}
//OBJECT
if(false){
  const usuario = {
    nome: 'Gustavo',
    idade: 27,
    endereco: {
      cidade: 'São Paulo',
      estado: 'SP'
    },
  }
  const {nome, idade, endereco: {cidade} } = usuario;
  console.log(nome,idade,cidade);
}
//REST
if(false){
  const usuario = {
    nome: 'Gustavo',
    idade: 27,
    empresa: 'Webnauta',
  }
  var {nome, ...rest } = usuario;
  console.log(nome,rest);

  const arr = [1,2,3,4];
  const [a,b,...c] = arr;
  console.log(a,b,c);

  function soma(a,b){
    return a+b;
  }
  console.log(soma(1,3));

  function somaREST( a, b, ...params){
    console.log(params);
    return params.reduce((total,next)=>total+next);
  }
  console.log(somaREST(1,3,4,5,6));
}
//SPREAD
if(false){
  const arr1 = [1,2,3];
  const arr2 = [4,5,6];
  const arrSPREAD = [...arr1,...arr2];
  console.log(arrSPREAD);

  const user1 = {
    nome: 'Gustavo',
    idade: 27,
    empresa: 'Webnauta',
  }
  const user2 = {...user1,nome:'Isabella'};
  console.log(user1,user2);
}
//ASYNC AWAIT
if(false){
  const minhaPromise = () => new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve('OK')},2000);
  });
  function sapo(){
    setTimeout(()=>{console.log('OK')},2000);
  }
  async function executaPromise(){
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    await sapo();
    await sapo();
    await sapo();
  }
  executaPromise();
}
//AXIOS
if(true){
  class Api {
    static async getUserInfo(username){
      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response);
      } catch(err){
        console.log('Erro na API');
      }
    }
  }
  Api.getUserInfo('gustavomdcl');
  Api.getUserInfo('diego3g');
  Api.getUserInfo('gustavomdclBEBEBE');
}