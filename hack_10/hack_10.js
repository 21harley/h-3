/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
function capital(name){
    return name.slice(0,1).toUpperCase()+name.slice(1,name.length);
}
let result=Object.assign({},foo);
result.name=capital(result.name);
result.roles=[result.roles[0].toUpperCase(),roleSuperUser,roleUser];
skills=skills.map((el)=>{
    return capital(el);
});
result.skills=[
        skills[0],skills[1],capital(result.skills[0]),
        result.skills[1].toUpperCase(),result.skills[2].toUpperCase(),
        skills[2],
        capital(result.skills[3]),
        capital(result.skills[4]),
        capital(result.skills[5]),
        capital(result.skills[6]),
        skills[3]
]
delete result.alias;
result.levels=levels.map((el)=>{
    let aux=el["LEVEL"].replace('-','');
    aux=aux[0].toUpperCase()+aux[1];
    return {'LEVEL':aux};
})
console.log(result);
//export result
module.exports = result; 