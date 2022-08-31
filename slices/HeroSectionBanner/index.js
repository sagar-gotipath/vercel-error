import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import HeroSection from '../../components/shared/HeroSection'
import HeroSlideContent from '../../components/hero_section/HeroSlideContent'
import HeroSlide from '../../components/hero_section/HeroSlide'

const HeroSectionBanner = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />
  const image = slice.primary.coverImage.url
  const isOverlay = slice.primary.isOverlay || false
  const buttonsArray = slice.items.map((btn) => {
    return { ...btn, href: btn.href.url }
  })

  return (
    <HeroSlide imageUrl={image} className="min-h-[370px] py-16" isOverlay={isOverlay}>
      <HeroSlideContent title={title} description={description} buttons={buttonsArray}></HeroSlideContent>
    </HeroSlide>
  )
}

export default HeroSectionBanner
