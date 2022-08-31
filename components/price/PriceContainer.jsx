import _ from 'lodash'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FiLink2, FiCheck } from 'react-icons/fi'
import priceTable from '../../data/priceTable'
import CenterWrapper from '../shared/CenterWrapper'
import Icon from '../shared/Icon'
import PriceTableWrapper, { PrimaryTable, Table } from './PriceTable'
import PriceSectionNavigation from './PriceSectionNavigation'

function useThrottle(cb, delay) {
  const options = { leading: true, trailing: false } // add custom lodash options
  const cbRef = useRef(cb)
  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => {
    cbRef.current = cb
  })
  return useCallback(
    _.throttle((...args) => cbRef.current(...args), delay, options),
    [delay]
  )
}

export default function PriceContainer() {
  const sectionRef = useRef([])

  const [activeSectionId, setActiveSectionId] = useState(null)

  const handleActiveNavWithLodash = useThrottle(() => {
    let fromTop = window.scrollY + 200

    sectionRef.current.forEach((section) => {
      if (
        activeSectionId !== section.id &&
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        setActiveSectionId(section.id)
        history.pushState({}, '', '#' + section.id)
      }
    })
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleActiveNavWithLodash)
    return () => window.removeEventListener('scroll', handleActiveNavWithLodash)
  }, [])

  return (
    <CenterWrapper>
      <section className="items-start hidden pb-16 space-x-10 lg:flex">
        <div className="sticky top-0 pt-20 pr-3">
          <PriceSectionNavigation
            activeSectionId={activeSectionId}
            setActiveSectionId={setActiveSectionId}
            navItems={priceTable}
          />
        </div>
        <div className="flex-1">
          {priceTable.map((products, index) => {
            return (
              <section id={products.id} key={index} ref={(el) => (sectionRef.current[index] = el)}>
                {/* <span className="text-xs capitalize ">{products.title}</span> */}
                {products.items.map((item, index) => {
                  return <PriceItem item={item} key={index} index={index} mainTitle={products.title} />
                })}
              </section>
            )
          })}
        </div>
      </section>

      {/* mobile */}

      <section className="block lg:hidden">
        {priceTable.map((item, index) => {
          return (
            <div key={index}>
              <article className="pt-10 mb-3">
                <Link href={`/pricing/#${item.id}`}>
                  <a className="flex items-center space-x-4 group">
                    <Icon src={item.images.active} />
                    <p
                      className={clsx(
                        'text-lg font-medium capitalize group-hover:text-blue-700 transition',
                        activeSectionId === item.id ? 'text-blue-700' : 'text-zinc-900/50',
                        activeSectionId === null && index === 0 && '!text-blue-700'
                      )}
                    >
                      {item.title}
                    </p>
                  </a>
                </Link>
              </article>
              {item.items.map((element, index) => {
                return (
                  <section id={element.id} key={index}>
                    <PriceItem item={element} />
                  </section>
                )
              })}
            </div>
          )
        })}
      </section>
    </CenterWrapper>
  )
}

// main content section component

function PriceItem({ item, index, mainTitle }) {
  const urlRef = useRef([])
  const [showAlert, setShowAlert] = useState(false)
  const { query } = useRouter()

  const URL = typeof window !== 'undefined' && window.location.origin ? window.location.origin : ''

  const handleCopy = (indexPos) => {
    const url = urlRef.current[indexPos].dataset.url
    navigator.clipboard.writeText(`${URL}${url}`)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 2500)
  }

  return (
    <section className="lg:pt-20 " id={item.id}>
      {index === 0 && <span className="text-xs capitalize">{mainTitle}</span>}
      <div className="flex items-center mb-2 space-x-4 group ">
        <h2
          className="text-2xl font-bold capitalize "
          data-url={`/${query.uid}/#${item.id}`}
          ref={(el) => (urlRef.current[index] = el)}
        >
          {item.title}
        </h2>
        <div className="relative">
          {showAlert && (
            <div className="absolute -left-1/2 bottom-full ">
              <div className="flex items-center  justify-center space-x-1.5 min-w-[170px] px-2 py-1.5 text-xs text-white capitalize rounded-sm bg-slate-800">
                <FiCheck />
                <span>copied to clipboard</span>
              </div>
            </div>
          )}
          <FiLink2
            className="w-8 h-6 transition opacity-0 cursor-pointer group-hover:opacity-100"
            onClick={() => handleCopy(index)}
            title="Copy link to this section."
          />
        </div>
      </div>
      {item.description && <p className="mb-3">{item.description}</p>}
      {item.tableType === 'primary' &&
        item.priceTables.map((item, index) => {
          return (
            <PrimaryTable tableBody={item.table} key={index} tableHeader={item.tableHeader} tableFooter={item.footer} />
          )
        })}

      {item.tableType === 'custom' &&
        item.priceTables.map((item, index) => {
          return (
            <div className="pt-6 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" key={index}>
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                {item.tableHeader && <span className="text-sm font-bold">{item.tableHeader}</span>}
                <div className="my-2 overflow-hidden border border-neutral-200 sm:rounded-lg">{item.table}</div>
                {item.footer && <span className="text-sm">*{item.footer}</span>}
              </div>
            </div>
          )
        })}
    </section>
  )
}
