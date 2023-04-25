import Layout from '@/components/Layout/layout'
import { MantineProvider } from '@mantine/core'
import { DatesProvider } from '@mantine/dates'
import 'dayjs/locale/pt-br'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DatesProvider
      settings={{ locale: 'pt-br', firstDayOfWeek: 0, weekendDays: [0] }}
    >
      <MantineProvider
        theme={{
          colorScheme: 'dark',
          fontFamily: 'Martel Sans, sans-serif',
          headings: { fontFamily: 'Hind Vadodara, sans-serif' }
        }}
        withNormalizeCSS
        withGlobalStyles
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </DatesProvider>
  )
}
