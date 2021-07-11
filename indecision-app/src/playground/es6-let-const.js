var  nameVar = 'Andrew';
var  nameVar = 'Andrew';
console.log('namevar',nameVar);

let  nameLet = 'June';
/* Cannot redefine: 
let  nameLet = 'June';
*/
console.log('nameLet',nameLet);

const  nameConst = 'Liee';
/* Cannot redefine
    cannot reassign
nameConst = "Jake";
*/
console.log('nameConst',nameConst);

// Block-scoping
const fullName = 'Andrew Smith';

if(fullName)
{
    var firstName = fullName.split(' ')[0];
    //let firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
