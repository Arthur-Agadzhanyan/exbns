import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Wrapper from '@/components/Wrapper'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar/>
      <Wrapper>
        <Header/>
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default MyApp
