import {Request,Response} from 'express';

import createUser from './services/CreateUser';
import createProject from './services/CreateProject';

// https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36

export function helloWorld(request:Request,response:Response){
  const user = createUser('Gustavo','gustavomdcl@gmail.com.br','123456');
  const project = createProject({
    name: 'Gustavo',
    email: 'gustavomdcl@gmail.com.br',
    password: '123456',
    techs: [
      'ReactJS',
      'TypeScript',
      {title:'Javascript',experience:100},
    ],
    contact: [
      'dungus',
    ],
  });
  return response.json({message: 'Hello World'});
}