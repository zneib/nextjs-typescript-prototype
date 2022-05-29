import { NextPage } from "next";

const Generics: NextPage = () => {
  // const names: Array<string> = [] // same as string[]

  // const promise: Promise<string> = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('This is done')
  //   }, 2000);
  // })

  function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }

  const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30})
  console.log(mergedObj);

  interface Lengthy {
    length: number;
  }

  function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
      descriptionText = `Got 1 element`;
    } else if (element.length > 1) {
      descriptionText = `Got ${element.length} elements`;
    }
    return [element, descriptionText]
  }

  console.log(countAndDescribe(['hi', 'world']));
  

  return (
    <h1>Generics</h1>
  )
}

export default Generics