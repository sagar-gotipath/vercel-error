import Head from 'next/head'
import Link from 'next/link'
import Seo from '../components/Seo'
import CenterWrapper from '../components/shared/CenterWrapper'

export default function PageNotFound({ statusCode, href = '/' }) {
  return (
    <>
      <CenterWrapper>
        <div className="flex flex-col items-center justify-center py-10">
          <img src="/images/404.svg" alt="404 image" className="mb-28 max-w-[400px]" />
          <h1 className="mb-8 text-4xl font-semibold">
            {statusCode === 404
              ? `The page you requested could not be found.`
              : statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </h1>
          <Link href={href}>
            <a className="px-5 py-1.5 text-center text-white bg-blue-700 justify-self-center">Back to Homepage</a>
          </Link>
        </div>
      </CenterWrapper>
    </>
  )
}

// export async function getStaticProps(props) {
//   return getPrismicProps(props)
// }
