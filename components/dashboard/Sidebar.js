import Link from 'next/link'
import styles from '../../styles/Dashboard.module.css'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>Nome do Jogo</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/player/dashboard" className={styles.navItem}>
          Dashboard
        </Link>
        <Link href="/player/profile" className={styles.navItem}>
          Perfil
        </Link>
        <Link href="/player/clan" className={styles.navItem}>
          Clã
        </Link>
        <Link href="/player/village" className={styles.navItem}>
          Aldeia
        </Link>
      </nav>
    </aside>
  )
} 