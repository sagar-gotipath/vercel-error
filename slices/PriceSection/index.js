import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import PriceWrapper from '../../components/priceSection/PriceWrapper'

const PriceSection = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />
  const priceData = slice.items.map((item) => {
    const title = <PrismicRichText field={item.title} />
    const description = <PrismicRichText field={item.description} />
    const image = item.icon.url
    return { title, description, image }
  })

  const bgColor = slice.primary.bgHexColorCode || null

  return <PriceWrapper title={title} description={description} priceData={priceData} bgColor={bgColor} />
}

export default PriceSection
