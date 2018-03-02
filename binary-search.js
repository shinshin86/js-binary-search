const search = (arr, t, s=0, e=arr.length) => {
  const mid = Math.floor((s + e) / 2)

  if(arr[mid] === t || mid === 0) {
    return getResult(arr, mid)
  } else if(arr[mid] > t) {
    return search(arr, t, s, mid)
  } else if(arr[mid] < t && arr[arr.length - 1] >= t) {
    return search(arr, t, mid, e)
  } else { 
    return 0
  }
}

const getResult = (arr, index) => {
  const res = {'index': index, 'value': arr[index]}
  return res
}

const binarySearch = (inputs, target) => {
  inputs.sort((a, b) => {
    return a - b
  })
  // console.log('----------> inputs : ', inputs)
  return search(inputs, target)
}

module.exports = binarySearch
