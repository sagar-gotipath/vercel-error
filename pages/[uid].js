import PageComponent, { getPrismicProps } from '../components/PageComponent'
import { createClient, linkResolver } from '../prismicio'
import * as prismicH from '@prismicio/helpers'

export default function Page(props) {
  return <PageComponent {...props} />
}

export async function getStaticProps(props) {
  return getPrismicProps(props)
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  const paths = pages.map((doc) => {
    return { params: { uid: prismicH.asLink(doc, linkResolver) } }
  })

  return {
    paths,
    fallback: true,
  }
}
