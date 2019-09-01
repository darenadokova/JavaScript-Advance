"use strict"
//literal object 




function printHero(hero){
    if( typeof hero.heroName === undefined){
        throw Error('Missing heroName, level');
    }
    console.log(`${hero.heroName} ${hero.level}`);
}
//A: декларация на клас


//B:създаване на обект

const batman = {
    heroName: 'Batman',
    level : 50,
    show: function(){
        console.log(`Hero: ${this.heroName} Level: ${this.level}`);
    }
};

batman.show();


const robin = Object.create(batman);
robin.heroName = 'Robin';
robin.level = 30;

robin.show();

batman.show();

printHero(robin);


printHero({heroName:'Ariel',level:'undefined'}); //Анонимен обект

