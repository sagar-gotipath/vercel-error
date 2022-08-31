import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import CallToActionWrapper from '../../components/informationSection/CallToActionWrapper'

const CallToAction = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />

  const button1 = slice.primary.button1
  const button2 = slice.primary.button2

  const buttonsArray = [button1, button2].map((btn) => {
    if (btn.data?.image1 !== undefined) {
      const { color, label, type, href, image1, image2 } = btn.data
      return {
        buttonType: btn.data.buttonType || 'link',
        color,
        label,
        type,
        href,
        image1,
        image2,
      }
    } else if (btn.data) {
      const {
        buttonType = 'button',
        color,
        label,
        type,
        href: { url: link },
      } = btn.data

      return { buttonType, color, label, type, link }
    }
  })

  return <CallToActionWrapper title={title} description={description} buttonsGroup={buttonsArray} />
}
export default CallToAction
