import {
  Chip,
  Flex,
  Group,
  MultiSelect,
  Select,
  SimpleGrid,
  Space,
  Title
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { useForm } from '@mantine/form'
import { useMemo, useState } from 'react'

const mock = {
  divisao: [
    {
      id: 1,
      label: 'A'
    },
    {
      id: 2,
      label: 'B'
    },
    {
      id: 3,
      label: 'C'
    },
    {
      id: 4,
      label: 'D'
    }
  ],
  treino: {
    peito: {
      exercicios: [
        {
          id: 123481283,
          slug: 'supino-reto',
          label: 'Supino Reto'
        },
        {
          id: 192489284,
          slug: 'crucifixo',
          label: 'Crucifixo'
        }
      ]
    },
    costa: {
      exercicios: [
        {
          id: 12311233,
          slug: 'puxada-frontal',
          label: 'Puxada Frontal'
        },
        {
          id: 12432423,
          slug: 'remada-com-halter',
          label: 'Remada com Halter'
        }
      ]
    },
    perna: {
      exercicios: [
        {
          id: 1232311233,
          slug: 'agachamento-livre',
          label: 'Agachamento Livre'
        },
        {
          id: 1243422423,
          slug: 'stiff',
          label: 'Stiff'
        }
      ]
    },
    ombro: {
      exercicios: [
        {
          id: 123981399,
          slug: 'elevacao-lateral',
          label: 'Elevação lateral'
        },
        {
          id: 92838293238,
          slug: 'desenvolvimento-com-halter',
          label: 'Desenvolvimento com halter'
        }
      ]
    }
  }
}

interface FormValues {
  treino: 'peito' | 'costa' | 'ombro' | 'perna' | null
  exercicios: {
    id: number
    slug: string
    label: string
  }[]
}

export default function TraineePage() {
  const [date, setDate] = useState<Date | null>(null)

  const form = useForm<FormValues>({
    initialValues: {
      treino: null,
      exercicios: []
    }
  })

  const getValueBasedTreinoValue = useMemo(() => {
    if (!form.values.treino) {
      return []
    }

    // reset value of exercicios when treino input was changed
    form.setValues({
      exercicios: []
    })

    return mock.treino[form.values.treino].exercicios.map(
      ({ slug, label }) => ({
        value: slug,
        label
      })
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values.treino])

  return (
    <>
      <Title order={1}>Treinos</Title>
      <Space h="md" />

      <Space h={'xl'} />

      <SimpleGrid cols={3}>
        <Flex
          direction="column"
          gap="md"
          sx={(theme) => ({
            padding: theme.spacing.lg,
            border: theme.radius.md,
            borderRadius: theme.radius.md
          })}
        >
          <Title order={3}>Data</Title>

          <DatePicker
            value={date}
            onChange={setDate}
            hideOutsideDates
            maxLevel="month"
            withCellSpacing={true}
          />
        </Flex>

        <Flex
          direction="column"
          gap="md"
          sx={(theme) => ({
            background: theme.colors.dark[6],
            padding: theme.spacing.lg,
            borderRadius: theme.radius.md
          })}
        >
          <Title order={3}>Divisão</Title>

          <Chip.Group>
            <Group>
              {mock.divisao.map(({ label, id }) => (
                <Chip value={label} key={id}>
                  {label}
                </Chip>
              ))}
            </Group>
          </Chip.Group>
        </Flex>

        <Flex
          direction="column"
          gap="md"
          sx={(theme) => ({
            padding: theme.spacing.lg,
            borderRadius: theme.radius.md
          })}
        >
          <Title order={3}>Treino</Title>

          <Select
            label="Selecione o tipo de treino"
            sx={(theme) => ({
              label: { marginBottom: theme.spacing.xs }
            })}
            placeholder="Selecione o tipo de treino"
            data={[
              { value: 'peito', label: 'Peito' },
              { value: 'costa', label: 'Costa' },
              { value: 'perna', label: 'Perna' },
              { value: 'ombro', label: 'Ombro' }
            ]}
            {...form.getInputProps('treino')}
          />

          <MultiSelect
            sx={(theme) => ({
              label: { marginBottom: theme.spacing.xs }
            })}
            label="Selecione o tipo de exercício"
            placeholder="Selecione o tipo de exercício"
            disabled={!form.values.treino}
            clearable
            data={getValueBasedTreinoValue}
            {...form.getInputProps('exercicios')}
          />
        </Flex>
      </SimpleGrid>
    </>
  )
}
