/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

for(let i=0;i<arr.length;i+=2){
    for (const key in arr[i]) {
        result.push(arr[i][key]); break;
    }
}
 
//export result
module.exports = result; 