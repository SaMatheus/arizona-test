// STYLES
import styles from '../styles/components/Button.module.css'

const Button = (props) => {
  return (
    <button className={styles.buttonStyles} {...props}>
      {props.children}
    </button>
  )
}

export default Button
