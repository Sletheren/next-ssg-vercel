import React from 'react'
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <h1> Welcome to my Site </h1>
      <hr />
      <h3>
        <Link href='/blog'>
          <a>Go to My Blog</a>
        </Link>
      </h3>
      <h3>
        <Link href='/articles'>
          <a>Go to My Articles</a>
        </Link>
      </h3>
    </div>
  )
}
