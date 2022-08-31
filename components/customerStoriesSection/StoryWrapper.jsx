import Link from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import CenterWrapper from '../shared/CenterWrapper'
import Title from '../shared/Title'
import ContainerVertical from '../shared/ContainerVertical'

export default function StoryWrapper({ storyData, title, description }) {
  return (
    <ContainerVertical>
      <CenterWrapper>
        <article className="text-center md:text-left">
          <Title>{title}</Title>
          <div className="mb-5 text-base text-center md:text-left md:w-2/5">{description}</div>
        </article>
        <section>
          <div className="grid h-full grid-cols-1 md:grid-cols-3 gap-x-8">
            {storyData.map((item, index) => {
              if (item.isFeatured === true) {
                return (
                  <section className="w-full h-full pt-6" key={index}>
                    <Link href={item.href}>
                      <a className="block w-full mb-6">
                        <div
                          className="relative w-full h-full rounded-md lg:min-h-[450px] min-h-[375px] bg-no-repeat bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        >
                          {/* <div className="absolute inset-0 rounded-md bg-gradient-to-b from-black/30 to-black/60"></div> */}

                          <div className="absolute bottom-0 z-10 mb-5 text-xl font-semibold text-white capitalize transition drop-shadow-2xl inset-x-5 hover:-translate-y-1">
                            {item.title}
                          </div>
                        </div>
                      </a>
                    </Link>
                  </section>
                )
              }
            })}

            <section className="">
              {storyData
                .filter((item) => item.isFeatured === false)
                .map((item, index) => {
                  return (
                    <article key={index} className="border-b-[1px] border-zinc-300 pl-1 md:pl-0">
                      <Link href={item.href}>
                        <a className="flex justify-between py-6 font-semibold font-sm md:font-lg">
                          <span className="w-5/6 !text-base hover:translate-x-1 transition">{item.title}</span>
                          <span>
                            <FiExternalLink className="w-4 h-auto mt-2" />
                          </span>
                        </a>
                      </Link>
                    </article>
                  )
                })}
            </section>
          </div>
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}
