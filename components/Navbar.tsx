import React, { Fragment } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="light-blue">
        <div className="nav-wrapper">
          <div className="container">
            <Link href="/">
              <a href="/" className="brand-logo">
                Allo Anime
              </a>
            </Link>
          </div>
          <ul className="right">
            <li>
              <Link href="/login">
                <a href="/login"> Login </a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a href="register"> Register </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
