'use client'
import Link from "next/link"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    router.push("/views/Form", { scroll: false });
  }

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
            <button onClick={() => signIn('google')} className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px]">Ingresa con Google</button>
            <button className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px] text-[#FFF] bg-[#140B34]">Ingresa con LinkedIn</button>
            <Link href="/api/auth/signIn" className="flex justify-center border border-[#000000] shadow-md rounded-lg px-6 pr-6 py-3 w-[326px]">Ingresa con tu email</Link>
          </section>
        </div>
      </div>
    </>
  )
}
