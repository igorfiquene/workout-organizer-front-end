import { List } from '@/components/List'
import { Flex, Space, Text, Title } from '@mantine/core'

export default function HistoricPage() {
  const elements = [
    { date: '20/04/2023', id: 1, name: 'Supino reto', category: 'Peito' },
    { date: '21/04/2023', id: 2, name: 'Remada', category: 'Costa' },
    { date: '22/04/2023', id: 3, name: 'Elevação lateral', category: 'Ombros' }
  ]

  return (
    <>
      <Flex align={'center'} justify={'space-between'}>
        <Title order={1}> Histórico </Title> <Space h="md" />
        <Text>Últimos 7 dias</Text>
      </Flex>
      <List elements={[...elements]} />
    </>
  )
}
