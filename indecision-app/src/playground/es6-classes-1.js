class Person {
    constructor(name= 'Anonymous',age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return `Hi I am ${this.name}.`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name,age,major=undefined){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    //override the gerDescription() method of the parent class
    getDescription(){
        let description = super.getDescription();
        return this.hasMajor() ? `${description} Their major is ${this.major}.` : description;
    }
}

class Traveler extends Person{
    constructor(name='Anonymous',age,homeLocation=undefined)
    {
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasLocation()
    {
        return !!this.homeLocation;
    }
    getDescription(){
        let description = super.getGreeting();
        if(this.hasLocation()) {
            description+= `I am visiting from ${this.homeLocation}`;
        }
        return description;
    }
}

const me = new Student('Kirtee',13,'CS');
console.log(me.getDescription());


const other = new Student('Andrew');
console.log(other.getDescription());

const travererOne = new Traveler('Andrew Mead',28,'La')
console.log(travererOne.getDescription());

const travererTwo = new Traveler('Andrew Mead');
console.log(travererTwo.getDescription());