import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import Feature2Wrapper from '../../components/featureSection/Feature2Wrapper'

const Feature2 = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.sectionTitle} />
  const description = <PrismicRichText field={slice.primary.sectionDescription} />
  const backgroundColor = slice.primary.backgroundColor || 'bg-gradient-to-b from-blue-50 to-slate-50'

  const featureData = slice.items.map((item) => {
    const title = <PrismicRichText field={item.title} />
    const description = <PrismicRichText field={item.description} />
    const image = item.icon.url
    return { title, description, image }
  })

  return <Feature2Wrapper title={title} description={description} featureData={featureData} bgColor={backgroundColor} />
}

export default Feature2
