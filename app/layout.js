import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({ subsets: ['latin'] })

export const metadata = {
  title: 'Friends of DOGE | DogeGov Memecoin',
  description: 'Meet the key figures supporting the Department of Government Efficiency (DOGE). From Elon Musk and Vivek Ramaswamy to politicians and entrepreneurs working to streamline government operations.',
  openGraph: {
    title: 'Friends of DOGE | DogeGov Memecoin',
    description: 'Meet the key figures supporting the Department of Government Efficiency (DOGE). From Elon Musk and Vivek Ramaswamy to politicians and entrepreneurs working to streamline government operations.',
    url: 'https://dogegov.com/friendsofdoge.html',
    siteName: 'DogeGov',
    images: [
      {
        url: 'https://doge-memes.b-cdn.net/doge-thumb-1200x620.jpg',
        width: 1200,
        height: 620,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friends of DOGE | DogeGov Memecoin',
    description: 'Meet the key figures supporting the Department of Government Efficiency (DOGE). From Elon Musk and Vivek Ramaswamy to politicians and entrepreneurs working to streamline government operations.',
    images: ['https://doge-memes.b-cdn.net/doge-thumb-1200x620.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${oswald.className} bg-black m-0 p-0`}>
        {children}
      </body>
    </html>
  )
}
