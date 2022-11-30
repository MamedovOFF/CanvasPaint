import styles from './button.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  img?: string
  alt?: string
}

const Index = ({ img, alt = 'alt', onClick }: IButton) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <img src={img} alt={alt} />
    </button>
  )
}

export default Index
