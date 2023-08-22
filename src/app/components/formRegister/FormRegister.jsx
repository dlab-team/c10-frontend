import { useState } from "react"

export default function FormRegister() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      setError("Las constraseñas no coinciden")
      return
    }

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })

    if (response.ok) {
      // El registro fue exitoso
    } else {
      // El registro falló
    }
  }

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="border-0 h-616 w-1104 mt-4 justify-center"
      >
        <div className=" flex flex-col items-center space-x-1 mb-4 top-0">
          <h1 className="font-sans text-5xl font-semibold">Regístrate</h1>
        </div>
        <div className="flex flex-between space-x-1 space-y-2 content-center">
          <div className="flex flex-between items-center">
            <p className="font-sans text-2xl font-normal">Nombre:</p>
            <input
              type="text"
              id="firtName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </div>
          <div className="flex flex-between items-center">
            <p className="font-sans text-2xl font-normal">Apellido:</p>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-indigo-950 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-52">Email:</p>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="relative border bg-#e2f2fe h-12 w-[552px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>
          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-60">
              Contraseña:
            </p>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="relative border bg-#e2f2fe h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>

          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-60">
              Confirmar Contraseña:
            </p>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="relative border bg-#e2f2fe h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>
          {error && <p className="text-red-500">{error}</p>}
          <button className="flex justify-start mt-10 border border-solid rounded-lg border-#140b34">
            <p className="font-sans text-4xl font-normal h-9 w-60">
              Registrarse
            </p>
          </button>
        </div>
      </form>
    </>
  )
}
