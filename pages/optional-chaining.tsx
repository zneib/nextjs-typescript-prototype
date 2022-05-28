import { NextPage } from "next";

const OptionalChaining: NextPage = () => {

  const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company'}
  }

  console.log(fetchedUserData?.job?.title)

  const userInput = ''

  const storedData = userInput ?? 'DEFAULT'

  console.log(storedData)

  return (
    <h1>Optional Chaining and Nullish Coalescing</h1>
  )
}

export default OptionalChaining