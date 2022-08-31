import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ContainerVertical from '../../components/shared/ContainerVertical'
import CenterWrapper from '../../components/shared/CenterWrapper'
import ThnakYou from '../../components/ThankYou'

const ThankYou = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />
  const coverImage = slice.primary?.coverImage?.url
  const bgColor = slice.primary?.bgColor || 'black'

  return <ThnakYou title={title} description={description} backgroundColor={bgColor} />
}
export default ThankYou
