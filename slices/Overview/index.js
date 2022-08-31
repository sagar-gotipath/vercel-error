import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import { PrismicText } from '@prismicio/react'
import OverviewContainer from '../../components/overviewSection/OverviewContainer'

const Overview = ({ slice }) => {
  const descriptions = slice.primary.description.map((item) => item.text)

  const link = slice.primary.CustomLink.url || null

  const linkText = slice.primary.linkText

  // const thumbnail = (
  //   <img
  //     src={slice.primary.videoThumbnail.url}
  //     alt={slice.primary.videoThumbnail.alt || 'overview image'}
  //     className="block w-full rounded-md"
  //   />
  // )

  const thumbnailDetail = {
    src: slice.primary.videoThumbnail.url,
    alt: slice.primary.videoThumbnail.alt || 'overview image',
  }

  // const modalContent={slice.primary.modalContent[0].text};

  return (
    <OverviewContainer
      overviews={descriptions}
      btnLink={link}
      btnText={linkText}
      thumbnail={thumbnailDetail}
      modalContent={slice.primary.modalContent[0]?.text}
    ></OverviewContainer>
  )
}

export default Overview
