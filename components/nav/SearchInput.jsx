import Link from 'next/link'
import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SearchForm from '../shared/SearchForm'
import { getPostsBySearchByTerm } from '../../lib/utils/wordpress'
import clsx from 'clsx'

export default function SearchInput({ triggerComponent, className }) {
  // const [isOpen, setIsOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false)
  const [term, setTerm] = useState('')
  const [searchResult, setSearchResult] = useState([])
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleChange = (e) => {
    setTerm(e.target.value)
  }

  // useEffect(() => {
  //   console.log(term)
  //   const getSearchResult = async () => {
  //     if (term !== '') {
  //       const searchResultPosts = await getPostsBySearchByTerm(term)
  //       console.log(searchResultPosts)
  //       setSearchResult(searchResultPosts)
  //     }
  //   }
  //   getSearchResult()
  // }, [term])

  return (
    <>
      <button className="" onClick={openModal}>
        {triggerComponent}
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} as="div" className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-start justify-center min-h-full p-4 text-center lg:pt-32">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl p-6 overflow-hidden text-left transition-all transform bg-white rounded-md shadow-xl lg:min-h-[500px] ">
                  <div className={clsx(' bg-white  ', className)}>
                    <SearchForm className="" onChange={handleChange} />
                    {searchResult.length > 0 && <SearchItems items={searchResult} />}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

const SearchItems = (items = []) => {
  return (
    <>
      {items.map((item, index) => {
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
                    className="w-[200px] h-[200px] object-cover"
                  />
                </a>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}
