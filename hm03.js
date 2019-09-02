"use strict"


//A: декларация на клас

function Hero(){
    this.show = function(){
        console.log(`Hero:${this.heroName} ${this.movie}`);
    }
}

Object.defineProperty(Hero.prototype, 'heroName', { 
    set: function(name){ 
        console.log('Hero Name - define setter');
        this.__hname = name; 
    },
    get:function(){
        console.log('Hero Name - define getter');
        return this.__hname;
    }
});


const robin = new Hero();

robin.heroName = 'Robin';
robin.movie = 'Robin and Batman - Dark Knight';


const batman = new Hero();
batman.heroName = 'Batman';
batman.movie = 'Batman Movie';

console.log(`Hero:${batman.heroName} Movie:${batman.movie} `)
console.log(`Hero:${robin.heroName} Movie:${robin.movie}`); 
console.log(`Hero:${robin.__hname}`); 

//Въпрос 1: В този случай се появяват два пъти getter and setter, каква е причината? Може би, защото имаме дефинирани двама герои?