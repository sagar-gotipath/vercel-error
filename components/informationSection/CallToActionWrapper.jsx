import clsx from 'clsx'
import Link from 'next/link'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'
import LinkButton from '../shared/LinkButton'
import ScheduleButton from '../shared/ScheduleButton'

export default function CallToActionWrapper({ title, description, buttonsGroup = [] }) {
  return (
    <section className="bg-gray-900 py-14 lg:py-12">
      <CenterWrapper>
        {/* <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between"> */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <article className="mb-10 text-white lg:mb-0">
            <div className="mb-2.5 text-2xl text-center lg:text-left">{title}</div>
            <div className="text-center lg:w-4/5 lg:text-left">{description}</div>
          </article>
          <section className="flex flex-col lg:items-center lg:flex-row lg:justify-end">
            <div className="flex flex-col space-y-5 lg:flex-row lg:space-y-0 lg:space-x-5">
              {buttonsGroup.map((item, index) => {
                if (item !== undefined) {
                  if (item.image1) {
                    return <ScheduleButton {...item} key={index} />
                  } else if (item.type === 'link') {
                    return (
                      <LinkButton {...item} className="font-semibold" key={index}>
                        {item.label}
                      </LinkButton>
                    )
                  }
                }
              })}
            </div>
          </section>
        </div>
      </CenterWrapper>
    </section>
  )
}
