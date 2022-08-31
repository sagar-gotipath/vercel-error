import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const getSitemapResponse = async (ctx, fileName) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_WP || 'https://cms.gotipath.com'

  const url = baseUrl + '/' + fileName
  const res = await fetch(baseUrl + '/' + fileName)

  const result = await res.text()

  // const result = resText.replace(/<!--.+-->/gm, '').replace(/<\?xml-stylesheet[\s\S]+?>/gm, '')

  const newResult = result
    .replaceAll(process.env.NEXT_PUBLIC_BASE_URL_WP, `${process.env.NEXT_PUBLIC_BASE_URL}/blog`)
    .replace('//cms.gotipath.com/wp-content/plugins/wordpress-seo', '')

  ctx.res.setHeader('Content-Type', 'text/xml')
  ctx.res.write(newResult)
  ctx.res.end()

  return {
    props: {},
  }
}

export default getSitemapResponse

{
  /* <loc>(.+?)<\/loc> */
}
