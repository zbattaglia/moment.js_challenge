# CODE CHALLENGE

You are encouraged to use Moment.js. Using Moment.js, implementation of the functions should be less than 10 lines of code. The expected time to completion is 4 hours or less. It would be better to submit one complete function with full test coverage rather than three complete functions with no additional tests.

Moment.js and Jest have already been added to the project. You should not need to install any additional node modules beyond what is in the `package.json`. A sample test case for each function has been provided. Please create a Github repository for this code challenge and commit your code after completing each objective.

## Setup

```
npm install
npm run test
```

## Objectives

- [x] Complete `closeToNow` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `closeToNow` function
- [x] Complete the `closestDate` function in `modules/time.validation.js`
- [ ] Write tests in `test/time.validation.tests.js` to validate the `closestDate` function
- [ ] Complete the `formatTimestamp` function in `modules/time.validation.js`
- [ ] Write tests in `test/time.validation.tests.js` to validate the `formatTimestamp` function

## Questions

- Did you make any changes to the functions after thinking through test cases?
    - The test cases made me think more about edge cases than normal. In closeToNow I had to decide if the timestamp was exactly 30 seconds from the current time the return should be true or false or if given noon as the time in closestDate should be the current date or the previous.
- Describe the experience of writing tests. Is this your first time writing unit tests?