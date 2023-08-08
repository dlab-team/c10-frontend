export default function FormRegister() {
  return (
    <>
      <form>
        <div className=" flex flex-col items-center mb-4 top-0">
          <h1 className="text-slate-900 text-5xl font-semibold">Registrate</h1>
        </div>
        <div>
          <div className="grid grid-cols-4 content-center">
            <p className="text-neutral-800 text-2xl font-normal">Nombre:</p>
            <input type="text" placeholder=" Nombre" className="rec" />
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
      </form>
    </>
  )
}
