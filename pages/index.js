import Link from 'next/link'
import { useRouter } from 'next/router'
import { gql } from 'graphql-request'

import graphCmsClient from '../lib/graphCmsClient'

function IndexPage({ products }) {
  const router = useRouter()

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={product.id} locale={router.locale}>
            <a>
              <h1>{product.name}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps({ locale }) {
  const { products } = await graphCmsClient.request(
    gql`
      query IndexPageQuery($locale: Locale!) {
        products(locales: [$locale]) {
          id
          locale
          name
          price
          slug
        }
      }
    `,
    { locale }
  )

  return {
    props: {
      products,
    },
  }
}

export default IndexPage
