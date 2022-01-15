const removeDuplicates = (arr: string[]) => [
  ...new Set(arr.map(item => item && item.trim()))
]

export default removeDuplicates
