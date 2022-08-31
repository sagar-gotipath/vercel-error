import { DefaultSeo, NextSeo } from 'next-seo'

export default function Seo({ title, additionalMetaTags = [] }) {
  return (
    <NextSeo
      defaultTitle="Gotipath | First World-class Cloud And CDN From Bangladesh"
      title={title}
      description="Public Cloud Infrastructure (IAAS) and Global CDN and Made for Small, Medium and Large Enterprises. 24/7 Support from experienced engineers."
      canonical="https://gotipath.com/"
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
      }}
      additionalMetaTags={additionalMetaTags}
    />
  )
}

export function DefaultSEO() {
  return (
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: 'GotiPath',
      }}
      additionalMetaTags={[
        {
          property: 'og:image',
          content: 'https://gotipath.com/wp-content/uploads/2021/04/gotipath-og.png',
        },
        {
          property: 'og:image:secure_url',
          content: 'https://gotipath.com/wp-content/uploads/2021/04/gotipath-og.png',
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '628',
        },
        {
          property: 'og:image:alt',
          content: 'CDN',
        },
        {
          property: 'og:image:type',
          content: 'image/png',
        },
        {
          name: 'twitter:title',
          content: 'Gotipath | First World-class Cloud And CDN From Bangladesh',
        },
        {
          name: 'twitter:description',
          content:
            'Public Cloud Infrastructure (IAAS) and Global CDN and Made for Small, Medium & Large Enterprises. 24/7 Support from experienced engineers.',
        },
        {
          name: 'twitter:image',
          content: 'https://gotipath.com/wp-content/uploads/2021/04/gotipath-og.png',
        },
        {
          name: 'twitter:label1',
          content: 'Written by',
        },
        {
          name: 'twitter:data1',
          content: 'myadmin',
        },
        {
          name: 'twitter:label2',
          content: 'Time to read',
        },
        {
          name: 'twitter:data2',
          content: '1 minute',
        },
      ]}
      twitter={{
        handle: '@gotipath',
        site: '@gotipath',
        cardType: 'summary_large_image',
      }}
      facebook={{
        appId: '1308027799585949',
      }}
    />
  )
}
