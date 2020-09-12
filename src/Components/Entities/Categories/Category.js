import React, { Component, Fragment } from 'react'
import BlogContext from 'Components/Contexts/BlogContext'
import Loading from 'Components/Utilities/Loading/Loading'
import Default from 'Components/Pages/DefaultPage/DefaultPage'

export default class Category extends Component {
  static contextType = BlogContext

  render() {
    let content = null
    let status = "CATEGORY_LOADING"
    let category = {}

    if (this.context.currentCategory?.slug === this.props.match.params.slug) {
      category = this.context.currentCategory
      status = "CATEGORY_LOADED"
    }
    else if (this.context.notFound) {
      status = "CATEGORY_NOT_FOUND"
    }
    else{
      this.context.getCategoryWithPosts(this.props.match.params.slug)
    }

    switch (status) {
      case "CATEGORY_LOADING":
        content = <Loading />
        break;
      case "CATEGORY_LOADED":
        const Category = this.props.renderAs
        const Layout = this.props.layout.component
        content = (
          <Layout {...this.props.layout.props} >
            <Category category={category} />
          </Layout>
        )
        break;
      case "CATEGORY_NOT_FOUND":
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