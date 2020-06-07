import React from 'react'

export default function SingleArticle ({ article }) {
  return (
    <article>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </article>
  )
}

export async function getStaticPaths () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articles = await response.json()

  const paths = articles.map(article => ({
    params: {
      id: `${article.id}`
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const article = await response.json()

  return {
    props: {
      article
    }
  }
}
