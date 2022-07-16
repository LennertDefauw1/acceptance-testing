# Jimber Technical Tests
Run `npm install` and run `npm run test` to run tests with watcher.  
The goal is to make all tests pass, following the guide below.  
If something is unclear, you are free to ask anything!  
If you are stuck on some sections, skip them!  
Good luck and happy coding! ☕

## Test 1: Fibonacci
- Complete functions `getFibonnaciNumbersNonRecursive` and `getFibonnaciAtIndexWithRecursion`.
- Check the tests in `fibonacci.spec` to figure out the implementation.
- `getFibonnaciNumbersNonRecursive` should not contain any recursion.
- While `getFibonnaciAtIndexWithRecursion` should include some recursion.
- The tests do not need any modifications!


## Test 2: User
- Complete the `UserCreator` class.
- Check the tests in `user.spec` to figure out the implementation.
- The tests do not need any modifications!

## Test 3: Crypto
- Complete the `cryptoUtils` module.
- Check the tests in `crypto.spec` to figure out the implementation.
- The tests do not need any modifications!
- Use private/public key encryption.

## Test 4: Testing
- Given `UserService` and `UserRepository`, these do not need any modification!
- There are 2 tests defined in `user.integration.spec`.
- Implement the tests according to the description.
- Extra points for using the `UserCreator` 😅!

## Test 5: Docker
- Running `npm run report` creates code coverage statistics in html
- Complete the `Dockerfile`:
  - It generates the html code coverage report
  - It should spin up a webservice
  - It serves the static html on port 80
  - When running the docker, you should see the report