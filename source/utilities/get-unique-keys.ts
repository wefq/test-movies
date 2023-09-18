export const getUniqueKeys = <T extends Record<string, any>>(
  array: T[],
  uniqueKey: keyof T
): (string | number)[] => {
  const uniqueKeys = new Set<string | number>()

  array.forEach((obj: T) => {
    if (obj.hasOwnProperty(uniqueKey)) {
      uniqueKeys.add(obj[uniqueKey])
    }
  })

  return Array.from(uniqueKeys)
}
