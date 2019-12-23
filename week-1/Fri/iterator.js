const myFavouriteAuthors = [
  'Neal Stephenson',
  'Arthur Clarke',
  'Isaac Asimov',
  'Robert Heinlein'
];
//usage of for...of
for (const value of myFavouriteAuthors) {
  console.log(value)
}

// iterator
const iterable = {
  [Symbol.iterator]() {
    let step = 0
    const iterator = {
      next() {
        step++
        if (step === 1) {
          return { value: 'First', done: false }
        } else if (step === 2) {
          return { value: 'Second', done: false }
        } else if (step === 3) {
          return { value: 'Third', done: false }
        }
        return { value: 'done', done: true }
      }
    }
    return iterator
  }
}

const iterator1 = iterable[Symbol.iterator]()
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())