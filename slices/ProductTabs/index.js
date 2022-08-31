import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import ProductsContainer from '../../components/products/ProductsContainer'

const ProductTabs = ({ slice }) => {
  const title = <PrismicRichText field={slice.primary.title} />
  const description = <PrismicRichText field={slice.primary.description} />

  const finalProduct = slice.items.map((item) => {
    const productsArr = item.content.data.items
    return { title: item.title, items: productsArr }
  })

  const sidebarNavItem = finalProduct.map((item) => item.title)
  const navItemContent = finalProduct.map((item) => {
    const newItems = item.items.map((data) => {
      const title = <PrismicRichText field={data.title} />
      const description = <PrismicRichText field={data.description} />
      const icon = data.icon?.url
      const ctaText = data.ctaText
      const isPrice = data.isPrice
      const price = data.price
      const ctaRightText = data.ctaRightText

      return {
        title,
        description,
        icon,
        ctaText,
        isPrice,
        price,
        ctaRightText,
      }
    })
    return newItems
  })

  return (
    <>
      <ProductsContainer
        title={title}
        description={description}
        navItems={sidebarNavItem}
        navItemsContent={navItemContent}
      />
    </>
  )
}

export default ProductTabs
