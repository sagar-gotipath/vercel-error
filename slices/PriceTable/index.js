import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import PriceContainer from '../../components/price/PriceContainer'

const PriceTable = ({ slice }) => {
  return <>{slice.primary.displayPriceSection && <PriceContainer />}</>
}

export default PriceTable
