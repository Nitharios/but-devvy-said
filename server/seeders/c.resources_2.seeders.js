'use strict';

//TOTAL = 21
//contains topic_id 16 - 35
//want to randomize date..

module.exports = {

  up : (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('resources', [

      {
        name : 'Corey',
        cohort : 14,
        title : 'What is Big O Notation?',
        tags : ['algorithm', 'efficiency', 'sorting'],
        note : 'Big O Notation is used to describe performance or complexity of an algorithm. It specifically describes the worst case scenario. It can be used to describe the execution time required or the space used. ',
        example : ``,
        link : 'http://bit.ly/1LdV93M',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 16 //'big o notation'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is O(2n) in Big O Notation?',
        tags : ['algorithm', 'computer science', 'recursion'],
        note : 'An O(2n) algorithm is one whose growth doubles with each addition to the input data set. The growth curve of this algorithm is exponential, starting off shallow, then rising meteorically.',

        example : `int Fibonacci(int number) 
{ 
    if (number <= 1) return number; 
    return Fibonacci(number -2) + Fibonacci(number - 1); 
}`,

        link : 'http://bit.ly/1LdV93M',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 16 //'big o notation'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : '',
        tags : ['function invocation', 'context', 'this'],
        note : 'Bind allows us to set our own context for a function. It returns a new function that we can then invoke ourselves. It is a very powerful tool.',

        example : `var user = { 
    data : [ 
        {name : "T.Woods", age : 37}, 
        {name : "P.Mickelson", age : 43} 
    ], 
    clickHandler : function(event) { 
        var randomNum = ((Math.random() * 2 | 0) + 1) - 1; //random number btwn 0 and 1 
        
        //This line adds a random person from data array to the text field 
        $("input").val(this.data[randomNum].name + " " + this.data[randomNum].age); 
    } 
}
 
    //Assign an eventHandler to the button's click event 
    $("button').click(user.clickHandler); `,

        link : ``,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 17 //'bind'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'Example usage of bind in Javascript',
        tags : ['context', 'advanced', 'this'],
        note : 'Bind creates a new function that will have this keyword set to the first parameter passed to bind().',

        example : `var Button = function(content) { 
    this.content = content; 
}; 
Button.prototype.click = function() { 
    console.log(this.content + ' clicked'); 
} 

var myButton = new Button('OK'); 
myButton.click(); 
 
var looseClick = myButton.click; 
looseClick(); //this is not bound, 'this' is not myButton - it is the global obj 

var boundClick = myButton.click.bind(myButton); 
boundClick(); //bound, 'this' is myButton`,

        link : 'http://bit.ly/2k6yNiP', //SO
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 17 //'bind'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'How block-level scope can go wrong.',
        tags : ['scope', 'block level scope', 'variable', 'let'],
        note : `Variable scoping can be something that trips up a developer. The problem is that many expect variables to be scoped to a particular block, like a for loop. However, variables declared with 'var' are scoped to the nearest parent function.`,

        example : `//this is an example of how block-level scope can go wrong. 
var avatar = "Ang"; 
var element = "Air"; 
 
var elements = [ 
    "Air", 
    "Earth", 
    "Fire", 
    "Water" 
]; 
 
for (var i = 0; i < elements.length; i++) { 
    var element = elements[i]; 
    console.log(avatar + " has mastered " + element); 
} 

//Outputs : "Ang's primary element is Water" 
console.log(avatar + "'s primary element is " + element);`,

        link : ``,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 18 //'block level scope'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'Example of block level scope',
        tags : ['block level scope', 'function level scope', 'variable'],
        note : 'Block scopes are what you get when you use if statements, for loops, and the like. You can also use them with simple begin and end curly braces.',

        example : `var a = {} // empty object literal 
{ var a } //this is an undefined object in a block level scope 

if ( 3 == '3') { 
    //this is the block level scope for the if statement 
} 

for (var i = 0; i < 10; i++) { 
    //this is the block level scope for the for loop 
}`,

        link : 'http://bit.ly/2BvAryK',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 18 //'block level scope'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'How to use body parser in expressjs',
        tags : ['middleware', 'body parser', 'express'],
        note : 'Body parser is a middleware that express uses. It saves you a ton of work from having to manually tinker with the request and response objects. It gives you easy access to req.body. You supply body parser as an argument the express app.use().',

        example : `app.use(bodyParser.json()); // for parsing application/json 
app.use(bodyParser.urlencoded({ extended: true })); // for parsing 
application/x-www-form-urlencoded 
app.use(multer()); // for parsing multipart/form-data `,

        link : null,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 19 //'body parser'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'Why do we use body parser?',
        tags : ['request', 'http', 'body parser', 'express'],
        note : 'Body parser will extract the body portion of an incoming request and expose it on req.body. It becomes a lot easier to work with the data in the body of a long and complicated request object.',
        example : ``,
        link : 'http://bit.ly/2BxQTyH',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 19 //'body parser'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How is a boolean useful?',
        tags : ['boolean', 'data type', 'variable'],
        note : 'A boolean represents exactly one of two values: true or false. Sometimes, you will run into a situation where you need to represent yes/no, on/off, or true/false. These are when you should booleans.',
        example : null,
        link : 'http://bit.ly/2AH9lI1',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 20 //'boolean'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'Difference between boolean object and boolean primitive',
        tags : ['primitive', 'new', 'object', 'boolean'],
        note : 'An object of which the value is not undefined or null, including a Boolean object whose value is false will actually evaluate to true when passed to a conditional.',

        example : `var x = new Boolean(false); 
if (x) { 
    //this code will execute. 
} 

var x = false; 
if (x) { 
    //this code will NOT execute. 
}`,

        link : 'https://mzl.la/1zgVz8P', //MDN
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 20 //'boolean'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is a branch in GIT?',
        tags : ['git terminal', 'branch', 'github'],
        note : 'A branch is a tool integrated in GIT that allows anyone to work away from the main line of development. In our workflow, we use a branch for every feature we are working on. It also important to communicate in a team what you are working on.',
        example : null,
        link : 'http://bit.ly/2k7WGGJ', //GCM
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 21 //'branch'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How do I create a branch in GitHub?',
        tags : ['github', 'branch', 'workflow'],
        note : `A branch is like a sticky note, or pointer that is pointing to a commit. It is very lightweight. You add a new branch with the 'git checkout -b your_branch' command.`,

        example : `git checkout -b your_branch 
git push -u origin your_branch 
//show all branches 
git branch`,

        link : 'http://bit.ly/2wZqIRj',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 21 //'branch'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'How can you use the break keyword?',
        tags : ['keyword', 'break', 'continue', 'label'],
        note : 'You can use the break keyword in a non-conditional as long as you provide a',
        example : '',
        link : 'https://mzl.la/1zi77Gd', //MDN
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 22 //'break'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'When to use the break keyword',
        tags : ['break', 'loops', 'keyword'],
        note : 'You can use the break keyword to jump out of a for loop, as well as a switch statement. A for loop is much more common than a switch statement, and I find break much more useful in this situation.',

        example : `for (i = 0; i < 10; i++) { 
    if (i === 3) { break; } 
    text += "The number is " + i + "<br>"; 
}`,

        link : 'https://www.w3schools.com/js/js_break.asp', //W3 schools
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 22 //'break'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'What kind of algorithm is bubble sort?',
        tags : ['algorithm', 'sorting', 'efficiency', 'bubble sort'],
        note : 'Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order. The complexity of bubble sort is O(n2), because the entire array needs to be iterated for every element.',

        example : `void bubble_sort( int A[ ], int n ) { 
    int temp; 
    for(int k = 0; k< n-1; k++) { 
        // (n-k-1) is for ignoring comparisons of elements which have already been compared in earlier iterations 
        for(int i = 0; i < n-k-1; i++) { 
            if(A[ i ] > A[ i+1] ) { 
                // here swapping of positions is being done. 
                temp = A[ i ]; 
                A[ i ] = A[ i+1 ]; 
                A[ i + 1] = temp; 
            } 
        } 
    } 
}`,

        link : 'http://bit.ly/2yQg6Wx', //Geeks4Geeks
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 23 //'bubble sort'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'A working example of bubble sort.',
        tags : ['bubble sort', 'sorting', 'computer science', 'big o notation'],
        note : 'Bubble sort is an algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. It is typically not suitable for large data sets.',

        example : ``,

        link : 'http://bit.ly/2k2kzxY',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 23 //'bubble sort'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'What is the call() method?',
        tags : ['context', 'apply', 'bind', 'call'],
        note : 'Call will invoke a function with the context that you supply yourself. It is slightly different from apply() in that it expects all parameters to be passed individually and not as an array.',

        example : 
`var pokemon = { 
    firstName : 'Pika',
    lastName : 'Chu ',
    getPokeName : function() { 
        var fullname = this.firstname + ' ' + this.lastname; 
        return fullname; 
    } 
}; 

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms`,

        link : 'http://bit.ly/2nebTqS',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 24 //'call'
      },
      {
        name : 'Jessica',
        cohort : 15,
        title : 'How to use the call() method to invoke a function.',
        tags : ['function invocation', 'context', 'call'],
        note : 'The call() method calls a function with a given this value and arguments provided individually. We call, or invoke, a function a explicityly specify what the this keyword should reference within the calling function. Apply, bind, and call are functions that are built-in to Javascript.',

        example : null,

        link : 'http://bit.ly/2zQ3qQV',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 24 //'call'
      },
      {
        name : 'Corey',
        cohort : 14,
        title : 'what is a callback function?',
        tags : ['callback function', 'function', 'argument'],
        note : 'A callback function is a function passed as an argument into another function. It is executed after another function has finished executing.',

        example : 
`function greeting(name) { 
    alert('Hello ' + name); 
} 

function processUserInput(callback) { 
    var name = prompt('Please enter your name.'); 
    callback(name);
}

processUserInput(greeting);`,

        link : 'http://bit.ly/2ikmQFO',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 25 //'callback function'
      },
      {
        name : 'Jon',
        cohort : 19,
        title : 'An analogy for callback functions.',
        tags : ['function', 'analogy', 'example'],
        note : 'Imagine you are expecting a package in a couple of days. The package is a gift for your neighbor. Therefore, once you get the package, you want it brought over to the neighbors. You are out of town, and so you leave instructions for your spouse. The receiving of the package is like an event, and the instructions to bring the package to the neighbors is the callback.',

        example : ``,
        link : 'http://bit.ly/2BmwgEJ',
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 25 //'callback function'
      },
      {
        name : 'Nathan',
        cohort : 19,
        title : 'Examples of callback functions.',
        tags : ['function', 'callback function', 'higher-order function'],

        note : 'A callback function is a function passed to another function as a parameter. It is called or invoked inside that other function. It is often called when some event happens.',

        example : `function greeting(name) { 
alert('Hello ' + name); 
} 

function processUserInput(callback) { 
  var name = prompt('Please enter your name.'); 
  callback(name); 
}

processUserInput(greeting);`,

        link : 'http://bit.ly/1g8CNBy', //JSisSexy 'how to use CB functions'
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 25 //'callback function'
      },
      //MAYBE HAVE 26 - 30
      //DEMO CLOSURE!!!
      //DEMO CLOSURE!!!
      //DEMO CLOSURE!!!
      //DEMO CLOSURE!!!
      //DEMO CLOSURE!!!
      {
        name : 'Avinash',
        cohort : 15,
        title : 'What is a closure?',
        tags : ['closure', 'scope', 'private variable'],
        note : 'A closure is an inner function, or in other words, a function defined within a function that has access to the outer function variables, its own variables, as well as global variables.\n It is the Javascript way of enforcing public and private methods or variables.',

        example : `
var a = (function () { 
var privateFunction = function () { 
    alert('hello');
  }

  return {
    publicFunction : function() { 
      privateFunction();
    }
  };
})();`,

        link : `http://bit.ly/1cCr5w8`, //JSisSexy
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //closure DEMO
      },
      {
        name : 'Asil',
        cohort : 19,
        title : 'A real usage case of a closure.',
        tags : ['closure', 'return', 'function', 'private variable'],
        note : 'Understanding closures will make you a much better coder very quickly. It is a very powerful tool. Here is an example from class today.',

        example : `function outer() { 
  var counter = 0; 
  function inner() { 
    alert(counter); 
    counter++; 
  } 
  
  return inner;
}

var x = outer(); //x is a reference to inner 
x(); //alerts 0 
x(); //alerts 1 
x(); //alerts 2`,

        link : ``,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //'closure'
      },
      {
        name : 'Jennifer',
        cohort : 15,
        title : 'What is a closure?',
        tags : ['closures', 'variables', 'scope'],
        note : 'A closure is an inner function that has access the outer, or enclosing, function variables. It is the Javascript way of imitating private variables.',

        example : `var G = 'G'; 
// Define a function and create a closure 
function functionA() { 
    var A = 'A' 
    // Define a function and create a closure 
    function functionB() { 
        var B = 'B' 
        console.log(A, B, G); 
    } 

    functionB(); // prints A, B, G 

    // functionB closure does not get discarded 
    A = 42; 
    functionB(); // prints 42, B, G 
} 

functionA();`,

        link : ``,
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 31 //closure
      },
      {
        name : 'Mister',
        cohort : 11,
        title : 'What makes a good code editors?',
        tags : ['code editor', 'developer', 'syntax'],
        note : 'The most important part of a good editor is workflow and organization. Things should be easy to find and intuitive. It should also have good predictive ability, it should guess well as to what you are trying to do, what you tried to do, and what you will do. It should also do it behind the scenes.',

        example : null,

        link : 'http://bit.ly/2Bnlwpv', //Quora
        createdAt : new Date(),
        updatedAt : new Date(),
        topic_id : 32 //code editor
      }
      //END
      //TOTAL 21

    ], {});

  },

  down : (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('resources', null, {});

  }

};