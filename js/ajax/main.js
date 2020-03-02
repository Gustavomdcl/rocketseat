var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/gustavomdcl');
xhr.send(null);

xhr.onreadystatechange = function(){
  if(xhr.readyState===4){// Retornou corretamente.
    console.log(JSON.parse(xhr.responseText));
  }
}