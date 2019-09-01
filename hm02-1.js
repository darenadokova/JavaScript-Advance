"use strict";

// IIFE - вариант 1


//A: декларация на клас

const hero = (function(){
    //Private
    //private data
    let heroName;
    let movie;
    let level;

    //private methods
    function show(){
        console.log(`Name:${heroName} Movie:${movie}  level:${level}`);
    }

    function winner(hname,movname, newlevel){
        heroName = hname;
        movie = movname;
        level = newlevel;
    }


    //Public
    return { 
        show,
        setNames:winner,
        level: 10,
        isWinner: function(){
            return heroName !== undefined && movie !== undefined && level !== undefined; 
        }
    };

})();

//B:създаване на обект
hero.setNames('Batman','Dark Knight',10);

if( hero.isWinner()){
    hero.show();
}



