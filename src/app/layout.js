import AppHeader from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import constant from '@/helper/constant'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Unlock a World of Entertainment with Stream To Night',
  description: 'Stream To Night: Your ultimate destination for movies and series. Experience seamless streaming, explore a diverse catalog, and keep pace with the latest releases.',
  openGraph: {
    title: 'Stream To Night - watch movies & series online for free',
    description: 'Discover the ultimate online destination for movies and web series at Stream To Night. Explore a vast library of content, enjoy seamless streaming, and stay updated with the latest releases. Join us for an unparalleled entertainment experience!',
    url: 'https://streamtonight.online',
    siteName: 'streamtonight',
    images: [
      ...constant.HOME_META_IMG,
      {
        url: 'https://streamtonight.online/',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: 'xaXydptdJWl4igFuD0gEiW_PmLa6FDorS0O2UoQzFBo',
    other: {
      'msvalidate.01': '4329EF281E3B1FCF5290B8C366AC2E31',
    },
  },
  icons: {
    icon:'/favicon.ico'
  }
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      // className={inter.className}
      >
      <AppHeader />
        {children}
        <footer id='footer' class=" p-4">
          {/* bg-gray-800 */}
        <div class="container mx-auto text-center">
          <p>&copy; 2023 streamtonight. All rights reserved.</p>
        </div>
      </footer>
      </body>
    </html>
  )
}
