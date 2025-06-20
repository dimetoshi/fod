import ProfileGrid from '@/components/ProfileGrid'
import DogeGovNavComponent from '@/components/DogeGovNavComponent'

export default function Home() {
  // Optional: Customize the navigation options
  const navOptions = {
    logoText: 'DOGEGOV',
    homeUrl: '/',
    navLinks: [
      { text: 'Memes', href: 'https://t.me/+eB3Zaw8uKj84YjNh', target: '_blank' },
      { text: 'Buy/Trade', href: '/buy-trade' },
      { text: 'Doge Clock', href: '/dogeclock' },
      { text: 'Doge Compare', href: '/dogecompare' },
      { text: 'Friends of DOGE', href: '/friends-of-doge' },
      { text: 'Agent ID', href: 'https://agent.dogegov.com/', target: '_blank' },
      { text: 'Merch', href: 'https://shop.dogegov.com/', target: '_blank' },
      { text: 'BUY $DOGE', href: 'https://shop.dogegov.com/', target: '_blank', primary: true }
    ]
  }

  return (
    <main>
      {/* <DogeGovNavComponent options={navOptions} /> */}
      <ProfileGrid />
    </main>
  )
}
