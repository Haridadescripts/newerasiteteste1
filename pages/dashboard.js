import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import styles from '../styles/Dashboard.module.css'
import Sidebar from '../components/dashboard/Sidebar'
import PlayerStats from '../components/dashboard/PlayerStats'
import Header from '../components/dashboard/Header'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // Proteção da rota
  if (status === "loading") {
    return <p>Carregando...</p>
  }

  if (status === "unauthenticated") {
    router.push("/login")
    return <p>Acesso negado. Redirecionando...</p>
  }

  return (
    <div className={styles.container}>
      <h1>Dashboard do Jogador</h1>
      
      <div className={styles.playerCard}>
        <h2>Informações do Jogador</h2>
        <div className={styles.info}>
          <p><strong>Nome:</strong> {session?.user?.name}</p>
          <p><strong>Clã:</strong> {session?.user?.clan || "Sem clã"}</p>
          <p><strong>Aldeia:</strong> {session?.user?.village || "Sem aldeia"}</p>
        </div>
      </div>

      {session?.user?.role === "admin" && (
        <div className={styles.adminSection}>
          <h2>Painel de Administração</h2>
          {/* Adicione aqui funcionalidades específicas para admin */}
        </div>
      )}
    </div>
  )
} 