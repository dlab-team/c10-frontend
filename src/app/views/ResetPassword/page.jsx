"use client"
import React, { useEffect, useState } from "react"
import "../Recover/recover.css"

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("")
  const [repeatNew, setRepeatNew] = useState("")
  const [open, setOpen] = useState(false)

  const handleSunmit = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false)
      }, 3000)
    }
  }, [open])
  return (
    <div>
      <div className="contain__form">
        <section className="section__form">
          <form onSubmit={handleSunmit} className="form__account">
            <h2>Cambiar contraseña</h2>

            <label>
              <p>Ingresa la nueva contraseña.</p>

              <input
                value={newPassword}
                type="password"
                placeholder=" Nueva contraseña"
                id="email"
                onChange={(event) => setNewPassword(event.target.value)}
                className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
              />
            </label>
            <label>
              <p>Confirmar Nueva contraseña.</p>

              <input
                value={repeatNew}
                type="password"
                placeholder=" Confirmar nueva contraseña"
                id="email"
                onChange={(event) => setRepeatNew(event.target.value)}
                className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
              />
            </label>
            <div className="contain__button">
              <button
                className="flex justify-center border  mt-10 shadow-md rounded-lg px-6 pr-6 py-3 gap-2 text-black disabled:bg-gray-300 disabled:opacity-50"
                onClick={() => {
                  setOpen(true)
                  setNewPassword('')
                  setRepeatNew('')
                
                }}
              >
                Actualizar contraseña
                
              </button>
              
              {open && (
                  <div className="show__time">
                    <h1>Contraseña Actualizada correctamente</h1>
                    
                  </div>
                )}
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default ResetPassword
