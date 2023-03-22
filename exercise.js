// Object Destructuring 1:
//What does the following code return/print?

// 8
// 1846


// Object Destructuring 2:
// What does the following code return/print?

// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}


// Object Destructuring 3:
// What does the following code return/print?

// "Your name is Alejandro, and you like purple"
// "Your name is Melissa, and you like green"
// "Your name is undefined, and you like green"


//Array Destructuring 1
// What does the following code return/print?

// Maya
// Marisa
// Chi


// Array Destructuring 2
// What does the following code return/print?

// "Raindrops on roses"
// "Whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]


// Array Destructuring 3
// What does the following code return/print?

// [10, 30, 20]



// ES5 Object Destructuring
// Write an ES2015 Version

var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};

const { a, b } = obj.numbers;


// ES5 Array Swap
// Write an ES2015 Version

var arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];


// raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest })

