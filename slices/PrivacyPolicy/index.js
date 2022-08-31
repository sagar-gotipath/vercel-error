import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ContainerVertical from '../../components/shared/ContainerVertical'
import CenterWrapper from '../../components/shared/CenterWrapper'

const PrivacyPolicy = ({ slice }) => {
  const privacyData = slice.items.map((item) => {
    const { sectionTitle } = item
    return sectionTitle.map((item, index) => <PrismicRichText field={[item]}></PrismicRichText>)
  })

  return (
    <ContainerVertical>
      <CenterWrapper>
        <section className="space-y-2.5">
          {privacyData.map((data) => {
            return data.map((item, index) => {
              if (item.props.field[0].type === 'paragraph') {
                return (
                  <div key={index} className="my-2">
                    {item}
                  </div>
                )
              } else {
                return <div key={index}>{item}</div>
              }
            })
          })}
        </section>
      </CenterWrapper>
    </ContainerVertical>
  )
}

export default PrivacyPolicy
