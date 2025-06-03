import DogeGovNav from '@/components/DogeGovNav'
import ProfileGrid from '@/components/ProfileGrid'

export default function Home() {
  return (
    <>
      <DogeGovNav /> {/* ✅ Use this */}
      <main>
        <ProfileGrid />
      </main>
    </>
  )
}
