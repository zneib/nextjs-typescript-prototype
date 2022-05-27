import type { NextPage } from 'next'

interface Bird {
  type: 'bird'
  flyingSpeed: number
}

interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

const DiscriminatedUnions: NextPage = () => {
  const moveAnimal = (animal: Animal) => {
    let speed;
    switch (animal.type) {
      case 'bird':
        speed = animal.flyingSpeed
        break;
      case 'horse':
        speed = animal.runningSpeed
        break;
    }
    console.log(`Moving with speed: ${speed}`)
  }

  moveAnimal({ type: 'bird', flyingSpeed: 10})
  moveAnimal({ type: 'horse', runningSpeed: 20})

  return (
    <div>Discriminated Unions</div>
  )
}

export default DiscriminatedUnions