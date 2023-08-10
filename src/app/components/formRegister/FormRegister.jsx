export default function FormRegister() {
  return (
    <>
      <form className="border-0 h-616 w-1104 mt-4 justify-center">
        <div className="bg-white border-10 border-purple-900 rounded-2xl h-96 w-4/5 max-w-lg">
          <div className=" flex flex-col items-center mb-4 top-0">
            <h1 className="text-slate-900 text-5xl font-semibold">
              Registrate
            </h1>
          </div>
          <div className="flex flex-row content-center">
            <div className="grid content-center">
              <p className="text-neutral-800 text-2xl font-normal">Nombre:</p>
              <input
                type="text"
                className="relative h-12 w-64 top-0 left-0 bg-blue-200 border-purple-900  border-opacity-50 rounded-lg"
              />
            </div>
            <div>
              <p>Apellido:</p>
              <input type="text" placeholder=" Apellido" />
            </div>
          </div>
          <div>
            <label>
              <p>Email:</p>
              <input type="email" placeholder=" Email" />
            </label>
            <label>
              <p>Contraseña:</p>
              <input type="password" placeholder=" Password" />
            </label>

            <label>
              <p>Confirmar Contraseña:</p>
              <input type="password" placeholder=" Confirm Password" />
            </label>
          </div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </>
  )
}
