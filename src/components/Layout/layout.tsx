import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Title,
  useMantineTheme
} from '@mantine/core'
import { useState } from 'react'
import { Links } from '../Links'

export default function Layout({ children }: { children: JSX.Element }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colors.dark[8]
        }
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Links />
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Title order={3}>Workout Organizer</Title>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}
