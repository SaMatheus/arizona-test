// STYLES
import styles from '../styles/components/Footer.module.css'

// ICONS
import { BiCopyright } from "react-icons/bi";


const Footer = () => {
  return (
    <section className={styles.footerStyles}>
      <img src="/icons/android_apple_windows.svg" alt=""/>
      <p>
        <BiCopyright size={15}/> 2015 <strong>Pixelhint.com</strong>. All Rights Reservaded
      </p>
    </section>
  )
}

export default Footer
