import getSitemapResponse from '../../../lib/utils/seo'

const SitemapBlog = () => null

export const getServerSideProps = async (ctx) => {
  const fileName = ctx.params.sitemapSlug
  return getSitemapResponse(ctx, fileName)
}

export default SitemapBlog
