import '../src/styles/_layout.scss'
import { Navbar,Footer } from '@/components'


export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  className='layout_body'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
