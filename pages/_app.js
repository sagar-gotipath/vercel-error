import NextNProgress from 'nextjs-progressbar'
import { DefaultSeo } from 'next-seo'
import '../styles/globals.css'
import Link from 'next/link'
import { PrismicLink, PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import { Heading } from '../components/shared/Heading'

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale}>
      <a {...props}>{children}</a>
    </Link>
  )
}

const richTextComponents = {
  heading1: ({ children }) => (
    <Heading as="h1" className="" size="xl">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="font-bold">
      {children}
    </Heading>
  ),

  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="sm" className="">
      {children}
    </Heading>
  ),
  heading5: ({ children }) => (
    <Heading as="h5" size="xs" className="">
      {children}
    </Heading>
  ),
  heading6: ({ children }) => (
    <Heading as="h6" size="xs" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="text-base">{children}</p>,
  oList: ({ children }) => <ol className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ol>,
  oListItem: ({ children }) => <li className="pl-1 mb-1 list-decimal last:mb-0 md:pl-2">{children}</li>,
  list: ({ children }) => <ul className="pl-4 mb-7 last:mb-0 md:pl-6">{children}</ul>,
  listItem: ({ children }) => <li className="pl-1 mb-0 list-disc last:mb-0 md:pl-2">{children}</li>,
  preformatted: ({ children }) => (
    <pre className="p-4 text-sm rounded mb-7 bg-slate-100 last:mb-0 md:p-8 md:text-lg">
      <code>{children}</code>
    </pre>
  ),
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  hyperlink: ({ children, node }) => (
    <PrismicLink field={node.data} className="underline decoration-1 underline-offset-2">
      {children}
    </PrismicLink>
  ),
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={({ href, children, ...props }) => (
          <Link href={href}>
            <a {...props}>{children}</a>
          </Link>
        )}
        richTextComponents={richTextComponents}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

// text-slate-600
