'use client'
import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

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
  const { data: session, status } = useSession()
  
  return (
    <header className="py-6 px-10 grid top-0 w-full justify-between bg-azul items-center">
      <nav>
        <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          {links.map(({ label, route }) => (
            <li key={route}>
              {status === 'authenticated' ? (
                label === 'Inicia sesión' ? (
                  <div className="flex px-4 py-2 gap-4">
                  { session.user.image?
                    <img className="w-[30px]" src={session.user.image} /> : ""}
                    <p>{session.user.name}</p>
                    <Link href="#" onClick={signOut}>Cerrar Sesion</Link>
                  </div>
                ) : (
                  label === 'Regístrate' ? (
                    ""
                  ) :  (<Link href={route}>{label}</Link>)
                )
              ) : (
                <Link href={route}>{label}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )

}
