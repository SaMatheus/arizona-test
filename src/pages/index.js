// STYLES
import styles from '../styles/pages/Home.module.css'

// COMPONENTS
import Header from '../components/Header'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.bannerContainer}>
        <div className={styles.contentBox}>
          <h1>Take Photos Like a Pro</h1>
          <p>With only your iphone and capture app you can take stunning image li a professional Photographer</p>
          <Button>
            <img src="/icons/apple.svg" alt=""/>
            <p>Iphone App</p>
          </Button>
          <Button>
            <img src="/icons/android.svg" alt=""/>
            <p>Android App</p>
          </Button>
        </div>
      </section>
    </>
  )
}
