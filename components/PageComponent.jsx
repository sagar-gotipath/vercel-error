import parse from 'html-react-parser'
import Head from 'next/head'
import { SliceZone } from '@prismicio/react'
import { createClient } from '../prismicio'
import { components } from '../slices/'
import PageNotFound from '../pages/404'
import Loader from './shared/Loader'

import Layout from './Layout'
import { useRouter } from 'next/router'

import BlogsWrapper from './blogs/BlogsWrapper'
import BlogsHeroSection from './blogs/BlogsHeroSection'
import SingleBlog from './blogs/singleBlog/SingleBlog'
import ContactItems from './contact/Contact'
import ContactSales from './contact/ContactSales'
import Seo, { DefaultSEO } from './Seo'

export default function PageComponent(props) {
  const router = useRouter()

  const title =
    props.type === 'primary'
      ? `GotiPath
    ${props.params?.uid !== undefined && `- ${props.page?.data?.Title !== undefined && props.page?.data?.Title}`}`
      : 'Gotipath | First World-class Cloud And CDN From Bangladesh'

  const pageTitle = props.pageTitle || title

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-full py-40">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <DefaultSEO />
      <Seo title={pageTitle} additionalMetaTags={[]} />

      <Head>
        <link rel="icon" href="/images/favicon_io/Gotipath-icon.png" />
        {props.postsMeta && <>{parse(props.postsMeta)}</>}
        {props.page?.data?.isIndexed === false && <meta name="robots" content="noindex" />}
      </Head>

      {props !== null ? (
        <Layout menu={props.header} footerMenu={props.footer}>
          {props.type === 'primary' && (
            <>
              <SliceZone slices={props.page?.data?.slices} components={components} />
            </>
          )}

          {/* all blog posts */}

          {props.type === 'contact' && <ContactItems contactBoxItems={props.contactData} />}
          {props.type === 'contact-sales' && <ContactSales />}
        </Layout>
      ) : (
        <PageNotFound statusCode={404} />
      )}
    </>
  )
}

// ********************************helper functions**************************************

export async function getPrismicProps({ params, previewData }) {
  try {
    const client = createClient({ previewData })

    // fetching header, footer
    const layoutProps = await getLayoutProps().catch((err) => null)

    // fetching page slices with nested documents
    const page = await client
      .getByUID('page', params.uid, {
        fetchLinks: [
          'button.label, button.href, button.buttonType',
          'button.color',
          'button.size',
          'button.image1',
          'button.image2',
          'button.type',
          'single-slide.title',
          'single-slide.description',
          'single-slide.coverImage',
          'single-slide.isOverlay',
          'single-slide.slices',
          'product-grid.items',
        ],
      })
      .catch((err) => {
        if (err.message === 'No documents were returned') {
          return {
            props: {
              header: layoutProps.header,
              footer: layoutProps.footer,
              page: null,
              params,
              type: 'primary',
            },
          }
        }
      })

    return {
      props: {
        header: layoutProps.header,
        page,
        params,
        footer: layoutProps.footer,
        type: 'primary',
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: null,
    }
  }
}

// header footer data fetching handler
export async function getLayoutProps(previewData) {
  const client = createClient({ previewData })

  // fetching header data
  const header = await client.getByUID('menu', 'header', {
    fetchLinks: [
      'button.label',
      'button.href',
      'button.buttonType',
      'button.color',
      'button.type',
      'navigation-items.slices',
    ],
  })

  // fetching footer data
  const footer = await client.getByUID('footer-menu', 'footer')

  return {
    header,
    footer,
  }
}
