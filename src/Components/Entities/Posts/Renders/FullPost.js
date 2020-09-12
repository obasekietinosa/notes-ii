import React from 'react'
import Helmet from 'react-helmet'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'
import SocialShare from 'Components/Utilities/SocialShare/SocialShare'
import SyntaxHighlight from 'Components/Utilities/SyntaxHighlight/SyntaxHighlight'
import { htmlDecode } from 'Helpers/Helpers'
import './FullPost.css'

export default function FullPost({ post }) {
  return (
    <div className="FullPost">
      <Helmet>
        <title>{htmlDecode(post.title.rendered)} - WeTalkSound</title>
        <meta name="description" content={post.excerpt.rendered} />
        <meta property="og:title" content={`${htmlDecode(post.title.rendered)} - WeTalkSound`} />
        <meta property="og:description" content={post.excerpt.rendered} />
        <meta property="og:image" content={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
        <meta property="og:url" content={`https://blog.wetalksound.co/posts/${post.slug}`} />
        <meta name="twitter:title" content={`${htmlDecode(post.title.rendered)} - WeTalkSound`} />
        <meta name="twitter:description" content={post.excerpt.rendered} />
        <meta name="twitter:image" content={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <header>
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-12 col-md-6 mb-3">
              <img class="img-fluid" alt={post.title.rendered} src={post['_embedded']['wp:featuredmedia'][0]?.source_url} />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <span className="category"><small>{post['_embedded']['wp:term'][0][0].name}</small></span>
              <h1
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              >
              </h1>
              <p>
                <small>
                  <PostDate date={post.date} />
                </small>
              </p>
              <PostAuthor
                author={
                  {
                    name: post._embedded.author[0].name,
                    slug: post._embedded.author[0].slug,
                    avatar: post._embedded.author[0].avatar_urls[96],
                  }
                }
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wp-content">
              <SyntaxHighlight content={post.content.rendered} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5>Share this article:</h5>
            <SocialShare text={"Read " + htmlDecode(post.title.rendered) + " on WeTalkSound"} url={`https://blog.wetalksound.co/posts/${post.slug}`} tag={"WTS"} />
          </div>
        </div>
      </div>
    </div>
  )
}
