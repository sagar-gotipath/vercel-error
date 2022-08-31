import Image from 'next/image'
import CenterWrapper from '../shared/CenterWrapper'
import ContainerVertical from '../shared/ContainerVertical'
import SectionTitle from '../shared/SectionTitle'

export default function Section1Wrapper({ title, description, children }) {
  return (
    <ContainerVertical>
      <CenterWrapper>
        <SectionTitle title={title} description={description}></SectionTitle>

        {children}
      </CenterWrapper>
    </ContainerVertical>
  )
}
