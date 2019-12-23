# ES6
## Staff need to review:
 - Template Literals
 - Generators
 - Map/Set & WeakMap/WeakSet
 - Some part of New Build-In Methods
 - Understand more Promise
 - proxying

 ## Generator
 ### [iterator](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e)
 `Symbol.iterator` will return an object called an iterator. This iterator will have a method called `next` which will return an object with keys value and done.

Usage:
  - Destructuring of Arrays
  ```
  const array = ['a', 'b', 'c', 'd', 'e'];
  const [first, ,third, ,last] = array;
  ```
  is equivalent to
  ```
  const array = ['a', 'b', 'c', 'd', 'e'];
  const iterator = array[Symbol.iterator]();
  const first = iterator.next().value
  iterator.next().value // Since it was skipped, so it's not assigned
  const third = iterator.next().value
  iterator.next().value // Since it was skipped, so it's not assigned
  const last = iterator.next().value
  ```
  - Spread operator
  ```
  const array = ['a', 'b', 'c', 'd', 'e'];
  const newArray = [1, ...array, 2, 3];
  ``` 
  can be written as
  ```
  const array = ['a', 'b', 'c', 'd', 'e'];
  const iterator = array[Symbol.iterator]();
  const newArray = [1];
  for (let nextValue = iterator.next(); nextValue.done !== true; nextValue = iterator.next()) {
  newArray.push(nextValue.value);
  }
  newArray.push(2)
  newArray.push(3)
  ```
### [Generator](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)

A generator is a function that can stop midway and then continue from where it stopped.
 - Implementing Iterables
 iterator way:
 ```
 const iterableObj = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step === 1) {
          return { value: 'This', done: false};
        } else if (step === 2) {
          return { value: 'is', done: false};
        } else if (step === 3) {
          return { value: 'iterable.', done: false};
        }
        return { value: '', done: true };
      }
    }
  },
}
for (const val of iterableObj) {
  console.log(val);
}
 ```
 generator way:
```
function * iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}
for (const val of iterableObj()) {
  console.log(val);
}
```
