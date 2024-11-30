'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import styles from '../../styles/Dashboard.module.css'
import Sidebar from '../../components/dashboard/Sidebar'
import PlayerStats from '../../components/dashboard/PlayerStats'
import Header from '../../components/dashboard/Header'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <div className={styles.loading}>Carregando...</div>
  }

  if (status === "unauthenticated") {
    router.push("/login")
    return <div className={styles.loading}>Acesso negado. Redirecionando...</div>
  }

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header user={session?.user} />
        <div className={styles.content}>
          <PlayerStats user={session?.user} />
          {session?.user?.role === "admin" && (
            <div className={styles.adminPanel}>
              <h2>Painel Administrativo</h2>
            </div>
          )}
        </div>
      </main>
    </div>
  )
} 