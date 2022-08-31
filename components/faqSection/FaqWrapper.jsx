import Head from 'next/head'
import { Accordion } from 'react-accordion-collapsible'
import { motion, AnimatePresence } from 'framer-motion'
import { Fragment, useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import ContainerVertical from '../shared/ContainerVertical'

export default function FaqWrapper({ title, description, faqData = [], faqSchemaMarkup }) {
  const [expanded, setExpanded] = useState(false)
  let [isOpen, setIsOpen] = useState(false)

  const schemaDataLists = faqSchemaMarkup.map((item) => {
    return {
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }
  })

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'FAQPage',
    mainEntity: schemaDataLists,
  }

  return (
    <ContainerVertical>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        ></script>
      </Head>
      <CenterWrapper>
        <section className="grid items-start grid-cols-1 lg:grid-cols-3 gap-x-10">
          <article className="mb-10 lg:col-span-1 lg:mb-5">
            <Title clsName="text-center lg:text-left">{title}</Title>

            <div className="text-center lg:text-left">{description}</div>
          </article>
          <div className="lg:col-span-2">
            {faqData.map((item, index) => {
              return (
                <Disclosure
                  key={index}
                  as="article"
                  defaultOpen={index === 0}
                  className="transition duration-500 border-b-2 border-gray-200 py-7 first:pb-8 last:border-b-0 custom-answer first:pt-0"
                >
                  {({ open }) => (
                    <>
                      <Transition
                        show={true}
                        as="div"
                        enter="transition ease-out duration-1000 delay-75"
                        enterFrom="opacity-0 h-0"
                        enterTo="opacity-100 h-auto"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 h-auto"
                        leaveTo="opacity-0 h-0"
                      >
                        <Disclosure.Button
                          className={`relative text-base font-semibold cursor-pointer select-none after:content-[''] after:w-3.5 after:h-[2px] after:bg-black after:inline-block after:right-0 after:absolute after:top-1/2 after:-translate-y-1/2 before:content-[''] before:w-3 before:mx-[1px] before:h-[2px] before:bg-black before:inline-block before:right-0 before:absolute before:top-1/2 before:-translate-y-1/2  pr-10 md:pr-2 before:rotate-90 before:transition duration-300 ${
                            open && 'before:rotate-0'
                          }`}
                          as="div"
                        >
                          {item.question}
                        </Disclosure.Button>
                      </Transition>
                      <Transition
                        show={open}
                        as="div"
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Disclosure.Panel className="block pt-4 text-gray-500 duration-500">
                          {item.answer}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              )
            })}
          </div>
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}

// before:content-[''] before:w-5 before:h-[2px] before:bg-black before:inline-block before:right-0 before:absolute before:top-1/2 before:-translate-y-1/2
