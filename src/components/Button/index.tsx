import styles from './button.module.scss'
import { ButtonHTMLAttributes } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  img?: string
  alt?: string
  active?: boolean
}

const Index = ({ img, alt = 'alt', onClick, active }: IButton) => {
  return (
    <button className={styles.btn} onClick={onClick} style={{ background: active ? 'black' : '' }}>
      <img src={img} alt={alt} />
    </button>
  )
}

export default Index
