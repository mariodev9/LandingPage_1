import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// AppProps for any
export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />
}
