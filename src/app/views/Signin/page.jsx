export default function Signin() {
  return (
    <div>
      <br />
      <h1>Registrate</h1>
      <form>
        <label>
          Nombre:
          <input type="text" placeholder=" Nombre" />
        </label>
        <br />
        <label>
          Apellido:
          <input type="text" placeholder=" Apellido" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" placeholder=" Email" />
        </label>
        <br />
        <label>
          Contraseña:
          <input type="password" placeholder=" Password" />
        </label>
        <br />
        <label>
          Confirmar Contraseña:
          <input type="password" placeholder=" Confirm Password" />
        </label>
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
