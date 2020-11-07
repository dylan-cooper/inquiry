import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '2rem 1rem',
        fontSize: 70,
        lineHeight: 1,
        textAlign: 'center',
      }}
    >
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          display: 'block',
        }}
      >
        Curious Gryphs!
      </Link>
    </div>
  </div>
)

export default Header
