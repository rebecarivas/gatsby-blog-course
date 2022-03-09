import React from "react"
import PropTypes from "prop-types"
import { Disqus } from "gatsby-plugin-disqus"
import { CommentsWrapper, CommentsTitle } from "./style"

const Comments = ({ url, title }) => {
  const completeURL = `https://rebecarivas.com${url}`
  const disqusConfig = {
    url: completeURL,
    identifier: completeURL,
    title: title,
  }

  return (
    <CommentsWrapper>
      <CommentsTitle>Comentários</CommentsTitle>
      <Disqus config={disqusConfig} />
    </CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments
