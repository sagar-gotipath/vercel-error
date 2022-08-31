import Image from 'next/image'
import Link from 'next/link'

import CenterWrapper from '../shared/CenterWrapper'
import { FiCheck } from 'react-icons/fi'
import LinkButton from '../shared/LinkButton'
import ContainerVertical from '../shared/ContainerVertical'
import ScheduleButton from '../shared/ScheduleButton'

export default function InformationWrapper({ title, features, image, buttonGroup }) {
  return (
    <ContainerVertical>
      <CenterWrapper>
        <section className="grid items-center grid-cols-1 overflow-hidden text-white rounded-md lg:grid-cols-2 bg-purple-gray lg:space-x-16  bg-cloud-bg bg-blend-hard-light bg-[length:120%] lg:bg-[length:70%] bg-no-repeat bg-[center_160%] md:bg-[center_300px] lg:bg-[170%_center]">
          <article className="px-5 mb-24 pt-14 md:py-20 md:mb-4 lg:pl-20 md:pl-10">
            <div className="mb-8 text-4xl font-extrabold text-transparent capitalize md:!text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-mariner-400 to-purple-900 text-center md:text-left">
              {title}
            </div>
            <ul>
              {features.map((item, index) => {
                return (
                  <li className="flex items-center mb-3 text-base md:text-lg " key={index}>
                    <span className="grid w-5 h-5 mr-2 rounded-full place-items-center bg-mariner-900">
                      <FiCheck className="text-sm text-white" />
                    </span>
                    <span className="text-sm lg:text-base">{item}</span>
                  </li>
                )
              })}
            </ul>
            <section className="">
              <div className="flex flex-col mt-8 space-y-5 md:space-x-5 md:space-y-0 md:flex-row ">
                {buttonGroup.map((item, index) => {
                  if (item.image1) {
                    return <ScheduleButton {...item} key={index} />
                  } else if (item.type === 'link') {
                    return (
                      <LinkButton
                        link={item.href.url}
                        buttonType={item.buttonType}
                        key={index}
                        className="font-semibold"
                      >
                        {item.label}
                      </LinkButton>
                    )
                  }
                })}
              </div>
            </section>
          </article>
          <div className="">
            {/* <div className="w-full h-full scale-150 bg-center bg-cover md:ml-16 bg-cloud-bg"></div> */}
            <img
              src={image}
              className="w-full scale-x-90 lg:scale-125 lg:translate-x-32"
              alt={image.altText || 'dashboard image'}
            />
          </div>
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}
