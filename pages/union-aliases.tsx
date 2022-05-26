import { NextPage } from "next";

const UnionAliases: NextPage = () => {
  const add = (n1: number, n2: number): number => {
    return n1 + n2;
  }

  const printResult = (num: number) => {
    console.log(`Result: ${num}`)
  }

  printResult(add(5, 12))

  return (
    <div>Union Aliases</div>
  )
}

export default UnionAliases