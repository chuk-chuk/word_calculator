## Word Calculator

**Requirements**

- [ ] It is recommended that you complete the test in  JavaScript, either in a browser or in Node
- [ ] You will be given a book in a text file
- [ ] Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file
- [ ] Output whether the number of times each word appears is a prime number
- [ ] The following assumptions can be made:
  - [ ] Ignore punctuation and capitalisation
  - [ ] TDD is expected

**Instructions**

[Install node](https://nodejs.org/en/download/)

Navigate to the directory to install:

```
git clone git@github.com:chuk-chuk/word_calculator.git
cd word_calculator
```
Make sure all dependencies are available to your application:

```
npm install
```

Run tests:

```
npm test
```
Open terminal to run the following command:
```
node main.js
```
Example of output:
```
Word `lowest` appeared 1 time(s) and it is not a prime number
Word `wigsby` appeared 5 time(s) and it is a prime number
Word `minor` appeared 2 time(s) and it is a prime number
Word `paley` appeared 4 time(s) and it is not a prime number
Word `terts` appeared 2 time(s) and it is a prime number
Word `liking` appeared 1 time(s) and it is not a prime number
```
**Implementation**

Application is written in JavaScript in Node.js. Following the best TDD practices, I opted to use Jasmine testing framework in order to iteratively build the application.

A word calculator can output a given text, split it into separate words, count words occurrences and determine whether a number of times the word appears in the text is a prime number.  

In order to read a file I decided to use one of Node.js core modules called `fs`. A simple text file was created and saved in the directory.

I used object-oriented design to approach this problem, after diagraming the process of implementation of the application I created four objects to make sure that each one has a single responsibility.

To structure the application I passed a controller  responsibility to `main.js`, an execution of which will allow to see a result of file processing.

To improve the application further I would sort the list in alphabetical order, or in the order of most occurrences on the top. Also I would extract printing logic into a separate object.
