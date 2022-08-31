import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import PromotionSection from '../../components/section3/PromotionSection'

const PromotionsSection = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />

  const image = slice.primary.sectionImage.url
  const imageAltText = slice.primary.sectionImage.alt
  const btnLink = slice.primary.buttonLink?.url || null
  const btnText = slice.primary.buttonText || 'button'
  const bgColor = slice.primary.backgroundColor
  const isReversedInMobile = slice.primary.reversedInMobile
  const isFlipped = slice.primary.isFlipped

  return (
    <>
      <PromotionSection
        title={title}
        description={description}
        bgColor={bgColor}
        isReversed={isReversedInMobile}
        image={image}
        altText={imageAltText || ''}
        button={{ btnLink, btnText }}
        isFlipped={isFlipped}
      />
    </>
  )
}
export default PromotionsSection
