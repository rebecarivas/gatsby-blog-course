import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from "./style"
import Avatar from "../Avatar"

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />
        <ProfileAuthor>
          <h1>{title}</h1>
        </ProfileAuthor>
        <ProfilePosition>
          <h2>{position}</h2>
        </ProfilePosition>
      </ProfileLink>
      <ProfileDescription>
        <p>{description}</p>
      </ProfileDescription>
    </ProfileWrapper>
  )
}

export default Profile
