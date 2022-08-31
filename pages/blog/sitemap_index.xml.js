import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

function BlogSitemapIndex() {
  return (
    <>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <sitemap>
          <loc>{process.env.NEXT_PUBLIC_BASE_URL}/blog/sitemap/post-sitemap.xml</loc>
          <lastmod>2022-08-08T08:25:28+00:00</lastmod>
        </sitemap>
        <sitemap>
          <loc>{process.env.NEXT_PUBLIC_BASE_URL}/blog/sitemap/category-sitemap.xml</loc>
          <lastmod>2022-08-08T08:25:28+00:00</lastmod>
        </sitemap>
        <sitemap>
          <loc>{process.env.NEXT_PUBLIC_BASE_URL}/blog/sitemap/post_tag-sitemap.xml</loc>
          <lastmod>2022-08-08T08:24:59+00:00</lastmod>
        </sitemap>
        <sitemap>
          <loc>{process.env.NEXT_PUBLIC_BASE_URL}/blog/sitemap/author-sitemap.xml</loc>
          <lastmod>2022-08-03T13:18:15+00:00</lastmod>
        </sitemap>
      </sitemapindex>
    </>
  )
}

const SiteMapBlogIndexs = () => null

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml')
  res.write(renderToStaticMarkup(<BlogSitemapIndex />))
  res.end()

  return {
    props: {},
  }
}

export default SiteMapBlogIndexs

// `<?xml version="1.0" encoding="UTF-8"?>`
