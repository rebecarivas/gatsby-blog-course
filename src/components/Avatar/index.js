import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { AvatarWrapper } from "./style"

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
  return <AvatarWrapper image={avatarImage.childImageSharp.gatsbyImageData} />
}
export default Avatar
