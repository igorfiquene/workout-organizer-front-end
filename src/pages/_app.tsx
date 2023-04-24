import { ThemeCurrentContext } from '@/contexts/ThemeCurrentContext'
import GlobalStyle from '@/styles/globalStyle'
import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const fontInter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fontInter.className}>
      <ThemeCurrentContext>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeCurrentContext>
    </main>
  )
}
