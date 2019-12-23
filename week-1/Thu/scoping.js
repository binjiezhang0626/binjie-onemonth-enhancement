// Block-Scoped Variables
let callbacks = []
for (let i = 0; i <= 2; i++) {
  callbacks[i] = () => i * 2
}

// Block-Scoped Functions
{
  function foo() { return 1 }
  console.log(foo())
  {
    function foo() { return 2 }
    console.log(foo())
  }
  console.log(foo())
}

{
  const foo = () => 1
  console.log(foo())
  {
    const foo = () => 2
    console.log(foo())
  }
  console.log(foo())
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const fives = []
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v)
})
console.log(nums)
console.log(fives)

console.log(0o767)

console.log("𠮷")

for (let codepoint of "𠮷") console.log(codepoint)