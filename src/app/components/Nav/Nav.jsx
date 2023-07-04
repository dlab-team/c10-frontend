import Link from "next/link";

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Inicia sesión',
  route: '/views/Login'

}, {
  label:'Administra la página',
  route: '/'
}, {
  label:'Regístrate',
  route:'/views/Signin'
}, {
  label: 'Contáctanos',
  route: '/'
}
] 

export function Nav (){
    return(
        <header>
        <nav>
          <ul>
            {links.map(({label, route}) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>
        </nav>
        </header>
    )
}