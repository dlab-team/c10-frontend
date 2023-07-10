import './styles/globals.css'
import { Nav } from "./components/Nav/Nav"
import { Footer } from './components/Footer/Footer'

export const metadata = {
  title: 'Devsafío',
  description: 'title',
}

export default function RootLayout({ children }) {

 return (
    <html lang="en">
        
      <body>
        <Nav />
          <section>        
            {children}
          </section>
        <Footer />
      </body>
        
    </html>
  )
}
