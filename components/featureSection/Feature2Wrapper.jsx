import clsx from 'clsx'
import Card from '../shared/Card'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'
import SectionTitle from '../shared/SectionTitle'

export default function Feature2Wrapper({ title, description, featureData, bgColor = '' }) {
  return (
    <ContainerVertical bgColor={bgColor}>
      <CenterWrapper>
        <div className="mb-20">
          <SectionTitle title={title} description={description}></SectionTitle>
        </div>
        <div className="grid grid-cols-1 md:gap-x-8 md:gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-8">
          {featureData.map((item, index) => {
            return (
              <article key={index} className="p-4 mb-6 md:mb-0 md:p-2">
                <Card {...item} />
              </article>
            )
          })}
        </div>
      </CenterWrapper>
    </ContainerVertical>
  )
}
