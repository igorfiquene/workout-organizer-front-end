import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import {
  IconBarbell,
  IconCalendarTime,
  IconDashboard
} from '@tabler/icons-react'
import Link from 'next/link'

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
  return (
    <>
      {links.map((link) => (
        <UnstyledButton
          component={Link}
          href={link.href}
          key={link.href}
          sx={(theme) => ({
            display: 'block',
            width: '100%',
            padding: theme.spacing.xs,
            borderRadius: theme.radius.sm,
            color: theme.colors.dark[0],

            '&:hover': {
              backgroundColor: theme.colors.dark[6]
            }
          })}
        >
          <Group>
            <ThemeIcon color={link.color} variant="light">
              {link.icon}
            </ThemeIcon>

            <Text size="sm">{link.label}</Text>
          </Group>
        </UnstyledButton>
      ))}
    </>
  )
}
