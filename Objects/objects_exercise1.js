// 1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffe = {

    coffename: 'ness',
    strength: 'strong',
    flavour: 'classic',
    milk: 'Yes',
    sugar: 'Yes',

}

// 2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var favoriteMovie = {

    title: "One Flew Over the Cuckoo's Nest"
    actors: 'Jack Nicholson' 'Louise Fletcher' 'Michael Berryman',
    director: 'Milos Forman',
    genre: 'Drama',
    popularity: '8.7 according to IMDB'

}

// 3.	Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.


function createO(a,b,c,d,f) {

  return {

    description: a,
    progrLanguage: b,
    gitRepo: c,
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

//   m.checkJS()
// m.checkDev()
  
}

var k = createO('Todolist', 'JavaScript', 'Git_pp', 'JS', 'inProcess')
console.log(k);

k.checkJS()
k.checkDev()


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


















