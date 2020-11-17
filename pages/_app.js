import Link from 'next/link'
import { useRouter } from 'next/router'

import '../styles/tailwind.css'

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Component {...pageProps} />
    </div>
  )
}

export default App
