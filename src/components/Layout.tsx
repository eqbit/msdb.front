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
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
        </nav>
      </header>
  
      <div className="content">
        {children}
      </div>
  
      <footer>
        <span>Footer</span>
      </footer>
    </div>
    
  </>
)

export default Layout
