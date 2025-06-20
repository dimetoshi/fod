import ProfileGrid from '@/components/ProfileGrid'
import DogeNavigation from '@/components/DogeNavigation'

export default function Home() {
  return (
    <main className="min-h-screen">
      <DogeNavigation />
      <ProfileGrid />
    </main>
  )
}
