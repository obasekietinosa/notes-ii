import React, { Component } from 'react'
// import Loading from 'Components/Utilities/Loading/Loading'
import BlogContext from 'Components/Contexts/BlogContext'

export default class CategoryList extends Component {

  componentDidMount() {
    if (! this.context.categoriesLoaded) {
      this.context.getCategories(this.props.limit)
    }
  }

  static contextType = BlogContext

  render() {
    const categories = this.context.categories ?? [];
    const Category = this.props.renderAs
    const Layout = this.props.layout.component
    return (
      <Layout {...this.props.layout.props} >
        {
          categories.map((category, key) => (
              <Category key={key} category={category} />
            )
          )
        }
      </Layout>
    )
  }
}
