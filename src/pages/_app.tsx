import { Header } from '@/components/Header/Header'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps}: AppProps) {
  return (
    <>
      <Header />
      <div className='container'>
        <Component {...pageProps}/>
      </div>
    </>
  )
}