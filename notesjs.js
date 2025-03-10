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
    <p>Thanks for reading! See you in the next article.</p>`
};

function loadContent(topic) {
    document.getElementById('content-area').innerHTML = content[topic];
}