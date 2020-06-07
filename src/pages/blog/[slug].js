import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown/with-html'

export default function SingleBlog ({ content, meta }) {
  return (
    <article>
      <ReactMarkdown escapeHtml={false} source={content} />
    </article>
  )
}

export async function getStaticPaths () {
  const files = fs.readdirSync('src/blog')

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params: { slug } }) {
  const markdownWithMetadata = fs.readFileSync(`src/blog/${slug}.md`).toString()

  const { data, content } = matter(markdownWithMetadata)

  return {
    props: {
      content,
      meta: { ...data, updatedAt: 'X' }
    }
  }
}
