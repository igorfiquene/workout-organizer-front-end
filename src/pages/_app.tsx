import Layout from '@/components/Layout/layout'
import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{ colorScheme: 'dark' }}
      withNormalizeCSS
      withGlobalStyles
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}
