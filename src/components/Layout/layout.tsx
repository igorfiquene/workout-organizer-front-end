import { AppShell, Container, Navbar, useMantineTheme } from '@mantine/core'
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
          <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 160, lg: 200 }}>
            <Links />
          </Navbar>
        }
      >
        <Container size="lg">{children}</Container>
      </AppShell>
    </main>
  )
}
