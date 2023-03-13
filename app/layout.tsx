import './globals.css'
import { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Rihanna Arts',
  description: 'The ultimate website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex min-h-screen flex-col justify-between'>
        <NavBar />
        <main className='container m-auto mt-4 px-4'>

        {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}
