# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming is using objects as a way to program. In Ruby all data types are considered objects. Whether its a string, integer, float, boolean or symbol, they are all considered objects. My guess is functional programming is different because the data aren't considered objects, simply rules that the code has created.

Researched answer: Object-oriented programming is a type of language that utilizes classes as blueprints for objects. Objects are the blue print for the Ruby language. OOP was created to deal with the difficulty of larger software. the mantra in Ruby is ""Everything is an object."  Functional programming is used to perform operations for fixed data. In functional program, data cannot be stored in objects and only passed by creating functions. 

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is a number or integer that is a not a whole number, a good example is 3.14 or 4.1. An integer is a whole number such as 5 or 65. An integer and float are both considered data types. In order to return a float one of the numbers has to have a decimal. Floats and integers both have similar methods like JavaScript such as adding, subtracting, multiplying and dividing. 

Researched answer: Integer and Float are both considered different data types. An integer or int is number without a decimal point. A float also known as floating-point number is a number that has a decimal place. Floats must be introduced as a float to your program such as 4.0/3 or 5.0 * 7.


1. Ruby has an implicit return. What does that mean?

Your answer: In Ruby, an implicit return is basically returning the method without actually using the word "return". Unlike Ruby, JavaScript functions need a return for that value. For any method, the return in the Ruby language will be the last because of implicit retrurn. The logic is understood without having to use a word.

Researched answer: The implicit return in Ruby is the final declaration inside that method, the method returns the final line of code before  "end" is displayed. In between def and end is the logic, implicit return will always return the last line of code. It is important to remember the last line before "end" will be returned for that method. 

1. What is a block in Ruby?

Your answer: A block is the equivalent to a function in JavaScript. A block in the Ruby language starts with "do" and ends with "end." For blocks, curly braces can be used if the code is a one liner. Puts or p will invoke that block of code. A block of code is passed by top to bottom, meaning the last logic or data passed will be returned. 

Researched answer: A block is a function that is passed inside a method that is interpreted with the keywords do and end. Built in methods such as map and filter will need more informatation therefore a block is needed to determine the outcome. Blocks are used to accept information from arguments and return a value.

1. How do you extract a value in a Ruby hash?

Your answer: I will need to do some research on this question. 

Researched answer: A hash is a collection of keys, hashes are designed like an array however the index in a hash would be the key. There are four actions taht can be performed on dtata in hashes.CRUD stands for create, update, read and delate data. By using the read action, users can extract either the whole value or individual values by using brackets. Various methods such as times,each,while and map require a block to ensure the desired outcome. 

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Ruby Class Inheritance is classes sharing similar attributes, inheritance is allowing classes to have relationships with each other. A superclass holds information of a common behavior from multiple classes. A superclass passes the information to a subclass to inherit the same data. The syntax < is used to perform the data being passed from a superclass to a subclass.

2. RSpec: RSpec stands for request specification, its used for testing the behavior of objects. Automated tests ensure the code bug free, bugs usually appear when the code is more complex. Developers use this testing resource to create specs that express the desired output. 

3. CRUD: CRUD stands for create, update, read and delate data. There are two ways to create a hash, using .new or created a variable and listing out the key. Update can add values to the hash by using square brackets with that value. Read returns the data exisitng data, either individually or the whole hash. Delete removes a key by using .delete with the key passed in parenthesis. 

4. Test-driven development: TDD is a development process that is used to write test cases before the software is developed.TDD has three parts: write your tests before any line of code is ever written,write the simplest code to pass those tests and  refactor your simple code to something more appropriate.

5. HTTP: A library used to make request from Ruby. It's a method for buidling request similar to Python. Ruby comes with a built in http client, users can utilize it and send any request that is needed.
