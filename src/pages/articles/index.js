import React from 'react'
import Link from 'next/link'

export default function ArticlesPage ({ articles }) {
  return (
    <div>
      <h1>Welcome to my articles</h1>
      <ul>
        {articles.map(article => (
          <li>
            <Link href={`/articles/${article.id}`}>
              <a>{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await response.json()

  return {
    props: {
      articles
    }
  }
}
