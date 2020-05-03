import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper">
      <header>
        <div style={
          {
            width: '1200px',
            margin: 'auto'
          }
        }>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            {' '}
            <Link href="/login">
              <a>Login</a>
            </Link>
            {' '}
            <Link href="/register">
              <a>Register</a>
            </Link>
            {' '}
            <Link href="/user/hello">
              <a>Hello</a>
            </Link>
          </nav>
        </div>
      </header>
  
      <div className="content" style={
        {
          width: '1200px',
          margin: '50px auto'
        }
      }>
        {children}
      </div>
  
      <footer style={
        {
          width: '1200px',
          margin: 'auto'
        }
      }>
        <span>Footer</span>
      </footer>
    </div>
    
  </>
)

export default Layout
