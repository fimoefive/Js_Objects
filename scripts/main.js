/* 
Create an object that defines you to someone you're meeting for the first time. What properties describe you? Name? Hair color? Myers-Briggs personality?

After you create the JS object version of you, make one for someone else you know using the same keys, but values unique to them.

Bonus: Make one of the properties an action you can take, ie a method.
*/

const me = {
firstName: "Martin",
lastName: "Sisk",
age: 34,
hairColor: "brown",
Myers_Briggs: "ENFJ-A",
fullName: function() {
    return me.firstName + " " + me.lastName;
    }
};

const person = {
firstName: "Whitney",
lastName: "Adair",
age: 29,
hairColor: "brown",
Myers_Briggs: "INFJ",

fullName: function() {
    return this.firstName + " " + this.lastName;
    }
};

let fullName = me.fullName();
console.log(fullName);

let name2 = person.fullName();
console.log(name2);

console.log(`Howdy, my name is ${me.firstName} ${me.lastName} and I am ${me.age}. I have ${me.hairColor} and my personality is ${me.Myers_Briggs}.`);

console.log(`My name is ${person.firstName} ${person.lastName} and I am ${person.age}. I have ${person.hairColor} and my personality is ${person.Myers_Briggs}.`)

