import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import { enableAutoPreviews } from '@prismicio/next'
import sm from './sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  // switch (doc.type) {
  //   case 'page':
  //     return `/${doc.uid}`
  //   case 'policyPage':
  //     return `/${doc.uid}`
  //   default:
  //     return '/'
  // }

  console.log(doc.type, doc.uid)

  if (doc.type === 'page' && doc.uid !== 'home') {
    return `/${doc.uid}`
  } else {
    return '/'
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

// sitemap generator functions

export const Client = (req = null, options = {}) =>
  createClient(endpoint, Object.assign({ routes: Router.routes }, options))

export const Router = {
  routes: [
    {
      type: 'blog-post',
      path: '/:blog?/:uid/',
      resolvers: {
        folder: 'blog',
      },
    },
  ],
  href: (type) => {
    const route = Router.routes.find((r) => r.type === type)
    return route && route.href
  },
}
