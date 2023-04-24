import { theme } from '@/styles/theme'
import { ThemeProvider } from 'styled-components'

export function ThemeCurrentContext({
  children
}: {
  children: JSX.Element | JSX.Element[]
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
