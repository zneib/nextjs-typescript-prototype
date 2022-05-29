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

  function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return ` Value: ${obj[key]}`;
  }

  console.log(extractAndConvert({name: 'Max'}, 'name'))

  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item)
    }

    removeItem(item: T) {
      if (this.data.indexOf(item) === 1) {
        this.data.splice(this.data.indexOf(item, 1))
      }
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Zach');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems())
  
  const numberStorage = new DataStorage<number>();

  // const objStorage = new DataStorage<object>();
  // objStorage.addItem({name: 'Max'})
  // objStorage.addItem({name: 'Zach'})
  // objStorage.removeItem({name: 'Max'}); // This will break!
  // console.log(objStorage.getItems())

  return (
    <h1>Generics</h1>
  )
}

export default Generics