import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import {
  IconBarbell,
  IconCalendarTime,
  IconDashboard
} from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  {
    icon: <IconDashboard size="1rem" />,
    color: 'white',
    label: 'Painel',
    href: '/'
  },
  {
    icon: <IconBarbell size="1rem" />,
    color: 'white',
    label: 'Treinos',
    href: '/treinos'
  },
  {
    icon: <IconCalendarTime size="1rem" />,
    color: 'white',
    label: 'Histórico',
    href: '/historico'
  }
]

export function Links() {
  const router = useRouter()

  return (
    <>
      {links.map(({ href, color, icon, label }) => (
        <UnstyledButton
          component={Link}
          href={href}
          key={href}
          sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colors.dark[0],
            backgroundColor:
              router.pathname === href ? theme.colors.dark[6] : '',

            '&:hover': {
              backgroundColor: theme.colors.dark[6]
            }
          })}
        >
          <Group>
            <ThemeIcon color={color} variant="light">
              {icon}
            </ThemeIcon>

            <Text size="sm">{label}</Text>
          </Group>
        </UnstyledButton>
      ))}
    </>
  )
}
