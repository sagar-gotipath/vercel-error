import Link from 'next/link'
import Card from '../shared/Card'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'
import SectionTitle from '../shared/SectionTitle'

export default function ContactItems({ contactBoxItems }) {
  return (
    <ContainerVertical>
      <CenterWrapper>
        <SectionTitle
          title={<h2 className="text-3xl font-semibold">How can we help you?</h2>}
          description="Choose a category below so we can get back to you as soon as possible."
        ></SectionTitle>
        <section className="grid w-11/12 grid-cols-1 gap-12 mx-auto lg:grid-cols-3">
          {contactBoxItems.map((item, index) => {
            if (item.link) {
              return (
                <Link href={item.link} key={index}>
                  <div className="w-full cursor-pointer">
                    <Card
                      {...item}
                      key={index}
                      className="h-full p-5 border rounded-[2px] border-neutral-500 hover:border-blue-700 transition"
                    >
                      {item.label && (
                        <div className="px-2.5 py-[3px] text-xs bg-neutral-200 rounded-2xl flex">
                          {item.label}
                          {item.social && (
                            <div className="flex items-center pl-3 space-x-2">
                              {item.social.map((item, index) => {
                                return (
                                  <Link href={item.link} key={index}>
                                    <img src={item.icon} alt="social icon" className="w-4" />
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )}
                    </Card>
                  </div>
                </Link>
              )
            } else {
              return (
                <div className="w-full cursor-pointer" key={index}>
                  <Card {...item} key={index} className="h-full p-5 border rounded-[2px] border-neutral-500">
                    {item.label && (
                      <div className="px-2.5 py-[3px] text-xs bg-neutral-200 rounded-2xl flex">
                        {item.label}
                        {item.social && (
                          <div className="flex items-center pl-3 space-x-2">
                            {item.social.map((item, index) => {
                              return (
                                <Link href={item.link} key={index}>
                                  <img src={item.icon} alt="social icon" className="w-4" />
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </Card>
                </div>
              )
            }
          })}
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}
