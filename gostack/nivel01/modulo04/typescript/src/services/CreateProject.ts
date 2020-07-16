/**
 * name?: string // `opcional`
 * name: string // `obrigatório`
 * 
 * types: string, number, boolean, object, Array
 * Array<formato> // `quando tem vários valores`
 * string[] // `quando tem um valor`
 */

 // https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36

interface TechObject {
  title: string;
  experience: number;
}

interface CreateProjectData {
  name?: string;
  email: string | boolean;
  password: string;
  techs: Array<string|TechObject>;
  contact: string[]; 
}

export default function createProject({name='',email,password,techs,contact}:CreateProjectData){
  const project = {
    name,
    email,
    password,
    techs,
    contact,
  };
  
  return project;
}