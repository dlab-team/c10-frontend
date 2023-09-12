'use client'
import Link from "next/link";
import { useSession } from "next-auth/react"

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
                  <div className="flex flex-row content-center items-center gap-2">
                    <img className="w-[40px]" src={session.user.image} />
                    <p>{session.user.name}</p>
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
