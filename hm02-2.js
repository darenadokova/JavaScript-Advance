"use strict";

// IIFE  - вариант 2

//A: декларация на клас

const Hero = (function(){
    //PRIVATE
    //private data
    let heroName;
    let heroLevel;

    //private methods
    function show(){
        console.log(`Hero:${heroName} Level:${heroLevel}`);
    }

    function winner(hname,hlevel){
        heroName = hname;
        heroLevel = hlevel;
    }

    //PUBLIC
    return function(hname,hlevel){ //Вместо обект връща функция
            winner(hname,hlevel);

            this.print = show;
            this.setNames = winner;

            this.isWinner = function(){
                return heroName !== undefined && heroLevel !== undefined;
            }
            console.log('New Hero');

    };

})();

//B: Създаване на обект
const batman = new Hero('Batman', 10);
batman.print();

const ariel = new Hero('Ariel', 20);

if( ariel.isWinner()){
    ariel.print();
}

const Robin = new Hero();

if( !Robin.isWinner()){
    Robin.setNames('Robin', 30);
}


Robin.print();

