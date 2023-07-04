import './styles/globals.css'
import { Nav } from "./components/Nav/Nav"
export const metadata = {
  title: 'Devsafío',
  description: 'title',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  )
}
