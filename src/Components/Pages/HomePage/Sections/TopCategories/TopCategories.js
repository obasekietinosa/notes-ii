import React from 'react'
import CategoryList from 'Components/Entities/Categories/CategoryList'
import CategoryPreview from 'Components/Entities/Categories/Renders/CategoryPreview'
import Stack from 'Components/Utilities/Layout/Containers/Stack'

export default function TopCategories() {
  return (
    <section className="Categories">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Categories</h4>
            <CategoryList 
              limit={5}
              layout={{
                component: Stack,
                props: {}
              }}
              renderAs={CategoryPreview}
            />
          </div>
        </div>
      </div>
    </section>
  )
}