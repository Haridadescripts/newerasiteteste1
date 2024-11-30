import styles from '../../styles/Dashboard.module.css'

export default function PlayerStats({ user }) {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.statCard}>
        <h3>Informações do Jogador</h3>
        <div className={styles.statContent}>
          <div className={styles.statItem}>
            <span className={styles.label}>Nome:</span>
            <span className={styles.value}>{user?.name}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Clã:</span>
            <span className={styles.value}>{user?.clan || 'Sem clã'}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.label}>Aldeia:</span>
            <span className={styles.value}>{user?.village || 'Sem aldeia'}</span>
          </div>
        </div>
      </div>
    </div>
  )
} 