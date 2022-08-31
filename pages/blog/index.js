import { useEffect } from 'react'
import BlogPageComponent from '../../components/BlogPageComponent'
import PageComponent from '../../components/PageComponent'
import Seo from '../../components/Seo'
import { getCategoriesGQ, getWordPressProps } from '../../lib/utils/wordpress'

export default function Blogs(props) {
  return <BlogPageComponent {...props} isDefault={true} pageTitle="Blog" />
}

export async function getStaticProps(props) {
  return getWordPressProps(props)
}
