import type { NextPage } from 'next'

type Admin = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee

const employeeOne: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

const IntersectionTypes: NextPage = () => {
  return (
    <div>Intersection Types</div>
  )
}

export default IntersectionTypes