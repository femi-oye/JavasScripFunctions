//1). write a simple function that returns true if today is equal to the days_of_week and false if not

//you will have to call your function with an argument like this isToday(day)
//you are going to have to use the days_of_week array here. you can redeclare it

const days_of_the_week = [];
days_of_the_week.push ('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

function isToday(today) {
  for (let day of days_of_the_week) {
    if (today == day)
      console.log(true)
      else
      console.log(false)
  }
}

isToday('Saturday');

//2). setup an empty array called fruits.
//push several fruits into the array as long there are days of the week left.

const fruits = [];

function addFruits() {
    for (i = days_of_the_week.length - 1; i > -1; i--) {
      fruits.push('Apple ' + i);
    }
    if (i != -1)
      console.log(fruits)
  }

addFruits()

//setup another variable called favorite_fruit. check the fruits array to see if your favorite fruit is in it.
const favorite_fruit = [];
favorite_fruit.push ('Apple 5');

function checkFruits(fav){
  for (let fruit of fruits) {
    if (fav == fruit)
      console.log(true);
      else
      console.log(false)

 }
} 

 checkFruits('Apple 5')

 //log the position of your favorite fruit in the fruit array.

 let pos = fruits.indexOf('Apple 5');
 console.log('The position of my favorite fruit, Apple 5, is: ' + pos);


//You can do this Femi. We have gone over these principles. Take your time to go over. Hit me up if you have any questions.
