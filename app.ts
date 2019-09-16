console.log("Hello TypeScript !")

//types
let myName = "Siva";  // It is a string type
// myName = 25 //Once you assigned a variable to string it will become str type and you cannot change it

let age = 29;  //Number type and you can reasign to float value also, It treats float also a number
let userStatus = true; //Assigning boolean value

//We can also defne variable and assign it later, But if we don't say the type while defining it will be the type of
//"any" which means it will accept any type while reassigning also
let myPlace;
myPlace = "Ravipadu";
myPlace = 112233; //It won't give any error here

//But if we want to say explicitly of which type it should be then
let myPin : number;
myPin = 112233
// myPin = "Ravipadu"  //This can't be done
//We can also assign in the following way
let street : string =  "Road no 2"

//Arrays
let hobbies = ['Gymmiing', 'Cooking']
console.log(hobbies[0])

//And we can create of any type to accept the anytype in array elements
let languages : any[] = ['Python', 'TypeScript']
console.log(languages[0])

//tuples
let userDetails: [string, number] = ['Siva', 28]

//enums

enum Colors {
    Red,
    Green,
    Blue
}
console.log(Colors.Green)

function returnMyname() {
    return myName
}
console.log(returnMyname())

//We can also define functions with return type
function returnAge() : number {
    return age
}

//Define a function with returns nothing
function returnNothing() : void {
    console.log("I return Nothing..!")
}

//Argument types
function multiply(val1: any, val2: any): number {
    return val1*val2 //This will return NaN
}

console.log(multiply(2, 'Siva'))

//We can overcome the above issue by specifing the types for the args
function multiplyO(val1: number, val2: number): number {
    return val1*val2
}

console.log(multiply(4,5))

//Function types
//We can also create variable to holds function types
// let myMultiply //This will work.But if you difind in this way it will accept any function irrespective of args and it's types
//So we can defind in the below way to make it specific to one function 
let myMultiply : (value1: number, value2: number) => number;
myMultiply = multiply
console.log(myMultiply(2,20))

//Objects
let myObject: {name: string, age: number} = {
    name: 'Siva',
    age: 29
};

console.log(myObject.age)