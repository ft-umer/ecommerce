import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './(components)/Header'
import Footer from './(components)/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fashion eCommerce Site',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
 
  return (
    <html lang="en">
      <head>
        {/* Viewport meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className} >
       <Header/>
       <div style={{height:'100vh'}}>
       {children}
       </div>
        <Footer />
       <ToastContainer />
        </body>
    </html>
  )
}
