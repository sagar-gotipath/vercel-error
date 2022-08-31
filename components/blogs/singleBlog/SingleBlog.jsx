import { useState, useEffect } from 'react'
import { formatISO } from 'date-fns'
import Link from 'next/link'
import CenterWrapper from '../../shared/CenterWrapper'
import ContainerVertical from '../../shared/ContainerVertical'
import SearchForm from '../../shared/SearchForm'
import SearchInput from '../../nav/SearchInput'

export default function SingleBlog({ post = {}, className }) {
  const [mounted, setMounted] = useState(false)
  const image = post?.featuredImage?.node.sourceUrl
  const blogContent = post?.content
  const regex = /<div class="ez-toc-title-container">[^]+<\/nav><\/div>/gm
  const tableOfContent = blogContent?.match(regex)
  const newContent = blogContent?.replace(regex, '')

  const blogCategories = post?.categories?.nodes

  const blogTags = post?.tags?.nodes

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <ContainerVertical>
        <CenterWrapper>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* left sidebar */}
            <section className="col-span-1 ">
              <div className="relative hidden h-full lg:block">
                <p className="mb-2 text-zinc-900">Search tutorial or resources</p>
                <SearchInput triggerComponent={<SearchForm />} />

                <div className="sticky inset-0">
                  {/* <p className="pt-10 mb-3 font-medium capitalize text-zinc-900">Table of contents</p> */}

                  {tableOfContent && (
                    <section
                      className="mb-3 lg:pt-14 table-content"
                      dangerouslySetInnerHTML={{
                        __html: tableOfContent,
                      }}
                    ></section>
                  )}
                </div>
              </div>
            </section>

            {/* main section of the page */}
            <div className="col-span-1 lg:col-span-3">
              <div>
                <img src={image} alt="Blog image" className="w-full mb-5 rounded-md max-h-[70vh] object-cover" />
                {/* table of content for mobile */}
                {tableOfContent && (
                  <section
                    className="block mb-8 lg:pt-14 table-content lg:hidden"
                    dangerouslySetInnerHTML={{
                      __html: tableOfContent,
                    }}
                  ></section>
                )}
              </div>

              <div>
                <div className="flex space-x-2">
                  {blogCategories && <TaxonomyItems title="category" items={blogCategories} className="" />}
                  {blogTags && <TaxonomyItems title="tag" items={blogTags} className="" />}
                </div>

                <h1 className="mb-4 text-2xl font-bold">{post?.title}</h1>

                {/* author section */}
                <Link href={`/blog/author/${post?.author.node.slug}`}>
                  <div className="flex items-center mb-8 space-x-3 cursor-pointer lg:mb-4">
                    <img src={post?.author.node.avatar.url} alt="author image" className="w-8 h-8 rounded-full" />
                    <article className="flex flex-col">
                      <span className="font-medium text-zinc-900">{post?.author.node.name}</span>
                      {post?.date && (
                        <span className="text-xs text text-neutral-600">
                          {formatISO(new Date(post.date), { representation: 'date' })}
                        </span>
                      )}
                    </article>
                  </div>
                </Link>

                {/* description section */}
                {newContent && (
                  <div className="pb-8">
                    <div
                      className="mb-5 prose max-w-none prose-headings:mb-3 prose-headings:mt-5"
                      dangerouslySetInnerHTML={{
                        __html: newContent,
                      }}
                    ></div>
                  </div>
                )}

                {/* blog details call to action section */}
                <div className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-6 lg:flex-row">
                  <p className="font-medium text-zinc-900">Still looking for answer?</p>
                  <article className="border-[1px] border-slate-300 px-5 py-3 rounded-sm">
                    <Link href="#">
                      <a className="relative font-medium capitalize text-zinc-900">ask question here</a>
                    </Link>
                    <p className="text-xs">Ask qustion to the Gotipath Cloud Community</p>
                  </article>

                  <article className="border-[1px] border-slate-300 px-5 py-3 rounded-sm">
                    <Link href="#">
                      <a className="relative font-medium capitalize text-zinc-900">Open a support ticket</a>
                    </Link>
                    <p className="text-xs">If you are Gotipath Cloud user open a support ticket.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </CenterWrapper>
      </ContainerVertical>
    )
  )
}

function TaxonomyItems({ title, items }) {
  return (
    <div className="text-xs">
      <span className="capitalize">{title}: </span>
      {items.map((item, index) => {
        return (
          <Link href={`/blog/${title}/${item.slug}`} key={index}>
            <a className="after:content-[','] last:after:content-[''] text-blue-700 font-medium"> {item.name}</a>
          </Link>
        )
      })}
    </div>
  )
}

// {props.type == 'blog-posts' && (
//   <>
//     <BlogsHeroSection
//       bannerTitle={router.query.taxonomySlug ? true : false}
//       title={props.categoryName || 'tutorial'}
//       subTitle="Easy and well explaind development and sysadmin tutorials"
//     />
//     <BlogsWrapper
//       blogPosts={props.posts?.posts}
//       headerItems={props.categories}
//       cursor={props.posts?.cursor}
//       categoryId={props.id !== undefined ? props.id : null}
//     />
//   </>
// )}

// {/* single blog details */}
// {props.type === 'blog-details' && (
//   <>
//     <SingleBlog className="bg-transparent rounded-sm" post={props.post} />
//   </>
// )}
