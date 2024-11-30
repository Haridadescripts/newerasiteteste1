import styles from '../../styles/Dashboard.module.css'
import Image from 'next/image'

export default function Header({ user }) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.avatar}>
          <Image 
            src="/images/default-avatar.png" 
            alt="Avatar" 
            width={40} 
            height={40} 
          />
        </div>
        <div className={styles.userDetails}>
          <h2>{user?.name}</h2>
          <span>{user?.role === 'admin' ? 'Administrador' : 'Jogador'}</span>
        </div>
      </div>
    </header>
  )
} 