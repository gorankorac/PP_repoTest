// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.


function createO(a,b,c,d,f,n) {

  return {

    description: a,
    progrLanguage: b,
    gitRepo: c,
    name: n,
    projectName: function () {
      return 'Name of the project is ' + this.name;
    },
    checkJS: function () {

        if (d === 'JS') {
           console.log('Yes JS is a primary language');
      } else {
           console.log('No it is not a primary language');
      }
       
    },
    checkDev: function () {

      if (f === 'inProcess') {
        console.log('Project is underdevolepment');
      } else {
        console.log('Project is finnished');
      }
    
    }
  }
   }

   var k = createO('Todolist', 'JavaScript', 'Git_pp', 'JS', 'inProcess', 'Cyborg')
console.log(k);

k.checkJS()
k.checkDev()
var res=k.projectName()
k.projectName()
console.log(res);


var hero = {
  name: 'Superman',
  sayName: function () {
      return 'Hi I am ' + this.name;
  }
};
var res=hero.sayName();
hero.sayName();
console.log(res);


// Constructor Functions

function Hero() {
  this.occupation = 'Ninja';
}

var hero = new Hero();
hero.occupation;
// "Ninja"

function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function () {
      return "I'm " + this.name +
          " and I'm a " + this.occupation;
  };
}

var heroOne = new Hero('Michelangelo'); // Ako zaboravimo new operator izbacice undefined
var heroTwo = new Hero('Donatello');

heroOne.whoAreYou();
var s = heroOne.whoAreYou();
console.log(s);
// "I'm Michelangelo and I'm a Ninja"

heroTwo.whoAreYou();
//"I'm Donatello and I'm a Ninja"

function Hero(name) {
  this.name = name;
}

var hero = Hero('Leonardo');
typeof hero; // "undefined"

typeof hero.name;
// TypeError: Cannot read property 'name' of undefined

name; // "Leonardo"

window.name; // "Leonardo"


// 4.	Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// ○	Add a method that prints out all the ingredients necessary for the meal preparation. 
// ○	Add a method that checks if a meal can be prepared in under 15 minutes. 
// ○	Add a method that changes the type of cuisine to the given value. 
// ○	Add a method that delete a given ingredient from the list of ingredients.  

function creO() {

  var obj = {

    name: 'pizza',
    cuisine: 'italian kitchen',
    complexity: 5,
    ingredient: ['flour', 'ketchup', 'hum', 'tomato', 'cheese'],
    time: 12,
    instruction: 'bake between 12 and 14min',

    printIngredient: function(){
      console.log(obj.ingredient);
       },

    checkMeal: function() {

      this.time<15 ? console.log('Yeah we are having pizza on time!') : console.log('No, there is not time left for delicous pizza');
        
      },

    chCuisine: function () {

      this.cuisine = 'French kitchen'

    },

      delIngred: function() {
        var y=[];
          for (var i=0; i<this.ingredient.length; i++) {
            if (this.ingredient[i]==='tomato') {
              continue;
            }
            y[y.length]=this.ingredient[i]
          }
            this.ingredient=y
      }
    
    }

    return obj

  }
  var q = creO();
  console.log(q);

  q.checkMeal();

  q.delIngred();

  q.printIngredient();

  console.log(q);






