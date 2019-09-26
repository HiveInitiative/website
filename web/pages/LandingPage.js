import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NextSeo from 'next-seo'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import Layout from '../components/Layout'
import client from '../client'
import RenderSections from '../components/RenderSections'

const builder = imageUrlBuilder(client)
const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ...,
    content[] {
      ...,
      cta {
        ...,
        route->
      },
      ctas[] {
        ...,
        route->
      },
      toolList {
        ...,
        tools[] ->
      }
    }
  }
}
`

class LandingPage extends Component {
  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    // TODO: improve types
    disallowRobots: PropTypes.any,
    openGraphImage: PropTypes.any,
    content: PropTypes.any,
    config: PropTypes.any,
    slug: PropTypes.any,
  }

  static async getInitialProps({ query }) {
    const { slug } = query
    if (!query) {
      console.error('no query')
      return
    }
    if (slug && slug !== '/') {
      return client.fetch(pageQuery, { slug }).then(res => {
        console.log("RESPONSE", res)
        return { ...res.page, slug }
      })
    }

    // Frontpage
    if (slug && slug === '/') {
      return client
        .fetch(
          groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ...,
            content[] {
              ...,
              cta {
                ...,
                route->
              },
              ctas[] {
                ...,
                route->
              }
            }
          }
        }
      `
        )
        .then(res => {
          console.log("Frontres", res)
          return({ ...res.frontpage, slug })
        })
    }

    return null
  }

  render() {
    const {
      title = 'Missing title',
      description,
      disallowRobots,
      openGraphImage,
      content = [],
      config = {},
      slug,
    } = this.props

    const openGraphImages = generateOGImages(openGraphImage, title, description)

    return (
      <Layout config={config}>
        {/* <NextSeo
          config={{
            title,
            titleTemplate: `${config.title} | %s`,
            description,
            canonical: config.url && `${config.url}/${slug}`,
            openGraph: {
              images: openGraphImages,
            },
            noindex: disallowRobots,
          }}
        /> */}
        <span> </span>
        {content && <RenderSections sections={content} />}
      </Layout>
    )
  }
}

const generateOGImages = (openGraphImage, title, description) =>
  openGraphImage
    ? [
      {
        url: builder
          .image(openGraphImage)
          .width(800)
          .height(600)
          .url(),
        width: 800,
        height: 600,
        alt: title,
      },
      {
        // Facebook recommended size
        url: builder
          .image(openGraphImage)
          .width(1200)
          .height(630)
          .url(),
        width: 1200,
        height: 630,
        alt: title,
      },
      {
        // Square 1:1
        url: builder
          .image(openGraphImage)
          .width(600)
          .height(600)
          .url(),
        width: 600,
        height: 600,
        alt: title,
      },
    ]
    : []


export default LandingPage
