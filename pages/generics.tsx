import { NextPage } from "next";

const Generics: NextPage = () => {
  // const names: Array<string> = [] // same as string[]

  // const promise: Promise<string> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('This is done')
  //   }, 2000);
  // })

  function merge(objA: object, objB: object) {
    return Object.assign(objA, objB);
  }

  console.log(merge({name: 'Max'}, {age: 30}))

  return (
    <h1>Generics</h1>
  )
}

export default Generics