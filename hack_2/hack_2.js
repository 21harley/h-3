/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

for(let i=1;i+1<arr.length;i++){
    for (const key in arr[i]) {
        result.push(arr[i][key]); break;
    }
}
 
//export result
module.exports = result;