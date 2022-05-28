import { NextPage } from "next";

type Combinable = string | number

const FunctionOverloads: NextPage = () => {
  const add = (a: Combinable, b: Combinable) => {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString()
    }
    return a + b
  }
  return (
    <h1>Function Overloads</h1>
  )
}

export default FunctionOverloads