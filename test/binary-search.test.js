const binarySearch = require('../binary-search')
const assert = require('assert')

const getTestList = () => {
  return [1,2,100,101, 3, 10, 20, 200]
}
describe("Binary Search", () => {
  it("Search number : 1", () => {
    let nums = getTestList()
    const res = binarySearch(nums, 1)
    console.log(res)
    assert.equal(res.index, 0)
    assert.equal(res.value, 1)
  }) 
  it("Search number : 2", () => {
    let nums = getTestList()
    const res = binarySearch(nums, 2)
    console.log(res)
    assert.equal(res.index, 1)
    assert.equal(res.value, 2)
  }) 
  it("Search number : 101", () => {
    let nums = getTestList()
    const res = binarySearch(nums, 101)
    console.log(res)
    assert.equal(res.index, 6)
    assert.equal(res.value, 101)
  }) 
  it("Search number : 200", () => {
    let nums = getTestList()
    const res = binarySearch(nums, 200)
    console.log(res)
    assert.equal(res.index, 7)
    assert.equal(res.value, 200)
  }) 
  it("Search number nothing is return 0", () => {
    let nums = getTestList()
    const res = binarySearch(nums, 300)
    console.log(res)
    assert.equal(res, 0)
  })
})

