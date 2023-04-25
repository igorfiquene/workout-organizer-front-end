import { Button, Flex, Group, Text, Title } from '@mantine/core'
import { IconBarbell } from '@tabler/icons-react'
import Link from 'next/link'

export default function Home() {
  return (
    <Group position="center">
      <Flex direction="column" gap={16}>
        <Title order={1}>Top, vamos planejar seu próximo treino?</Title>

        <Text size="lg">Veja só como é fácil criar uma rotina de treino</Text>

        <Button
          size="md"
          radius="xl"
          leftIcon={<IconBarbell />}
          variant="light"
          color="violet"
        >
          <Link style={{ textDecoration: 'none' }} href={'/treinos'}>
            Crie um treino
          </Link>
        </Button>
      </Flex>
    </Group>
  )
}
