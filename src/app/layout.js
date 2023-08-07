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
      <body>
        <Nav />
        <section className="section-container">{children}</section>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
