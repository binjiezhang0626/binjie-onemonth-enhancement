function* generatorFunction() {
  console.log('This will be executed first.');
  yield 'Hello, ';
  console.log('I will be printed after the pause');
  yield 'World!';
}
const generatorObject = generatorFunction();
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

function* iterableObj() {
  yield 'This';
  yield 'is';
  yield 'iterable.'
}

for (const val of iterableObj()) {
  console.log(val);
}

const iterableObj1 = iterableObj()
console.log(iterableObj1.next())
console.log(iterableObj1.next())
console.log(iterableObj1.next())
console.log(iterableObj1.next())

//Infinite Data Streams
let fibonacci = {
  *[Symbol.iterator]() {
    let pre = 0, cur = 1
    for (; ;) {
      [pre, cur] = [cur, pre + cur]
      yield cur
    }
  }
}

for (let n of fibonacci) {
  if (n > 1000)
    break
  console.log(n)
}