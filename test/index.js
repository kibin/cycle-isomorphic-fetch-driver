import { expect } from 'chai'
import { Observable } from 'rx'
import { makeFetchDriver } from '../src/index'

console.log(makeFetchDriver.toString())
describe(`makeFetchDriver`, _ => {
  it(`should be function`, () => {
    expect(makeFetchDriver).to.be.a(`function`)
  })
})
