type ElementType = {
  date: string
  id: number
  name: string
  category: string
}[]

type SortDateByAscType = {
  type: Exclude<keyof ElementType[number], 'id'>
  arr: ElementType
}

export function SortDateByAsc({ arr, type }: SortDateByAscType) {
  return arr
}
