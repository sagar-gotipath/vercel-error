import BlogPageComponent from '../../../components/BlogPageComponent'
import { getPostsGQ, getWordPressPropsPost } from '../../../lib/utils/wordpress'

export default function Blog(props) {
  const pageTitle = props.post?.title
  const meta = props.post?.seo?.fullHead

  return <BlogPageComponent {...props} pageTitle={pageTitle} metaTags={meta} />
}

export async function getStaticProps(props) {
  return getWordPressPropsPost(props)
}

export async function getStaticPaths() {
  const posts = await getPostsGQ()

  const paths = posts?.posts?.map((post) => {
    return { params: { slug: post.slug } }
  })

  return {
    paths,
    fallback: true,
  }
}
