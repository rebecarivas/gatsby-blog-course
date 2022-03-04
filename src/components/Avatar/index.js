import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            gatsbyImageData(width: 60, layout: FIXED)
          }
        }
      }
    `
  )
  return <GatsbyImage image={avatarImage.childImageSharp.gatsbyImageData} />
}
export default Avatar
