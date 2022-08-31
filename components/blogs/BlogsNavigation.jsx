import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function BlogsNavigation({ navigationData = [] }) {
  const router = useRouter()
  const { query } = router

  const activeItem = query.slug === 'category' ? query.taxonomySlug : ''
  const blogRootPage = !query.slug ? true : false

  return (
    <nav className="flex items-center justify-center px-2 -mx-2 overflow-x-auto font-medium md:-mx-0 bg-neutral-200">
      {navigationData.map((item, index) => {
        return item.rootCategories ? (
          <Link href={`/blog`} key={index}>
            <a
              className={clsx(
                'px-3 py-2.5 hover:opacity-80 transition whitespace-nowrap',
                blogRootPage && 'text-black'
              )}
            >
              All Posts
            </a>
          </Link>
        ) : (
          <Link href={`/blog/category/${item.slug}`} key={index}>
            <a
              className={clsx(
                'px-3 py-2.5 hover:opacity-80 transition whitespace-nowrap',
                activeItem === item.slug && ''
              )}
            >
              {item.name}
            </a>
          </Link>
        )
      })}
    </nav>
  )
}
