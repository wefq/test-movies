export const joinArray = <T extends Record<string, any>>(
  array: T[],
  key: keyof T
) => {
  const newArray: T[keyof T][] = []
  array.map((item) => newArray.push(item[key]))
  return newArray.join(', ')
}
