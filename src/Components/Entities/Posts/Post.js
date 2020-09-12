import React, { Component, Fragment } from 'react'
import BlogContext from 'Components/Contexts/BlogContext'
import Loading from 'Components/Utilities/Loading/Loading'
import Default from 'Components/Pages/DefaultPage/DefaultPage'

export default class Post extends Component {
  static contextType = BlogContext

  render() {
    let content = null
    let status = "POST_LOADING"
    let post = {}

    if (this.context.currentPost?.slug === this.props.match.params.slug) {
      post = this.context.currentPost
      status = "POST_LOADED"
    }
    else if (this.context.notFound) {
      status = "POST_NOT_FOUND"
    }
    else{
      this.context.getPost(this.props.match.params.slug)
    }

    switch (status) {
      case "POST_LOADING":
        content = <Loading />
        break;
      case "POST_LOADED":
        const Post = this.props.renderAs
        const Layout = this.props.layout.component
        content = (
          <Layout {...this.props.layout.props} >
            <Post post={post} />
          </Layout>
        )
        break;
      case "POST_NOT_FOUND":
        content = <Default />
        break
      default:
        break;
    }
    return (
      <Fragment>
        { content }
      </Fragment>
    )
  }
}