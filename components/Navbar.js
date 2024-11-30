import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <Link href="/dashboard">Dashboard</Link>
      <Image 
        src="/images/logo.png"
        alt="Descrição da imagem"
        width={500}
        height={300}
      />
    </nav>
  )
} 