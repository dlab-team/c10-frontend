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

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Por favor, complete todos los campos.")
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      setError("Por favor, ingrese un correo electrónico válido.")
      return
    }

    /* try {
      const response = await fetch(
        `http://209.38.245.108:3000/auth/check-email?email=${email}`,
      )
      const data = await response.json()
      if (data.exists) {
        setError("Este correo electrónico ya está registrado.")
        return
      }
    } catch (error) {
      console.error("ocurrio un error", error)
      setError("Pagina presenta problemas, intentelo mas tarde por favor")
      return
    } */

    const response = await fetch("http://209.38.245.108:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        id_user_role: 1,
      }),
    })

    const data = await response.json()
    console.log("Datos recibidos:", data)
    const accesstoken = data.access_token
    if (accesstoken) {
      console.log("Token de acceso encontrado", accesstoken)
      //window.location.href = "/views/Form"
    } else {
      console.error("La respuesta presenta un error en el token", error)
      setError("No se puede obtener acceso.")
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
        <div className=" flex justify-between items-center mt-5">
          <div className="flex flex-between items-center">
            <p className="font-sans text-2xl font-normal">Nombre:</p>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </div>
          <div className=" flex justify-between items-center">
            <p className="font-sans text-2xl font-normal">Apellido:</p>
            <input
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-indigo-950 rounded-lg"
            />
          </div>
        </div>
        <div className=" flex justify-between items-center mt-5">
          <p className="font-sans text-2xl font-normal h-9 w-52">Email:</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="relative border bg-sky-100 h-12 w-[552px] top-0 left-0 border-solid border-#140b34 rounded-lg"
          />
        </div>
        <div className=" flex justify-between items-center mt-5">
          <p className="font-sans text-2xl font-normal h-9 w-60">Contraseña:</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="relative border bg-sky-100 h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
          />
        </div>

        <div className=" flex justify-between items-center mt-5">
          <p className="font-sans text-2xl font-normal h-9 w-60">
            Confirmar Contraseña:
          </p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            className="relative border bg-sky-100 h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
          />
        </div>
        <div className=" flex flex-col-reverse justify-center items-center mt-10">
          {error && <p className="text-red-500">{error}</p>}
          <button className="flex justify-center h-12 w-80 bg-blue-900 items-center border border-solid rounded-lg border-#140b34">
            <p className="text-white font-sans text-4xl font-normal h-9 w-60">
              Registrarse
            </p>
          </button>
        </div>
      </form>
    </>
  )
}
