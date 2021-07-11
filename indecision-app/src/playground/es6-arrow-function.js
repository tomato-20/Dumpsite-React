/** ARROW FUNCTION EXAMPLES -- PART 1 **/
// const square = function (x)
// {
//     return x*x;
// }
// console.log(square(4));

// const squareArrow = (x) => x*x;
// console.log(squareArrow(4));

// const getFirstName = function(fullName){
//     return fullName.split(' ')[0];
// }
// console.log(getFirstName('Andrew Smith'));

// const getFirstNameArrow = (fullName) => fullName.split(' ')[0];
// console.log(getFirstNameArrow('Andrew Smith'));



/** ARROW FUNCTION EXAMPLES -- PART 2 **/

// 1.argument object no longer bound with arrow function

const add = function(a,b) {
    // console.log(arguments);
    return a+b;
}
console.log(add(1,101));

/* Throws error: arguments is not defined
const addArr =(a,b) => {
    console.log(arguments);
    return a+b;
}
console.log(addArr(1,101));
*/

// 2. this keyword no longer bounds
const user = {
    name : 'john',
    cities: ['NW','LA','Florida'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`)
    }
}

/* new syntax here: 
    printPlacesLived() {
         this.cities.forEach((value)=>console.log(this.name + ' has lived in '+ value))
    }
*/

/*
 * this does not bound with normal function
 * so use arrow function
 * turnaround : that = this;
    printPlacesLived: function() { 
        console.log(this.name);
        //this.cities.forEach(function(value){console.log(this.name + ' has lived in '+ value)})
        this.cities.forEach((value)=>console.log(this.name + ' has lived in '+ value))
    }
*/

/*
 * However cannot do this:
 * here arrow function will bind to the parent function function which calls this function
    printPlacesLived: () => {
        console.log(this.name);
        this.cities.forEach((value)=>console.log(this.name + ' has lived in '+ value))
    }
*/


console.log(user.printPlacesLived());

// MORE EXAMPLE

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map((number)=> number * this.multiplyBy)
    }
}

console.log(multiplier.multiply());