import { Space, Title } from '@mantine/core'
import Calendar_Card from '../../components/Calendar'

export default function TraineePage() {
  return (
    <>
      <Title order={1}>Treinos</Title>
      <Space h="md" />
      <Calendar_Card />
    </>
  )
}
