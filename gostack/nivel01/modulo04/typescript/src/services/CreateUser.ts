/**
 * Para criar: name, email, password
 * 
 * types: string, number, boolean, object, Array
 */

 // https://www.notion.so/Typescript-5712aeab312d44fcba0aa88895caad36

export default function createUser(name='',email:string,password:string){
  const user = {
    name,
    email,
    password
  };
  
  return user;
}