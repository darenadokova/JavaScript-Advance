"use strict"

//A: декларация на клас

function User(){
    this.show = function(){
        console.log(`User:${this.firstName} ${this.lastName}`);
    }
}

Object.defineProperty(User.prototype, 'firstName', {
    set: function(name){
        console.log('first name setter');
        this.__fname = name;
    },
    get:function(){
        console.log('first name getter');
        return this.__fname;
    }
});

Object.defineProperties(User.prototype, {
    'age': {
        set: function(a){
             this.a = a;
        }
        , 
        get: function(){
             return this.a;
        }

    },
    'code':{
        value: 'abcd',
        writable:true
    }
});

const maria = new User();

maria.firstName = 'Maria';
maria.age = 20;
console.log(`User:${maria.firstName}`);
console.log(`User:${maria.__fname}`);
console.log(`User:${maria.age}`);
maria.code = 'zzzz';
console.log(`User:${maria.code}`);
