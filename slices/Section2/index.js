import React from 'react'
import SectionTwoWrapper from '../../components/section2/SectionTwoWrapper'

const Section2 = ({ slice }) => {
  const cardData = slice.items.map((item) => {
    return { ...item, featureHref: item.featureHref.url }
  })

  return (
    <>
      <SectionTwoWrapper cardData={cardData}></SectionTwoWrapper>
    </>
  )
}

export default Section2
