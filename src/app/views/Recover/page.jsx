"use client"
import React, { useState } from "react"
import "./recover.css"
import Link from "next/link"

const RecoverAccount = () => {
  const [email, setEmail] = useState("")

  const handleSunmit = (e) => {
    e.preventDefault()
  }

  const handleClick = async () => {
    const response = await fetch(
      "https://c10.leonardojose.dev/auth/request-password-reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      },
    )
    if (response.status === 200) {
      console.log("solicitud exitosa")
    } else {
      console.error(response)
    }

    console.log("estos son los datos", email)
  }
  return (
    <div className="contain__form">
      <section className="section__form">
        <form onSubmit={handleSunmit} className="form__account">
          <h2>Recupera tu cuenta</h2>

          <label>
            <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>

            <input
              value={email}
              type="email"
              placeholder="Ingresa correo electronico"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
          <div className="contain__button">
            <Link href="/views/Login/Email">
              <button className="flex justify-center border border-[#000000] mt-10 shadow-md rounded-lg px-6 pr-6 py-3 gap-2 text-azul disabled:bg-gray-300 disabled:opacity-50">
                Cancelar{" "}
              </button>{" "}
            </Link>
            <Link href="/views/ResetPassword">
              <button
                className="flex justify-center border  mt-10 shadow-md rounded-lg px-6 pr-6 py-3 gap-2 text-black disabled:bg-gray-300 disabled:opacity-50"
                onClick={handleClick}
              >
                Buscar
              </button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  )
}

export default RecoverAccount
