import { Table } from '@mantine/core'

type ElementType = {
  date: string
  id: number
  name: string
  category: string
}[]

export const List = ({ elements }: { elements: ElementType }) => {
  const rows = elements.map(({ name, id, date, category }) => (
    <tr key={id}>
      <td>{category}</td>
      <td>{name}</td>
      <td>{date}</td>
    </tr>
  ))

  return (
    <Table horizontalSpacing="xl" verticalSpacing="md" striped>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Treino</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}
