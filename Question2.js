"use strict";

// създаване само на един обект с IIFE - Singleton

//A: декларация на клас

const User = (function(){
    //PRIVATE
    //private data
    let firstName;
    let lastName;
    let email;

    //private methods
    function show(){
        console.log(`Name:${firstName} ${lastName}  Email:${email}`);
    }

    function register(fname,lname, newEmail){ 
        firstName = fname;
        lastName = lname;
        email = newEmail;
    }


   
    return { 
        show,
        setNames:register,
        mail:'john@no.com',
        isRegistered: function(){
            return firstName !== undefined && lastName !== undefined && email !== undefined; 
        }
    };

})();

//B:създаване на обект
User.setNames('John','Doe','new@email.com');

if( User.isRegistered()){
    //User.print();
    User.show();
}



//Въпрос: Защо правим тази функция и декларираме -> firstName = fname; и къде използваме fname i lname?
//Може ли да задаваме нов email-a и ако да, начинът е както при  firstName = fname; и lastName = lname; ли?
