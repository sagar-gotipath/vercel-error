import { Tab } from '@headlessui/react'
import { formatISO } from 'date-fns'
import Link from 'next/link'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'

export default function BlogsContent({ blogs = [] }) {
  const regex = /<div class="ez-toc-title-container">[^]*<\/div>/gm
  // const newBlogs = blogs.map((item) => {
  //   item.content = item.content.replace(regex, '')
  // })
  const featuredBlog = blogs?.find((item) => item.isFeatured === true)

  return (
    <ContainerVertical>
      <CenterWrapper>
        {/* {Object.keys(featuredBlog).length > 0 && (
          <section className="grid grid-cols-3 gap-6 mb-16">
            <img src={featuredBlog.image} alt="Blog featured image" className="w-full col-span-2" />
            <article className="flex flex-col justify-between col-span-1">
              <div>
                <span className="inline-block mb-1.5 text-blue-700 text-xs font-medium">
                  {featuredBlog.categories
                    .reduce((acc, item) => {
                      acc = acc.concat(item.title)
                      return acc
                    }, [])
                    .join(', ')}
                </span>
                <h2 className="text-2xl font-bold transition cursor-pointer hover:underline">
                  <Link href="#">
                    <a>{featuredBlog.blogTitle}</a>
                  </Link>
                </h2>
              </div>
              <div className="flex items-center pb-5 space-x-4">
                <img src={featuredBlog.authorImage} alt="Author Image" className="w-8 h-8 rounded-full" />
                <article className="flex flex-col">
                  <span className="text-base">{featuredBlog.author}</span>
                  <span className="text-xs">{featuredBlog.publishDate}</span>
                </article>
              </div>
            </article>
          </section>
        )} */}

        <section>
          {blogs.map((item, index) => {
            return (
              <div className="grid justify-between grid-cols-1 mb-12 lg:grid-cols-7 place-items-center" key={index}>
                <article className="lg:col-span-5 ">
                  <div>
                    {item.categories.nodes.map((item, index) => {
                      return (
                        <Link key={index} href={`/blog/category/${item.slug}`}>
                          <a className="text-sm font-medium text-blue-700 after:content-[','] last:after:content-[]">
                            {' '}
                            {item.name}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                  <Link href={`/blog/${item.slug}`}>
                    <div className="block w-full cursor-pointer lg:pr-6">
                      <h3 className="text-xl font-semibold mb-2.5 transition hover:underline cursor-pointer">
                        {item.title}
                      </h3>
                      <div
                        className="mb-3 prose max-w-none line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt,
                        }}
                      ></div>
                    </div>
                  </Link>
                  {/* author info */}
                  <div className="flex items-center mb-3 space-x-2 text-xs md:bottom-2 lg:mb-0">
                    <img
                      src={item.author.node.avatar.foundAvatar && item.author.node.avatar.url}
                      alt="Author Image"
                      className="w-8 h-8 rounded-full"
                    />
                    <Link href={`/blog/author/${item.author?.node?.slug}`}>
                      <a className="border-r-[1px] border-gray-200 px-2">{item.author?.node?.name}</a>
                    </Link>
                    <span>{formatISO(new Date(item.date), { representation: 'date' })}</span>
                  </div>
                </article>
                <div className="w-full lg:col-span-2 ">
                  <Link href={`/blog/${item.slug}`}>
                    <a className="w-full lg:pl-6">
                      <img
                        src={item.featuredImage?.node?.sourceUrl}
                        alt="Blog image"
                        className="w-full h-auto lg:h-[200px] object-cover"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}
