import Link from "next/link"

const links = [
  {
    label: "Ingresa con tu mail",
    route: "/views/Login/Email",
  },
]

export default function LoginForm() {
  return (
    <>
      <div
        className='flex items-center justify-center p-14 backgroundRegistro min-h-full'>
        <div
          className="flex flex-col items-center justify-center gap-5 border-4 border-[#140B34] w-[80%] h-full rounded-md bg-[#FFF] pt-[51px] pb-[6%] px-[5%]"
        >
          <section className="flex flex-col items-center">
            <h1 className="text-[#140B34] text-5xl mb-[34px] font-semibold">Únete a Devsafío</h1>
            <p className="mx-[95px] font-normal text-[60w%] text-center">Crea tu cuenta profesional en Devsafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.</p>
          </section>
          <section className="flex flex-wrap-reverse justify-center gap-2">
            <button className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px] text-[#FFF] bg-[#008FF7]">Ingresa con Twitter</button>
            <button className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px] text-[#FFF] bg-[#232323]">Ingresa con GitHub</button>
            <button className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px]">Ingresa con Google</button>
            <button className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px] text-[#FFF] bg-[#140B34]">Ingresa con LinkedIn</button>
            {links.map(({ label, route }) => (
              <Link className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px]" key={route} href={route}>{label}</Link>
            ))}
          </section>
        </div>
      </div>
    </>
  )
}