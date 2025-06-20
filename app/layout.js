import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Profile Grid',
  description: 'Profile Grid Example',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${oswald.className} bg-black m-0 p-0`}>
        {children}
      </body>
    </html>
  )
}
