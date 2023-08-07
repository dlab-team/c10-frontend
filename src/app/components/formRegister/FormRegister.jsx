export default function FormRegister() {
  return (
    <>
      <form>
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
            Email:
            <input type="email" placeholder=" Email" />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" placeholder=" Password" />
          </label>

          <label>
            Confirmar Contraseña:
            <input type="password" placeholder=" Confirm Password" />
          </label>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </>
  )
}
