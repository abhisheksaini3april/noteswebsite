const content = {
    begginerguide: `<h1>JavaScript: A Beginner's Guide to Programming Magic</h1>
            <p>JavaScript is a versatile programming language commonly used in web development to enhance the user experiences on the internet. It is primarily utilised for implementing functionalities within our web applications. JavaScript is often hailed as a the "language of the web", is the most important part of modern web development.</p>
            <h2> Tracing the Evolution: A Concise History of JavaScript</h2>
            <p>
            Did you know that initially, JavaScript was developed in just 10 days? Yes, you heard it right. JavaScript was created by Brendan Eich, a programmer at a company called Netscape Communications. Originally, JavaScript was named 'Mocha', but it quickly gained popularity as 'LiveScript' and later evolved into 'JavaScript'.
            <br>
            <br>

Initially, JavaScript was designed solely to provide scripting capabilities aimed at enhancing web pages with dynamic content and interactivity. With the growth of HTML5 and CSS3, JavaScript's capabilities expanded further, enabling developers to construct sophisticated web applications and interactive user interfaces.
<br>
            <br>

Many JavaScript frameworks and libraries, such as AngularJS, ReactJS, and Vue.js, have revolutionized frontend development. Additionally, Node.js, a powerful JavaScript runtime environment, has empowered developers to build server-side applications using JavaScript.</p>
            

<h2>JavaScript : A Programming Language or a Scripting Language?</h2>
<p>
While studying JavaScript a common question arises : Is JavaScript a scripting language or it is a programming language?.
<br>
<br>

The tech community often debates whether JavaScript should be classified as scripting language or programming language. To grasp this debate lets understand the distinction between scripting languages and a programming languages.
</p>

<h3>
Scripting Languages</h3>
<p>
Scripting languages are those languages which are interpreted rather than compiled, meaning they are executed line-by-line by the interpreter at the runtime thus allowing for quicker development cycles and easier debugging.
<br>
<br>

Scripting languages are commonly used for tasks such as system administration, web development, text processing and automation.
<br>
<br>

JavaScript is widely used for client-side scripting in web browsers, it has became a versatile language for web development including front-end and server side scripting with platforms like Node.js. Scripting languages are interpreted within a host environment; for instance, JavaScript needs to be integrated into HTML and then interpreted by the web browser.
</p>

<h3>
Programming Languages</h3>

<p>
Programming languages are compiled languages, which means the source code is compiled to convert it to machine code.
<br>
<br>

A programming language is a computer language which is used to communicate with computers using a set of instructions. Programming languages utilize compilers and do not rely on interpretation by another language or application.
</p>
<h3>
Conclusion
</h3>
<p>
All the scripting languages are programming languages. Technically, JavaScript falls under both categories. It shares traits of scripting languages but also possesses the capabilities of many general-purpose programming languages. At the end we can say that JavaScript is both a scripting language and a light-weight programming language, that can be used for a wide range of tasks, from simple automation to complex application development.
</p>
<h2>JavaScript : Is it a Client-Side or Server-Side Language?</h2>
<p>
For years, JavaScript has been predominantly associated with client-side scripting, breathing life into web pages and making them interactive.
<br>
<br>

JavaScript's roots lie firmly in the client-side realm. It's the language that adds the sparkle to your web experience, making elements appear and disappear, reacting to your clicks and scrolls, and seamlessly handling forms and animations.
<br>
<br>

But in recent times, its dominion has expanded, blurring the lines between front-end and back-end.
<br>
<br>

In recent years, JavaScript has also gained prominence as a server-side language, thanks to the introduction of Node.js. Node.js is an open-source, JavaScript runtime environment that allows developers to run JavaScript code server-side. With Node.js, JavaScript can be used to build scalable, high-performance web applications, APIs, and backend services.
<br>
<br>

Hence, as the technology evolved and the new trends emerged, JavaScript excelled in both client-side interactivity and server-side logic. To call it simply "client-side" or "server-side" would be like calling water simply "wet" – it misses the clarity and versatility that truly define it.</p>

<h2>
JavaScript Engines for Executing JavaScript Code
</h2>

<p>
A JavaScript engine is the software that takes our JavaScript code and translates it into instructions that your computer can understand. It is like a powerful interpreter.
<br>
<br>

Some of the most popular JS engines today are :
<br>
<br>

1 : V8 - Developed by Google, V8 is one of the most widely used JavaScript engines. It powers the JavaScript execution in Google Chrome and Node.js.
<br>
<br>

2 : SpiderMonkey - Developed by Mozilla Firefox, SpiderMonkey is the JavaScript engine used in the Firefox web browser. It was one of the first JavaScript engines ever created and is known for its performance and compliance with JavaScript standards.
<br>
<br>

3 : JavaScriptCore - Used in Safari, known for its tight integration with Apple devices.
<br>
<br>

4 : Chakra - Developed by Microsoft, Chakra was the JavaScript engine used in the Edge web browser. It has now been replaced by the Chromium-based Edge browser, which uses V8 as its JavaScript engine.
</p>`,
letvar:`    <h2>Let, Var & Const</h2>
    <p>Variable declaration is one of the easiest tasks in every programming language. However, when it comes to JavaScript, it can become a bit tricky due to the special features of the language. But don't worry, we've got you covered.</p>
    
    <h3>Did you know?</h3>
    <p><strong>let</strong> & <strong>const</strong> were introduced in 2015 as new features of JavaScript. Before that, <strong>var</strong> was the only way to declare a variable.</p>
    
    <h2>What is ECMAScript?</h2>
    <p>Have you ever heard someone referring to JavaScript as ES6 or ES7 and felt confused about it?</p>
    <p>Let me introduce you to another name for JavaScript, i.e., <strong>ECMAScript</strong>. Yes, you heard it right—the official name of JavaScript is ECMAScript.</p>
    
    <h3>JavaScript Versioning</h3>
    <p>JavaScript was created more than 25 years ago, and since then, it has undergone significant evolution. Numerous new features and syntax have been added over the years. ES6 (ECMAScript 2015) introduced major changes that modernized JavaScript.</p>
    
    <h2>Understanding <code>var</code></h2>
    <p>The <code>var</code> keyword was the traditional way of declaring variables in JavaScript. It is function-scoped or globally-scoped, but not block-scoped.</p>
    
    <h3>Example:</h3>
    <pre>
function example() {
    var x = 10;
    console.log(x); // Output: 10
}
example();
console.log(x); // Throws ReferenceError: x is not defined
    </pre>
    
    <h3>Reassignment & Redefinition:</h3>
    <pre>
var x = 10;
console.log(x); // Output: 10

x = "Mayank";
console.log(x); // Output: Mayank

var x = "Another value";
console.log(x); // Output: Another value
    </pre>
    
    <h2>Understanding <code>let</code></h2>
    <p>The <code>let</code> keyword is block-scoped, meaning it is only accessible within the block where it is defined.</p>
    
    <h3>Example:</h3>
    <pre>
let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined
    </pre>
    
    <h3>Reassignment & Redefinition:</h3>
    <pre>
let x = 10;
console.log(x); // Output: 10

x = "Mayank";
console.log(x); // Output: Mayank

let x = "Another value"; // Error: Identifier 'x' has already been declared
    </pre>
    
    <h2>Understanding <code>const</code></h2>
    <p>The <code>const</code> keyword is used to declare constants whose values cannot be reassigned after initialization.</p>
    
    <h3>Example:</h3>
    <pre>
const x = 20;
console.log(x); // Output: 20

x = 30; // Error: Assignment to constant variable.
    </pre>
    
    <h3>Const with Objects & Arrays:</h3>
    <pre>
const person = {
    name: 'Mayank',
    age: 21
};

console.log(person.name); // Output: Mayank

person.name = 'Love';
console.log(person.name); // Output: Love

person = {}; // Error: Assignment to constant variable.
    </pre>
    
    <pre>
const numbers = [1, 2, 3];
console.log(numbers); // Output: [1, 2, 3]

numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

numbers = []; // Error: Assignment to constant variable.
    </pre>
    
    <h2>Conclusion</h2>
    <p>Welcome to JavaScript! Understanding variable declaration is crucial for mastering JavaScript and improving your programming skills.</p>
    <p>Thanks for reading! See you in the next article.</p>`,

    scripting_vs_programming:`
    <h1>Variable/Function Naming Conventions</h1>
<p>
Variable naming is one of the most important parts of coding, yet it's often overlooked by many. While it doesn't directly impact a code's efficiency, it significantly enhances readability and code quality. Clear and meaningful variable names facilitate easier debugging and ultimately contribute to the overall improvement of code quality.
</p>

<h2>Types of Naming Conventions</h2>
<p>
There are numerous variable naming conventions in the coding world, but among the most important are :
<br>
<br>
a) Camel Case
<br>
b) Pascal Case
<br>
c) Snake Case
<br>
d) Kebab Case
</p>

<h2>Camel Case</h2>
<p>
Camel case is a variable naming convention used almost everywhere during variable naming where words in a phrase are combined without spaces.
<br>
<br>
In camel case, the first letter of each word in a phrase is capitalized except for the first word, which starts with lowercase. There are no spaces between the words.
</p>

<h2>Examples of Camel Case</h2>
<p>
exampleVariableName
<br>
myFunctionName
<br>
calculateTotalAmount
</p>

<h2>Pascal Case</h2>
<p>
Pascal case is another naming convention we use frequently to combine the words in a phrase without using spaces. It is similar to the 'Camel Case' convention just with a slight difference.
<br>
<br>
In this naming convention each word in a phrase is capitalized including the first word.
</p>

<h2>Examples of Pascal Case</h2>
<p>
ExampleVariableName
<br>
MyFunctionName
<br>
CalculateTotalAmount
</p>

<p>
'Pascal Case' naming convention is also known as 'Upper Camel Case'.
</p>

<h2>Snake Case</h2>
<p>
Another very famous variable naming convention is 'Snake Case' convention. This naming convention is most preferred in programming languages like Python.
<br>
<br>
In snake case, all the words of a phrase are written in lowercase and separated by underscores ("_") instead of spaces.
</p>

<h2>Examples of Snake Case</h2>
<p>
example_variable_name
<br>
my_function_name
<br>
calculate_total_amount
</p>

<h2>Kebab Case</h2>
<p>
The kebab case is almost similar to the snake case where all the words in a phrase are written in lowercase.
<br>
<br>
The only difference between snake case and kebab case naming convention is, in kebab case the words in a phrase are separated by hyphens ("-").
</p>

<h2>Examples of Kebab Case</h2>
<p>
example-variable-name
<br>
my-function-name
<br>
calculate-total-amount
</p>

<h2>Conclusion</h2>
<p>
Okay, so this was a small and concise article that we need to understand before we start coding in JavaScript. As mentioned earlier, these concepts may seem insignificant, but they are crucial for writing quality code.
<br>
<br>
That's all from this article. See you in the next one. Keep learning!
</p>
`,
Operators_in_JavaScript:`
<h2>Operators in JavaScript</h2>
<p>JavaScript is a dynamic programming language with various operators to perform operations on data and manipulate values. In this article, we'll learn the diverse types of operators in JavaScript, exploring their functionalities and providing practical examples to enhance your understanding.</p><br>

<h2>Types of Operators</h2>
<p>Understanding JavaScript operators is essential for writing efficient and expressive code. By mastering these operators, we'll gain the tools needed to manipulate data, make decisions, and create more dynamic and interactive applications.</p><br>

<h2>✨ Arithmetic Operators</h2>
<h2>📌 Assignment Operators</h2>
<h2>✨ Comparison Operators</h2>
<h2>📌 Logical Operators</h2>
<h2>✨ Bitwise Operators</h2>
<h2>📌 Ternary Operators</h2><br>

<h2>Arithmetic Operators</h2>
<p>Arithmetic operators in JavaScript allow us to perform mathematical calculations such as addition, subtraction, multiplication, division, and modulus.</p><br>

<h2>Addition</h2>
<p>Example:</p>
<pre>
let number1 = 25;
let number2 = 36;
let number3 = 56;

let sum = number1 + number2 + number3;
console.log(sum); // 117
</pre><br>

<h2>Subtraction</h2>
<p>Example:</p>
<pre>
let number1 = 25;
let number2 = 36;

let diff = number1 - number2;
console.log(diff); // -11
</pre><br>

<h2>Multiplication</h2>
<p>Example:</p>
<pre>
let number1 = 25;
let number2 = 36;

let prod = number1 * number2;
console.log(prod); // 900
</pre><br>

<h2>Exponentiation</h2>
<p>Example:</p>
<pre>
let x = 5;
let y = 5;

let ans = x ** 3;
console.log(ans); // 125
</pre><br>

<h2>Division</h2>
<p>Example:</p>
<pre>
let x = 10;
let y = 4;

let ans = x / y;
console.log(ans); // 2.5
</pre><br>

<h2>Modulus</h2>
<p>Example:</p>
<pre>
let x = 10;
let y = 4;

let ans = x % y;
console.log(ans); // 2
</pre><br>

<h2>Increment & Decrement</h2>
<p>Example:</p>
<pre>
let x = 10;
let y = 4;

x++;
console.log(x); // 11

y--;
console.log(y); // 3
</pre><br>

<h2>Assignment Operators</h2>
<p>Example:</p>
<pre>
let firstName = "Mayank";
let y = 4;

console.log(firstName); // Mayank
console.log(y); // 4
</pre><br>

<h2>Comparison Operators</h2>
<p>Example:</p>
<pre>
let x = "10";
console.log(typeof(x)); // string

let y = 10;
console.log(typeof(y)); // number

console.log(x == y); // true
console.log(x === y); // false
</pre><br>

<h2>Logical Operators</h2>
<p>Example:</p>
<pre>
let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2); // false
console.log(alert2 && alert3); // false
console.log(alert1 && alert3); // true
</pre><br>

<h2>Bitwise Operators</h2>
<p>Example:</p><br>

<h2>Bitwise AND</h2>
<pre>
let num1 = 5;
let num2 = 3;
console.log(num1 & num2); // 1
</pre><br>

<h2>Bitwise OR</h2>
<pre>
let num1 = 5;
let num2 = 3;
console.log(num1 | num2); // 7
</pre><br>

<h2>Bitwise XOR</h2>
<pre>
let num1 = 5;
let num2 = 3;
console.log(num1 ^ num2); // 6
</pre><br>

<h2>Bitwise NOT</h2>
<pre>
let num = 5;
console.log(~num); // -6
</pre><br>

<h2>Bitwise Left Shift</h2>
<pre>
let num = 5;
console.log(num << 1); // 10
</pre><br>

<h2>Bitwise Right Shift</h2>
<pre>
let num = 5;
console.log(num >> 1); // 2
</pre><br>

<h2>Bitwise Zero-fill Right Shift</h2>
<pre>
let num = -5;
console.log(num >>> 1); // 2147483645
</pre><br>

<h2>Ternary Operators</h2>
<p>Example:</p>
<pre>
let myAge = 21;
(myAge >= 18) ? (console.log("Can Drive")) : (console.log("Cannot Drive"));
// Output: Can Drive
</pre><br>

`,
Literals: `<h1>Understanding JavaScript Literals</h1>
 <p>In JavaScript, literals are fixed values that represent specific types of data. These literals are directly used in the code without requiring computation or evaluation.</p>

    <h2>Why Are Literals Important?</h2>
    <p>Literals are the foundation of JavaScript programming. They help define variables, objects, arrays, and expressions efficiently. Using literals correctly ensures clarity, reduces errors, and improves code readability.</p>

    <h2>Types of JavaScript Literals</h2>
    <p>JavaScript supports various types of literals, including:</p>
<ul>
    <li><strong>String Literals:</strong> "Hello, World!" or 'JavaScript is fun'</li>
    <li><strong>Number Literals:</strong> 100, 3.14, -42</li>
    <li><strong>Boolean Literals:</strong> true, false</li>
    <li><strong>Array Literals:</strong> [1, 2, 3, 4]</li>
    <li><strong>Object Literals:</strong> { name: "John", age: 30 }</li>
</ul>

<h2>Examples</h2>

<h3>String Concatenation</h3>
<pre>
    let firstName = "Mayank";
    let lastName = "Pandey";
    let fullName = firstName + " " + lastName;
    console.log(fullName);
    // Output: Mayank Pandey
</pre>

<h3>Template Literals</h3>
<pre>
    let number1 = 10;
    let number2 = 20;
    let sum = number1 + number2;
    console.log(\`The sum of \${number1} + \${number2} is equal to \${sum}\`);
    // Output: The sum of 10 + 20 is equal to 30
</pre>

<h3>Multi-line Strings</h3>
<pre>
    let string1 = "Mai pal do pal ka shayar hoon";
    let string2 = "Pal do pal meri kahani hai";
    let multiLineString = \`
        \${string1},
        \${string2}\`;
    console.log(multiLineString);
</pre>

<h3>Object Literals</h3>
<pre>
    let person = {
        name: 'Mayank',
        age: 21,
        isRunning: true
    };
    console.log(person);
</pre>

<h3>Array Literals</h3>
<pre>
    let colors = ['orange', 'red', 'aqua', 'green', 'blue'];
    console.log(colors);
</pre>

<h3>Mixed Type Array</h3>
<pre>
    let container = [2, "laptop", true, "papers", "watch"];
    console.log(container);
</pre>

<h2>Conclusion</h2>
<p>These are the key JavaScript literals that are commonly used in development. Understanding their syntax and usage can help avoid common mistakes.</p>`,
If_else:`
<h1>If-Else Statements</h1>
<p>Conditional statements are fundamental components of programming languages, essential for handling logic and decision-making processes. They allow us to control the flow of our code by executing specific blocks of code based on certain conditions. In JavaScript, conditional statements play a crucial role in directing program execution. Let's delve into this foundational topic in JavaScript to understand its significance and explore its practical applications.</p><br>

<h2>Introduction</h2>
<p>Conditional statements in JavaScript, such as 'if' and 'if-else', allow us to control the flow of our code based on certain conditions. With these statements, we can specify blocks of code to be executed only when certain conditions are met.</p>
<p>For example, using an if statement, we can execute a piece of code if a particular condition evaluates to true. Alternatively, with an if-else statement, we can provide an alternative code block to be executed if the condition evaluates to false. These conditional statements provide powerful tools for building dynamic and responsive programs in JavaScript.</p><br>

<h2>If Statement</h2>
<p>In JavaScript, an 'if' statement is a fundamental conditional statement that allows us to execute a block of code only if the specified condition is true. If the condition is false, the code block associated with the 'if' statement is skipped.</p><br>

<h2>Syntax for if statements</h2>
<pre>
if (condition){
    // Code block to be executed if the condition is true
}
</pre><br>

<h2>Examples of if statements</h2>
<pre>
let speed = 87;

if(speed > 90){
    console.log("OverSpeeding");
}

if(speed > 50 && speed <=90){
    console.log("Normal");
}

if(speed <= 50){
    console.log("Slow");
}

// Output: "Normal"
</pre><br>

<h2>If-else Statement</h2>
<p>In JavaScript, an 'if-else' statement is a conditional statement that allows us to execute one block of code if a specified condition evaluates to true, and another block of code if the condition evaluates to false.</p><br>

<h2>Syntax for if-else statements</h2>
<pre>
if (condition) {
    // Code block to be executed if condition is true
} else {
    // Code block to be executed if condition is false
}
</pre><br>

<h2>Examples of if-else statements</h2>
<pre>
let myAge = 15;

if(myAge >= 18){
    console.log("I can Drive");
}else{
    console.log("Cannot Drive");
}

// Output : "Cannot Drive"
</pre><br>

<h2>If-else-if Statement</h2>
<p>An if-else-if statement is a conditional statement that allows us to test multiple conditions and execute different blocks of code based on the outcome of those conditions. It is an extension of the if-else statement and provides additional flexibility for handling multiple scenarios.</p><br>

<h2>Syntax for if-else-if statements</h2>
<pre>
if (condition1) {
    // Code block to be executed if condition1 is true
} else if (condition2) {
    // Code block to be executed if condition2 is true
} else {
    // Code block to be executed if all conditions are false
}
</pre><br>

<h2>Examples of if-else-if statements</h2>
<pre>
let weight = 65;

if (weight > 70) {
    console.log("You are Overweight");
} else if (weight > 50 && weight <= 70) {
    console.log("You are Fit");
} else {
    console.log("You are Underweight");
}

// Output : "You are Fit"
</pre><br>

`,
Primitive_Datatypes:`
<h1>Primitive Data Types in JavaScript</h1>
<p>In the previous articles, we have discussed the distinction between primitive and reference data types and their significance in JavaScript. We have also examined the classification of various data types, which fall under primitive data types. Now, it's time to explore each datatype in detail, understanding its behavior and how we can efficiently utilize them in our code.</p><br>

<h2>Primitive Data Types</h2>
<p>Primitive data types are those whose size is fixed at compile time. Memory allocation for primitive data types is typically done on the 'Stack'.</p>
<p>There are primarily five primitive data types in JavaScript:</p>
<ul>
    <li>Numbers</li>
    <li>Strings</li>
    <li>Boolean</li>
    <li>Undefined</li>
    <li>Null</li>
</ul>
<p>These primitive data types are essential for basic operations and data manipulation in programming languages. Let's briefly discuss each of these data types and their usage.</p><br>

<h2>Numbers</h2>
<p>Numbers are used to represent numeric values, which can be integers or floating-point numbers.</p>
<p>In JavaScript, all numeric values are internally represented as double-precision 64-bit floating-point numbers. JavaScript provides methods to work with both integer and floating-point numbers.</p><br>

<h2>Examples of Numbers</h2>
<pre>
let integerNumber = 3;
console.log(typeof(integerNumber));    // number

let floatNumber = 3.14;
console.log(typeof(floatNumber));      // number

let output = integerNumber + floatNumber;
console.log(output);   // 6.14
</pre><br>

<h2>Arithmetic Operations</h2>
<pre>
let number1 = 13;
let number2 = 10;

let sum = number1 + number2;
console.log(sum);      // 23

let product = number1 * number2;
console.log(product);  // 130

let quotient = number1 / number2;
console.log(quotient); // 1.3
</pre><br>

<h2>Strings</h2>
<p>Strings in JavaScript represent sequences of characters. They are used to store and manipulate textual data.</p><br>

<h2>Creating Strings</h2>
<pre>
let string1 = "Namaste";
console.log(typeof(string1));  // string

let string2 = 'Hello';
console.log(typeof(string2));  // string

let string3 = 'Welcome';
console.log(typeof(string3));  // string
</pre><br>

<h2>Concatenating Strings</h2>
<p>We can concatenate multiple strings using the '+' operator or template literals.</p><br>

<h2>Using the '+' Operator</h2>
<pre>
let string1 = "Mobile";
let string2 = "Charger";
let finalSentence = string1 + " and " + string2 + "!";
console.log(finalSentence);  // Output: Mobile and Charger!
</pre><br>

<h2>Using Template Literals</h2>
<pre>
let string1 = "Mobile";
let string2 = "Charger";
let finalSentence = string1 +"and"+ string2+"!";
console.log(finalSentence);  // Output: "Mobile and Charger!"

</pre><br>

<h2>Boolean</h2>
<p>The Boolean data type represents a logical value, which can be either <code>true</code> or <code>false</code>. Booleans are often used in conditional statements to control program execution.</p><br>

<h2>Examples of Boolean</h2>
<pre>
let isSleeping = true;
let isRunning = false;

if (isSleeping) {
    console.log("He is sleeping");
} else {
    console.log("He is running");
}
// Output: He is sleeping
</pre><br>

<h2>Undefined</h2>
<p>In JavaScript, <code>undefined</code> represents a variable that has been declared but has not been assigned a value.</p><br>

<h2>Example of Undefined</h2>
<pre>
let range;
console.log(range);  // undefined
</pre><br>

<h2>Null</h2>
<p>In JavaScript, <code>null</code> represents the intentional absence of any object value. It is used to signify that a variable does not have a value.</p><br>

<h2>Example of Null</h2>
<pre>
let range = null;
console.log(range);         // null
console.log(typeof(range)); // object
</pre><br>

<h2>Conclusion</h2>
<p>By now, you should have a solid understanding of the primitive data types in JavaScript and how they are used. These data types form the foundation of data manipulation in JavaScript programming.</p><br>

`,


};

function loadContent(topic) {
    document.getElementById('content-area').innerHTML = content[topic];
}