// STYLES
import styles from '../styles/pages/Home.module.css'

// COMPONENTS
import Header from '../components/Header'
import Button from '../components/Button'

// ICONS
import { DiApple, DiAndroid } from "react-icons/di";

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.bannerContainer}>
        <div className={styles.contentBox}>
          <h1>Take Photos Like a Pro.</h1>
          <p>With only your iphone and capture app you can take stunning image like a Professional Photographer</p>
          <div>
            <Button>
              <DiApple />
              <span>Iphone App</span>
            </Button>
            <Button>
              <DiAndroid />
              <span>Android App</span>
            </Button>
          </div>
        </div>
      </section>
      <section className={styles.socialMediaContainer}>
        <img src="/icons/google.png" alt=""/>
        <img src="/icons/facebook.png" alt=""/>
        <img src="/icons/yahoo.png" alt=""/>
        <img src="/icons/paypal.png" alt=""/>
      </section>
    </>
  )
}
