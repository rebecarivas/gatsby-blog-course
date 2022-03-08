import React from "react"
import propTypes from "prop-types"
import { RecommendedWrapper, RecommendedLink } from "./style"
import getThemeColor from "../../utils/getThemeColor"

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink
        to={previous.fields.slug}
        cover
        direction="left"
        bg={getThemeColor}
        className="previous"
      >
        {previous.frontmatter.title}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink
        to={next.fields.slug}
        cover
        direction="left"
        bg={getThemeColor}
        className="next"
      >
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
)

RecommendedPosts.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
