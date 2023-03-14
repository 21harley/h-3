/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};
result.name=result.name.slice(0,1).toUpperCase()+result.name.slice(1,result.name.length);
result.role=result.role.toUpperCase();
 
//export result
module.exports = result; 
