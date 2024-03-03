import React from 'react'
import Article from './Article'
import blogData from '../data/blog'

function ArticleList( {posts} ) {
  const postsData = posts.map(post => {
    return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    
  })
  console.log(postsData)
  return (
    <div>
      <main>
        {postsData}
      </main>
    </div>
  )
}

export default ArticleList