import React from "react"
import "./styles/globals.css"
import { Nav } from "./components/Nav/Nav"
import { Footer } from "./components/Footer/Footer"
import { Provider } from "./components/SessionProvider/Provider"

export const metadata = {
  title: "Devsafío",
  description: "title",
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Nav />
        </Provider>

        <section className="section-container overflow-y-auto overflow-x-hidden">
          {children}
        </section>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
