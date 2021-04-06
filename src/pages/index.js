// STYLES
import styles from '../styles/pages/Home.module.css'

// COMPONENTS
import Header from '../components/Header'
import Button from '../components/Button'

// ICONS
import { DiApple, DiAndroid } from "react-icons/di";
import { FiPlay } from "react-icons/fi";


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
      <section className={styles.mainContainer}>
        <div className={styles.leftContent}>
          <img src="/icons/Iphone.png" alt=""/>
        </div>
        <div className={styles.rightContent}>
          <h1>Capture unforgettable moments.</h1>
          <p>
            Sapien eleifend diam fusce primis nec curabitur semper lorem dui cras pharetra 
            consectetur cursus, ullamcorper curabitur habitant venenatis ultrices litora 
            lectus eu tempus maecenas adipiscing. 
          </p>
          <div className={styles.appParticulars}>
            <div>
              <img src="/icons/Camera.svg" alt=""/>
              <p>Elit eget pretium dapibus, eu.</p>
            </div>
            <div>
              <img src="/icons/Video Camera.svg" alt=""/>
              <p>Ligula posuere massa per, sodales.</p>
            </div>
            <div>
              <img src="/icons/Eyeball.svg" alt=""/>
              <p>Morbi quisque conubia lorem, ultrices.</p>
            </div>
            <div>
              <img src="/icons/Video Camera.svg" alt=""/>
              <p>Quis amet aptent nam, gravida.</p>
            </div>
            <div>
              <img src="/icons/Location.svg" alt=""/>
              <p>In congue curabitur convallis, tempus.</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Button>
              <FiPlay size={20}/>
              <span>Watch de Video</span>
            </Button>
            <a href="/">get the app</a>
          </div>
        </div>
      </section>
    </>
  )
}
