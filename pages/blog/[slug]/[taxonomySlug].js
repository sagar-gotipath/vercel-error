import BlogPageComponent from '../../../components/BlogPageComponent'
import {
  getAllAuthorForStaticPath,
  getAllTagsForStaticPath,
  getCategoriesForStaticPathGQ,
  getPostsByResourceNameAndID,
} from '../../../lib/utils/wordpress'

export default function Blog(props) {
  return <BlogPageComponent {...props} isDefault={true} pageTitle={props.categoryName} />
}

export async function getStaticProps(props) {
  return getPostsByResourceNameAndID(props)
}

// get static paths function
export async function getStaticPaths() {
  const categoryRes = await getCategoriesForStaticPathGQ()
  const tagsRes = await getAllTagsForStaticPath()
  const authorRes = await getAllAuthorForStaticPath()

  const newCategoryResult = categoryRes.category.map((item) => {
    item.titleSlug = 'category'
    return item
  })
  const newTagRes = tagsRes.tag.map((item) => {
    item.titleSlug = 'tag'
    return item
  })

  const newAuthorsResult = authorRes.authors.map((item) => {
    item.titleSlug = 'author'
    return item
  })

  const combinedPaths = newCategoryResult.concat(newTagRes, newAuthorsResult)

  const paths = combinedPaths.map((item) => {
    return { params: { taxonomySlug: `${item.slug}`, slug: item.titleSlug } }
  })

  return {
    paths,
    fallback: true,
  }
}
