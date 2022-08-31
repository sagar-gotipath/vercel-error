import http from 'http'
import { getLayoutProps } from '../../components/PageComponent'

const BASE_URL_GQ = process.env.NEXT_PUBLIC_BASE_URL_GQ

const cachedData = {
  category: null,
  tag: null,
}

// graphQL queries
async function fetchAPI(query = '', { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }
  console.log('Sending graphql request')
  // WPGraphQL Plugin must be enabled
  const res = await fetch(BASE_URL_GQ, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPostsGQ() {
  try {
    const data = await fetchAPI(
      `query GetAllPosts {
        posts(where: {orderby: {field: DATE, order: DESC}}, first: 5) {
          nodes {
            author {
              node {
                avatar {
                  url
                  foundAvatar
                }
                name
                databaseId
                slug
                username
              }
            }
            date
            excerpt(format: RENDERED)
            id
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            databaseId
            title(format: RENDERED)
            content(format: RENDERED)            
            categories {
              nodes {
                count
                databaseId
                slug
                name
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
          }
        }
      }
      `
    )

    return { posts: data.posts.nodes, cursor: data.posts.pageInfo }
  } catch (error) {
    return { posts: [], cursor: null }
  }
}

export async function getCategoriesGQ() {
  try {
    const data = await fetchAPI(
      `query GetCategoriesGQ {
        categories(where: {parent: 0}) {
          nodes {
            databaseId
            name
            slug
          }
        }
      }
    `,
      {
        variables: '',
      }
    )

    const categories = [{ rootCategories: true }].concat([...data.categories.nodes])
    return categories
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getCategoriesForStaticPathGQ() {
  try {
    const data = await fetchAPI(
      `query GetCategoriesForStaticPath {
          categories(where: {order: DESC, orderby: COUNT}) {
            nodes {
              databaseId
              slug
              name
              count
            }
          }
        }
        `
    )

    return {
      category: data.categories.nodes,
    }
  } catch (error) {
    console.log(error)
    return {
      category: [],
    }
  }
}

export async function getPostGQ(slug) {
  try {
    const data = await fetchAPI(
      `query GetPost {
        post(id: "${slug}", idType: SLUG) {
          date
          categories {
            nodes {
              name
              id
              databaseId
              slug
            }
          }
          content(format: RENDERED)
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          databaseId
          slug
          title
          author {
            node {
              avatar {
                url
              }
              name
              databaseId
              slug
            }
          }
          tags {
            nodes {
              name
              slug
              databaseId
              id
            }
          }
          seo {
            fullHead
          }
        }
      }
      `,
      {
        variables: { id: slug },
      }
    )

    return {
      post: data.post,
    }
  } catch (error) {
    console.log(error)
    return {
      post: {},
    }
  }
}

export async function getCategoriesByParentGQ(id) {
  try {
    let data
    if (id) {
      data = await fetchAPI(
        `query GetCategoryByChildrenOrParent {
          category(id: "${id}", idType: SLUG) {
            name
            slug
            databaseId
            parent {
              node {
                name
                slug
                databaseId
                children {
                  nodes {
                    databaseId
                    name
                    slug
                  }
                }
              }
            }
            children {
              nodes {
                databaseId
                name
                slug
              }
            }
          }
        }
      `,
        {
          variables: { id: id },
        }
      )
    }

    console.log(data)

    let categories = []
    if (data.category.parent === null && data.category.children.nodes.length === 0) {
      categories.push({ rootCategories: true })
    }
    if (data.category.parent === null) {
      const parentInfo = {
        name: data.category.name,
        databaseId: data.category.databaseId,
        slug: data.category.slug,
      }
      categories.push(parentInfo)
      categories = categories.concat(data.category.children.nodes)
    } else {
      const parentInfo = {
        name: data.category.parent.node.name,
        databaseId: data.category.parent.node.databaseId,
        slug: data.category.parent.node.slug,
      }
      categories.push(parentInfo)
      categories = categories.concat(data.category.parent.node.children.nodes)
    }
    return categories
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getAllAuthorForStaticPath() {
  try {
    const data = await fetchAPI(`query GetAllAuthor {
      users(where: {}) {
        nodes {
          databaseId
          name
          slug
          username
          avatar {
            url
          }
        }
      }
    }`)

    return {
      authors: data.users.nodes,
    }
  } catch (error) {
    console.log(error)
    return {
      authors: [],
    }
  }
}

export async function getMorePostsGQ(cursor) {
  try {
    const data = await fetchAPI(
      `query GetAllPostsByCursor {
        posts(where: {orderby: {field: DATE, order: DESC}}, first: 5,  after: "${cursor}") {
          nodes {
            author {
              node {
                avatar {
                  url
                  foundAvatar
                }
                name
                slug
                username
                databaseId
              }
            }
            date
            excerpt(format: RENDERED)
            id
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            postId
            title(format: RENDERED)
            content(format: RENDERED)
            categories {
              nodes {
                count
                databaseId
                slug
                name
              }
            }
          }
          pageInfo {
            startCursor
            endCursor
          }
        }
      }
      `
    )

    return { posts: data.posts.nodes, cursor: data.posts.pageInfo }
  } catch (error) {
    console.log(error)
    return { posts: [], cursor: null }
  }
}

export async function getMorePostsUsingCategoryGQ(resourceName, resourceId, cursor) {
  const data = await fetchAPI(
    `query getPostsByCategoryIds {
      posts(where: {${resourceName}In: ${resourceId}}, after: "${cursor}") {
        nodes {
          author {
            node {
              avatar {
                url
                foundAvatar
              }
              name              
              databaseId
              slug
              username
            }
          }
          date
          excerpt(format: RENDERED)
          id
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          databaseId
          title(format: RENDERED)
          content(format: RENDERED)
          categories {
            nodes {
              count
              databaseId
              slug
              name
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
        }
      }
    }
    `
  )

  return { posts: data?.posts.nodes, cursor: data.posts.pageInfo }
}

export async function getAllTagsForStaticPath() {
  try {
    const data = await fetchAPI(`query GetAllTagsForStaticPath {
        tags(where: {order: DESC, orderby: COUNT}) {
          nodes {
            databaseId
            slug
            name
            count
          }
        }
      }`)

    return {
      tag: data.tags.nodes,
    }
  } catch (error) {
    console.log(error)
    return {
      tag: [],
    }
  }
}

export async function getPostsByResourceNameAndID({ params }) {
  try {
    // for header footer item

    const layoutProps = await getLayoutProps()

    const itemResourceName = params.slug === 'author' ? 'user' : params.slug

    const resource = await getPostsByResouceAndSlug(params.taxonomySlug, itemResourceName)

    console.log(resource)

    let resourceCategories
    if (itemResourceName === 'category' && params.taxonomySlug) {
      resourceCategories = await getCategoriesByParentGQ(params.taxonomySlug)
    } else {
      resourceCategories = await getCategoriesGQ()
    }

    const postsObject = {
      posts: resource[itemResourceName].posts.nodes || [],
      cursor: resource[itemResourceName].posts.pageInfo || null,
    }

    return {
      props: {
        header: layoutProps.header,
        footer: layoutProps.footer,
        posts: postsObject,
        categories: resourceCategories,
        // categories: [],
        type: 'blog-posts',
        id: resource[itemResourceName]?.databaseId || '',
        resourceRefName: resource[itemResourceName]?.name || '',
        resourceRefId: resource[itemResourceName]?.databaseId || '',
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: null,
      // {
      //   header: [],
      //   footer: [],
      //   posts: { posts: [], cursor: null },
      //   categories: [],
      //   type: 'blog-posts',
      //   id: null,
      //   resourceRefName: null,
      //   resourceRefId: null,
      // },
    }
  }
}

// handler functions

export async function getWordPressProps({ params }) {
  try {
    const layoutProps = await getLayoutProps()

    const categoriesGQ = await getCategoriesGQ()

    const postsGQ = await getPostsGQ()

    return {
      props: {
        header: layoutProps.header,
        footer: layoutProps.footer,
        posts: postsGQ,
        categories: categoriesGQ,
        type: 'blog-posts',
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: null,
    }
  }
}

export async function getWordPressPropsPost({ params, previewData }) {
  try {
    const layoutProps = await getLayoutProps(previewData)
    const singlePost = await getPostGQ(params.slug)

    if (singlePost.post === null) {
      return {
        props: {
          notFound: true,
          header: layoutProps.header,
          footer: layoutProps.footer,
        },
      }
    }
    return {
      props: {
        header: layoutProps.header,
        footer: layoutProps.footer,
        type: 'blog-details',
        post: singlePost.post,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        notFound: true,
      },
    }
  }
}

// new queries

export async function getPostsByResouceAndSlug(slug, resourceName) {
  try {
    const data = await fetchAPI(
      `query getPostsByResourceSlug {
      ${resourceName}(id: "${slug}", idType: SLUG) {
        databaseId
        slug
        name      
        posts(where: {orderby: {order: DESC, field: DATE}}, first: 5) {
          nodes {
            author {
              node {
                avatar {
                  url
                  foundAvatar
                }
                name
                databaseId
                slug
                username
              }
            }
            date
            excerpt(format: RENDERED)
            id
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            databaseId
            title(format: RENDERED)
            content(format: RENDERED)
            categories {
              nodes {
                count
                databaseId
                slug
                name
              }
            }
          }
          pageInfo {
              startCursor
              endCursor
            }
        }
              
      }
    }`,
      {
        variables: { id: slug },
      }
    )
    return data
  } catch (error) {
    return {
      [resourceName]: {
        databaseId: null,
        posts: {
          nodes: [],
          pageInfo: null,
        },
        name: null,
        slug: null,
      },
    }
  }
}

// get post using search text function

export async function getPostsBySearchByTerm(term) {
  try {
    const data = await fetchAPI(`query GetPostsBySearchTerm {
      posts(where: {search: "${term}"}) {
        nodes {
          author {
            node {
              avatar {
                url
                foundAvatar
              }
              name
              slug
              username
              databaseId
            }
          }
          date
          excerpt(format: RENDERED)
          id
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          postId
          title(format: RENDERED)
          content(format: RENDERED)
          categories {
            nodes {
              count
              databaseId
              slug
              name
            }
          }
        }
      }
    }`)

    return data.posts.nodes
  } catch (error) {
    console.log(error)
    return []
  }
}

// handle contact form
export async function createUserInquery(data) {
  try {
    // const URL = NEXT_PUBLIC_CONTACT_URL
    const URL = 'https://cms.gotipath.com/wp-json/contact-form-7/v1/contact-forms/136/feedback'
    const res = await fetch(URL, {
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      method: 'POST',
      body: data,
    })

    return res
  } catch (error) {
    console.log(error)
    throw new Error('Something went wrong. Please try again later.')
  }
}
