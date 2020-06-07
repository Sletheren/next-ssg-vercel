import React from 'react'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'

const Home = ({ blogs }) => {
  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.slug}>
            <Link href={`blog/${blog.slug}`}>
              <a>{blog.meta.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps () {
  const files = fs.readdirSync(`${process.cwd()}/src/blog`)

  const blogs = files.map(filename => {
    const markdownWithMetadata = fs
      .readFileSync(`src/blog/${filename}`)
      .toString()

    const res = matter(markdownWithMetadata)

    return {
      slug: filename.replace('.md', ''),
      meta: {
        ...res.data,
        updatedAt: 'X'
      }
    }
  })

  return {
    props: {
      blogs
    }
  }
}

export default Home
