// STYLES
import styles from '../styles/pages/Home.module.css'

// HOOKS
import { useState } from 'react'

// COMPONENTS
import Header from '../components/Header'
import Button from '../components/Button'

// ICONS
import { DiApple, DiAndroid } from "react-icons/di";
import { FiPlay } from "react-icons/fi";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

// DATA
import particularsData from '../data/particularsData';
import testimonialData from '../data/testimonialData';


export default function Home() {
  const [current, setCurrent] = useState(0)
  const length = testimonialData.length

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const handleSubmit = () => {
    alert('Email successfully sent!')
  }

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
      <section className={styles.particularsGridContainer}>
        {particularsData.map(item => {
          return (
            <div className={styles.item}>
              <img src={item.img} alt=""/>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          )
        })}
      </section>
      <section className={styles.testimonialContainer}>
        <div className={styles.testimonialCarrousel}>
        <BiLeftArrow className={styles.leftArrow} onClick={prevSlide}/>
        <BiRightArrow className={styles.rightArrow} onClick={nextSlide}/>
        {testimonialData.map((slide, index) => (
            <div key={slide.id}
              className={styles.testimony}
            >
              {index === current && (
                <>
                  <p>
                    <FaQuoteLeft />
                      {slide.testimony}
                    <FaQuoteRight />
                  </p>
                  <strong>{slide.author}</strong>
                  <span>{slide.job}</span>
                </>
              )}
              <div className={styles.carrouselIndex}>
                <span 
                  className={current === 0 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}
                  onClick={() => setCurrent(0)}
                />
                <span 
                  className={current === 1 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}
                  onClick={() => setCurrent(1)}
                />
                  <span 
                  className={current === 2 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}
                  onClick={() => setCurrent(2)}
                />
                <span 
                  className={current === 3 ? `${styles.carrouselIndexSpan} ${styles.active}` : `${styles.carrouselIndexSpan}`}
                  onClick={() => setCurrent(3)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.joinEmailContainer}>
        <h2>Join our liste and stay update</h2>
        <label htmlFor="">
          <input type="text" placeholder="Enter your email"/>
          <img src="/icons/Email.svg" onClick={handleSubmit}/>
        </label>
      </section>
      <section></section>
    </>
  )
}
