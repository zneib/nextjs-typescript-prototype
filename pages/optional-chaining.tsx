import { NextPage } from "next";

const OptionalChaining: NextPage = () => {

  const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company'}
  }

  console.log(fetchedUserData?.job?.title)

  return (
    <h1>Optional Chaining</h1>
  )
}

export default OptionalChaining