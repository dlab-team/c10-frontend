import React from "react"
import "./styles/globals.css"
import { Nav } from "./components/Nav/Nav"
import { Footer } from "./components/Footer/Footer"

export const metadata = {
  title: "Devsafío",
  description: "title",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="h-100vh">
        <Nav />

          <section>        
            {children}
          </section>
          
        <Footer />

      </body>
    </html>
  )
}

export default RootLayout
