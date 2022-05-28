import { NextPage } from "next";

type Combinable = string | number

const FunctionOverloads: NextPage = () => {

  function add(a: number, b: number): number; // This is a function overload
  function add(a: string, b: string): string; // This is a function overload
  function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  const result = add('Max', 'Schwarz')
  result.split(' ')
  return (
    <h1>Function Overloads</h1>
  )
}

export default FunctionOverloads