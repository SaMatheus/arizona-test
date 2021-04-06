// STYLES
import styles from '../styles/components/Footer.module.css'

// ICONS
import { BiCopyright } from "react-icons/bi";
import { DiAndroid, DiApple, DiWindows  } from "react-icons/di";


const Footer = () => {
  return (
    <section className={styles.footerStyles}>
      <div>
        <DiAndroid />
        <DiApple />
        <DiWindows />
      </div>
      <p>
        <BiCopyright size={15}/> 2015 <strong>Pixelhint.com</strong>. All Rights Reservaded
      </p>
    </section>
  )
}

export default Footer
