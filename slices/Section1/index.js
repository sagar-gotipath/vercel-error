import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Section1Wrapper from '../../components/section1/Section1Wrapper'

const Section1 = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />

  return (
    <Section1Wrapper title={title} description={description}>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} className="inline-block" />
    </Section1Wrapper>
  )
}

export default Section1
