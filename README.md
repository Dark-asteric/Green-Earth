---
#### 7) Create a README file to answer the following question-


#### i) What is the difference between var, let, and const?
 -  var (Function Scope): Variables declared with var are available throughout the entire function they are defined in. If defined outside a function, they become global.

 let & const (Block Scope): These are restricted to the "block" (anything inside { }) where they are defined, such as an if statement or a for loop.

 - var: JavaScript moves the declaration to the top of its scope. We can actually reference a var before it's declared in the code without a crash, though it will return undefined.

let & const: These are also hoisted, but they are not initialized. They enter a "Temporal Dead Zone," and trying to use them before their declaration line will result in a ReferenceError.

#### ii) What is the difference between map(), forEach(), and filter()? 
 - map() when you want to change every item in an array into something else. It takes an existing array and "maps" each value to a new value, creating a brand-new array.

 - forEach() as a cleaner way to write a standard for loop. We can use it when we want to perform an action for every item.

 - filter() when we want to screen out certain items. We provide a condition , and if an element passes that test, it gets pushed into the new array.

#### iii) What are arrow functions in ES6?
 - An Arrow Function is a more concise syntax for writing function expressions in JavaScript, introduced in ES6. It uses the "fat arrow" (=>) and differs from traditional functions by not having its own this, arguments, or super bindings.

#### iv) How does destructuring assignment work in ES6?
 - In JavaScript, destructuring assignment is a special syntax that allows you to "unpack" values from arrays or properties from objects into distinct variables. It makes your code cleaner by reducing the need for repetitive dot notation or bracket indexing.

#### v) Explain template literals in ES6. How are they different from string concatenation? 
 - Template literals are a modern way to create strings in JavaScript, introduced in ES6. They are defined using backticks (`) instead of the traditional single (') or double (") quotes. They allow you to create "dynamic" strings more easily through a process called string interpolation. We can put any valid JavaScript expression inside ${}, including math or function calls. With traditional strings, need to use \n to create a new line. With template literals, simply press "Enter" inside the backticks.
