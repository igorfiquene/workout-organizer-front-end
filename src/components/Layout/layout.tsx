import {
  AppShell,
  Burger,
  Container,
  Header,
  MediaQuery,
  Navbar,
  Title,
  useMantineTheme
} from '@mantine/core'
import { useState } from 'react'
import { Links } from '../Links'

import { Hind_Vadodara, Martel_Sans } from 'next/font/google'

const hind_vadodara_font = Hind_Vadodara({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700']
})

const martel_sans = Martel_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '600', '700']
})

export default function Layout({ children }: { children: JSX.Element }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)

  return (
    <main
      className={`${hind_vadodara_font.className} ${martel_sans.className}`}
    >
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
        <Container size="lg">{children}</Container>
      </AppShell>
    </main>
  )
}
