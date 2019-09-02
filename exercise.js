"use strict"


//A: декларация на клас

class User{
    //Инициализира данните класа
    constructor(firstName, lastName){ 
        this._firstName = firstName;
        this._lastName  = lastName;
    }



    set firstName(firstName){
        this._firstName = firstName; 
    }

    get firstName(){
        return this._firstName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get lastName(){
        return this._lastName;
    }

    show(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
}

class Admin extends User{
    constructor(firstName,lastName,admin){
        //извикване конструктора на прекия родител
        super(firstName,lastName);
        this.isAdmin = admin;
    }
}

class Age extends User{
    constructor(firstName,lastName,age){
        super(firstName,lastName); //Винаги започваме със super
        this.age = age ;
    }
}


const user = new User('Anna', 'Smith'); //Създаване на обекта 
user.firstName = 'Maria'; //Обръщение към сет метода

user.show();

console.log(typeof User);


const admin = new Admin('John','Doe',true);

admin.show();
console.log(`User: ${admin.firstName} is admin: ${admin.isAdmin}`);


//NEW - AGE
const newAge = new Age('John', 'Andersen', 20);

newAge.show();
console.log(`User: ${newAge.firstName} User's age: ${newAge.age}`);