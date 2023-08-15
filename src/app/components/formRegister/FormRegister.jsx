export default function FormRegister() {
  return (
    <>
      <form className="border-0 h-616 w-1104 mt-4 justify-center">
        <div className=" flex flex-col items-center space-x-1 mb-4 top-0">
          <h1 className="font-sans text-5xl font-semibold">Regístrate</h1>
        </div>
        <div className="flex flex-between space-x-1 space-y-2 content-center">
          <div className="flex flex-between items-center">
            <p className="font-sans text-2xl font-normal">Nombre:</p>
            <input
              type="text"
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </div>
          <div className="flex flex-between items-center">
            <p className="font-sans text-2xl font-normal">Apellido:</p>
            <input
              type="text"
              className="relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-indigo-950 rounded-lg"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-52">Email:</p>
            <input
              type="email"
              className="relative border bg-#e2f2fe h-12 w-[552px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>
          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-60">
              Contraseña:
            </p>
            <input
              type="password"
              className="relative border bg-#e2f2fe h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>

          <label className="flex flex-between items-center mt-5">
            <p className="font-sans text-2xl font-normal h-9 w-60">
              Confirmar Contraseña:
            </p>
            <input
              type="password"
              className="relative border bg-#e2f2fe h-12 w-[451px] top-0 left-0 border-solid border-#140b34 rounded-lg"
            />
          </label>
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
