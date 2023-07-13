export default function Signin (){
    return(
        <div>
            <br />
        <h1>Esto es el Signin</h1>
        <form >
          <label>
            Nombre:
            <input type="text" name="nombre"  />
          </label>
          <br />
          <label>
            Apellido:
            <input type="text" name="apellido"/>
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email"  />
          </label>
          <br />
          <label>
            Contraseña:
            <input type="password" name="password"  />
          </label>
          <br />
          <label>
            Confirmar Contraseña:
            <input type="password" name="confirmPassword" />
          </label>
          <br />
          <button type="submit">Registrarse</button>
        </form>
      </div>
    )
}