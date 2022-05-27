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

type UnknownEmployee = Employee | Admin

const employeeOne: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number
type Numeric = number | boolean

type Universal = Combinable & Numeric

class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...')
  }
  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()


const TypeGuards: NextPage = () => {
  const add = (a: Combinable, b: Combinable) => {
    if (typeof a === 'string' || typeof b === 'string') { // This is a type guard
      return a.toString() + b.toString()
    }
    return a + b
  }

  const printEmployeeInformation = (emp: UnknownEmployee) => {
    if ('privileges' in emp) {
      console.log(`Privileges: ${emp.privileges}`)
    }
    if ('startDate' in emp) {
      console.log(`Start Date: ${emp.startDate}`)
    }
  }

  printEmployeeInformation(employeeOne)
  return (
    <div>Type Guards</div>
  )
}

export default TypeGuards