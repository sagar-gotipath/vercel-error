import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import FaqWrapper from '../../components/faqSection/FaqWrapper'

const FaqSection = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />
  const faq = slice.items
    .map((item) => {
      if (item.question.length > 0 && item.answer.length > 0) {
        return {
          question: <PrismicRichText field={item.question} />,
          answer: <PrismicRichText field={item.answer} />,
        }
      }
    })
    .filter((item) => item !== undefined)

  const faqMarkup = slice.items.map((item) => {
    return {
      question: item.question[0]?.text,
      answer: item.answer[0]?.text,
    }
  })
  return (
    <>
      <FaqWrapper title={title} description={description} faqData={faq} faqSchemaMarkup={faqMarkup} />
    </>
  )
}
export default FaqSection
