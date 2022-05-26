import { NextPage } from "next";

const UnionAliases: NextPage = () => {
  const add = (n1: number, n2: number): number => {
    return n1 + n2;
  }

  const printResult = (num: number) => {
    console.log(`Result: ${num}`)
  }

  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
  }

  printResult(add(5, 12))

  // Function types with parameters types and return type
  let combineValues: (a: number, b: number) => number

  combineValues = add
  // combineValues = printResult - Won't work because the paramters and return type don't match
  // combineValues = 5

  console.log(combineValues(8,8))

  addAndHandle(10, 20, (result) => {
    console.log(result)
  })

  return (
    <div>Union Aliases and Function Types</div>
  )
}

export default UnionAliases