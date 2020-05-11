import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useSelector } from 'react-redux';
import { Store } from '../../types/store/store';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = (
  {
    children,
    title = 'Movie Suggestion DataBase'
  }
) => {
  const { user } = useSelector((store: Store) => store);
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      
      <div className="wrapper">
        <header className="header">
          <div className="container">
            <nav className="header__nav">
              <div className="header__logo">
                <Link href="/">
                  <a className="logo">MSDB</a>
                </Link>
              </div>
              
              <div className="header-user">
                {user.isLoggedIn ? (
                  <Link href="/user/logout">
                    <a className="header-user__login">Выйти</a>
                  </Link>
                ) : (
                  <>
                    <Link href="/user/register">
                      <a className="header-user__login">Register</a>
                    </Link>
      
                    <Link href="/user/login">
                      <a className="header-user__login">Войти</a>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </header>
        
        <div className="content">
          {children}
        </div>
        
        <footer className="footer">
          <div className="container">
            <div className="footer__row">
              Movie Suggestion DataBase © 2020
            </div>
          </div>
        </footer>
      </div>
    
    </>
  );
};

export default Layout
