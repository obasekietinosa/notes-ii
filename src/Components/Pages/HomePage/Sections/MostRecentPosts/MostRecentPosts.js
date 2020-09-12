import React from "react"
import PostList from "Components/Entities/Posts/PostList"
import CardColumns from "Components/Utilities/Layout/Containers/CardColumns"
import PostPreviewCard from "Components/Entities/Posts/Renders/PostPreviewCard"

export default function MostRecentPosts() {
  return (
    <section className="MostRecentPosts">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center">Our Latest Articles</h4>
            <PostList
              limit={9}
              layout={{
                component: CardColumns,
                props: {}
              }}
              renderAs={PostPreviewCard}
            />
          </div>
        </div>
      </div>
    </section>
  )
}