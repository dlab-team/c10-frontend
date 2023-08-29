import Link from "next/link";


const links = [
  {
    label: "Inicia sesión",
    route: "/views/Login",
  },
  {
    label: "Administra la página",
    route: "/views/Form",
  },
  {
    label: "Regístrate",
    route: "/views/Signin",
  },
  {
    label: "Contáctanos",
    route: "/",
  },
]

export function Nav() {
  return (
    <header className="py-6 px-10 grid top-0 w-full justify-between bg-azul items-center">
  
      <nav>
        <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )

}
