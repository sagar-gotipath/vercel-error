import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import HeroSliderWrapper from '../../components/hero_section/HeroSliderWrapper'
import LinkButton from '../../components/shared/LinkButton'
import Button from '../../components/shared/Button'
import Title from '../../components/shared/Title'

// const components = {
//     heading2: ({ children }) => {
//         <Title color="white" clsName="text-white">
//             {children}
//         </Title>;
//     },
// };

const HeroSlider = ({ slice }) => {
  const items = slice.items

  const sliderArray = items.map((item) => {
    const title = <PrismicRichText field={item.sliderWrapper.data.title} />
    const description = <PrismicRichText field={item.sliderWrapper.data.description} />
    const coverImage = item.sliderWrapper.data.coverImage.url
    const isOverlay = item.sliderWrapper.data.isOverlay || false
    const buttonGroup = item.sliderWrapper.data.slices.map((button) => {
      return {
        text: button.primary.label,
        category: button.primary.buttonType,
        href: button.primary.href?.url,
        type: button.primary.type,
        size: button.primary.size,
      }
    })

    const covertedObject = {
      title,
      description,
      coverImage,
      buttonGroup: buttonGroup,
      isOverlay,
    }

    return covertedObject
  })

  return (
    <>
      <HeroSliderWrapper sliderData={sliderArray} />
    </>
  )
}
export default HeroSlider
