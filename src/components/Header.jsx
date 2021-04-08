// STYLES
import styles from '../styles/components/Header.module.css'

// HOOKS
import { useState, useEffect } from 'react'

// ROUTER
import Link from 'next/link'

// ICONS
import { TiSocialFacebook, TiSocialTwitter, TiSocialGooglePlus } from "react-icons/ti";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Header = () => {
  const [ windowMobile, setwindowMobile ] = useState(0)
  const [ menuActive, setMenuActive ] = useState(true)

  const isMobile = windowMobile <= 450

  useEffect(() => {
    const windowWidth = window.innerWidth
    setwindowMobile(windowWidth)
  }, [ ])

  const handleClick = () => {
    setMenuActive(!menuActive)
  }

  return (
    <section className={styles.headerContainer}>
      <div className={styles.menuIcon}>
        {!menuActive ? <HiMenuAlt1 onClick={handleClick}/> : <HiX onClick={handleClick}/>}
      </div>
      <div className={menuActive ? `${styles.navBar} ${styles.navBarActive}` : styles.navBar }>
        <ul>
          <li>
            <Link href="#">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Features</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Testimonial</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <ul>
          <li>
            <Link href="/">
              <a>
                <TiSocialFacebook />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <TiSocialTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>
                <TiSocialGooglePlus />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Header