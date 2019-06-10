import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul class="posts">
      {data.allStrapiPost.edges.map(document => (
        <li class="post" key={document.node.id}>
          <div class="post__preview">
              <Img class="post__preview-image" fixed={document.node.image.childImageSharp.fixed}/>
              <div class="post__preview-text">
                <h3 class="post__title">
                  <Link to={`/${document.node.id}`}>
                    {document.node.title}
                  </Link>
                </h3>
                <p class="post__preview-content">{document.node.postpreview}</p>
              </div>
            </div>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiPost {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
          postpreview
        }
      }
    }
  }
`