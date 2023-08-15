import Image from 'next/image'
import Imagen from '../public/Imagen.png'
import Intro from './components/Intro/Intro'

export default function Page () {
  return <div>
    <div className="relative w-full h-784  text-white">
        <Image
           src={Imagen}
           alt="Picture of the author"
           placeholder="blur"
           quality={100}
           fill
           sizes="100vw"
           style={{objectFit: 'cover',}}
           />
    <div className='absolute top-[145px]'>
          <h1 className="text-7xl w-708 h-108  ml-[120px]">¿Buscas talento TI?</h1>
          <h2 className="text-4xl w-582 h-108  ml-[120px]">Contrata Talento TI rápido, inteligente y eficiente</h2>
          <br></br>
          <p className="text-xl w-712 h-90 ml-[120px]">Encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas </p>
          <br></br>
          <a className="border-2 rounded-full font-extrabold  px-4 py-4 ml-[120px] top-[597px] ">QUIERO CONTRATAR</a>
    </div>  
  </div>

  <div className="container mx-auto flex items-center justify-center top-[880px] w-full h-479">
      <div className="border-2 flex items-center justify-items-stretch w-1200 h-340">
          <div className="border-2 w-1/2 p-2">
              <h1 className='text-center text-3xl font-bold'>¿Cómo funcionamos?</h1>
              <br></br>
              <p className='text-center text-2xl'>Da click a nuestro video y en sólo 60 segundos conoce Devsafio y cómo estamos cambiando el mundo TI, acelerando y potenciando las células tecnológicas.</p>
          </div>
          <div className="border-2 w-1/2 p-2">
              <Intro videoId='watch?v=S_oLr_np4S8&t=2719s'/>
          </div>
      </div>
  </div>


</div>  
}
