import { useState } from 'react'
import { Tab } from '@headlessui/react'
import CenterWrapper from '../shared/CenterWrapper'
import SectionTitle from '../shared/SectionTitle'
import LinkButton from '../shared/LinkButton'
import Card from '../shared/Card'
import ContainerVertical from '../shared/ContainerVertical'

export default function ProductsContainer({ title, description, navItems, navItemsContent }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <section className="bg-white md:bg-gradient-to-b from-blue-50 to-slate-50">
      <ContainerVertical>
        <CenterWrapper>
          <SectionTitle title={title} description={description}></SectionTitle>
          <Tab.Group
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
            as="section"
            className="flex flex-col lg:space-x-5 lg:flex-row"
          >
            <div className="max-w-full pr-2">
              <Tab.List className="-mx-5 overflow-auto md:-mx-0 lg:w-32 mb-7 md:pt-20">
                <div className="flex overflow-auto lg:justify-start lg:flex-col">
                  {navItems.map((item, index) => (
                    <Tab
                      key={index}
                      onChange={() => {}}
                      className={({ selected }) => {
                        return `mb-5 whitespace-nowrap text-sm text-left focus:outline-none focus:font-bold px-3 md:px-5 first:md:pl-0 lg:px-0 capitalize ${
                          selected ? 'font-bold outline-none' : 'opacity-60'
                        }`
                      }}
                    >
                      {item}
                    </Tab>
                  ))}
                </div>
              </Tab.List>
            </div>
            <Tab.Panels>
              {navItemsContent.map((item, index) => {
                return (
                  <Tab.Panel
                    key={index}
                    as="div"
                    className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-stretch place-self-stretch"
                  >
                    {item.map((ele, index) => {
                      return (
                        <div
                          key={index}
                          className={`px-5 py-7 mb-4 bg-gradient-to-b from-[#F4F6F8] to-[#FBFCFD] md:bg-gradient-to-b md:from-white md:to-white md:bg-white rounded-sm shadow-sm md:mb-0  w-full ${
                            ele.price && 'row-span-2 flex flex-col min-h-[460px] justify-between'
                          }`}
                        >
                          <ProductCard {...ele}></ProductCard>
                        </div>
                      )
                    })}
                  </Tab.Panel>
                )
              })}
            </Tab.Panels>
          </Tab.Group>
        </CenterWrapper>
      </ContainerVertical>
    </section>
  )
}

function ProductCard(props) {
  return (
    <section className={`h-full w-full flex flex-col`}>
      <Card title={props.title} description={props.description} image={props.icon} />

      {props.price && (
        <div className="mt-auto mb-8">
          <p className="mb-5">
            starts at <span className="text-lg font-semibold text-mariner-900">{props.price}</span>
            {props.ctaRightText || ' /hour'}
          </p>
          <LinkButton link={'/'}>{props.ctaText}</LinkButton>
        </div>
      )}
    </section>
  )
}
