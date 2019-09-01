"use strict"
//Това е първият вариант с функция


//A: декларация на клас
function Hero(hname = '', level=0){
  
    //1. данни на класа
    //private
    let heroName = upper(hname);
   
    //public
    this.level = level;

    //2. методи на класа (функция)
    //public method
    this.show = ()=>{
        console.log(`Hero ${heroName} level: ${this.level}`);
    };
    //private method
    function upper(text){
        return text.toUpperCase();
    }
}


//B:създаване на обект

const batman = new Hero('Batman', 50);
batman.show();
batman.isWinner = true;

console.log(`Batman is winner: ${batman.isWinner}`);


const robin = new Hero('Robin', 30);
robin.show();
robin.isWinner = false;
console.log(`Robin is winner: ${robin.isWinner}`);

