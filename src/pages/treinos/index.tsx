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
import { useState } from 'react'

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
    }
  ],
  treino: {
    peito: {
      exercicios: [
        {
          id: 123481283,
          slug: 'elevacao-lateral',
          label: 'Elevação lateral'
        },
        {
          id: 192489284,
          slug: 'evolucao',
          label: 'Evolução'
        }
      ]
    },
    costa: {
      exercicios: [
        {
          id: 12311233,
          slug: 'rosca-direta',
          label: 'Rosca Direta'
        },
        {
          id: 12432423,
          slug: 'triceps-corda',
          label: 'Tríceps Corda'
        }
      ]
    },
    ombro: {
      exercicios: [
        { id: 123981399, slug: 'puxada-frontal', label: 'Puxada Frontal' },
        { id: 92838293238, slug: 'remada', label: 'Remada' }
      ]
    }
  }
}

export default function TraineePage() {
  const [date, setDate] = useState<Date | null>(null)

  const form = useForm({
    initialValues: {
      treino: '',
      exercicios: ['']
    }
  })

  const getValueBasedTreinoValue = form.values.treino
    ? mock.treino[form.values.treino]?.exercicios?.map(({ slug, label }) => ({
        value: slug,
        label
      }))
    : []

  return (
    <>
      <Title order={1}>Treinos</Title>

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
            onChange={(value) => value && form.setFieldValue('treino', value)}
            data={[
              { value: 'peito', label: 'Peito' },
              { value: 'costa', label: 'Costa' },
              { value: 'ombro', label: 'Ombro' }
            ]}
          />

          <MultiSelect
            sx={(theme) => ({
              label: { marginBottom: theme.spacing.xs }
            })}
            label="Selecione o tipo de exercício"
            placeholder="Selecione o tipo de exercício"
            disabled={!form.values.treino}
            onChange={(value) =>
              value && form.setFieldValue('exercicios', [...value])
            }
            data={getValueBasedTreinoValue}
          />
        </Flex>
      </SimpleGrid>
    </>
  )
}
