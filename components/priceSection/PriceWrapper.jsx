import Card from '../shared/Card'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'
import SectionTitle from '../shared/SectionTitle'

export default function PriceWrapper({ priceData, title, description, bgColor }) {
  return (
    <ContainerVertical bgColor={bgColor}>
      <CenterWrapper>
        <SectionTitle title={title} description={description}></SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {priceData.map((item, index) => {
            return <Card {...item} key={index} />
          })}
        </div>
      </CenterWrapper>
    </ContainerVertical>
  )
}
// flex flex-col space-y-6 md:space-y-0 md:space-x-24 md:flex-row
