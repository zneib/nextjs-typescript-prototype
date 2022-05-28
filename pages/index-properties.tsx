import { NextPage } from "next"

interface ErrorContainer {
  [prop: string]: string;
}

const IndexProperties: NextPage = () => {
  const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
  }
  return (
    <>
      <h1>Index Properties</h1>
      <p>Email: {errorBag.email}</p>
      <p>Username: {errorBag.username}</p>
    </>
  )
}

export default IndexProperties