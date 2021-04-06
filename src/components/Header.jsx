// STYLES
import styles from '../styles/components/Header.module.css'

// ROUTER
import Link from 'next/link'

// ICONS
import { TiSocialFacebook, TiSocialTwitter, TiSocialGooglePlus } from "react-icons/ti";

const Header = () => {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.navBar}>
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