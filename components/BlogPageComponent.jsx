import parse from 'html-react-parser'
import Head from 'next/head'
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

export default function BlogPageComponent(props) {
  const router = useRouter()
  const { query } = router
  const title = props.pageTitle || 'First World-class Cloud And CDN From Bangladesh'

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center h-full py-40">
        <Loader />
      </div>
    )
  }

  return (
    <>
      {props.isDefault === true && (
        <>
          <DefaultSEO />
          <Seo title={`Gotipath | ${title}`} />
        </>
      )}
      <Head>
        <link rel="icon" href="/images/favicon_io/Gotipath-icon.png" />
        {props?.metaTags && <>{parse(props?.metaTags)}</>}
      </Head>

      {/* main content */}
      <Layout menu={props.header} footerMenu={props.footer}>
        {/* all blog posts */}

        {props.notFound === true && <PageNotFound statusCode="404" href="/blog" />}
        {props.type == 'blog-posts' && (
          <>
            <BlogsHeroSection
              bannerTitle={query.taxonomySlug ? true : false}
              title={query.taxonomySlug ? `${query.slug}: ${query.taxonomySlug}` : 'tutorial'}
              subTitle="Easy and well explaind development and sysadmin tutorials"
            />

            <BlogsWrapper
              blogPosts={props.posts?.posts}
              headerItems={props.categories}
              headerItemsParent={props.parentInfo}
              cursor={props.posts?.cursor}
              resourceRefId={props.resourceRefId || null}
              resourceRefName={props.resourceRefName || null}
            />
          </>
        )}

        {/* single blog details */}
        {props.type === 'blog-details' && (
          <>
            <SingleBlog className="bg-transparent rounded-sm" post={props.post} />
          </>
        )}

        {props.type === 'contact' && <ContactItems contactBoxItems={props.contactData} />}
        {props.type === 'contact-sales' && <ContactSales />}
      </Layout>
    </>
  )
}
