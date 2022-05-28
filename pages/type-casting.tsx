import type { NextPage } from 'next'

const TypeCasting: NextPage = () => {

  // Cleaner solution
  // const userInputElement = document.getElementById('user-input')! as HTMLInputElement
  // userInputElement.value = 'Hello'

  // OR

  // const userInputElement = document.getElementById('user-input')
  // if (userInputElement) {
  //   (userInputElement as HTMLInputElement).value = 'Hello'
  // }

  return (
    <div>Type Casting</div>
  )
}

export default TypeCasting