import Image from "next/image"
import Imagen from "../public/Imagen.png"
import Dev1 from "../public/aceleramos.png"
import Dev2 from "../public/acompañamos.png"
import Dev3 from "../public/potenciamos.png"
import Intro from "./components/Intro/Intro"

export default function Page() {
    
  return (
    <div>
      <div className="relative mx-auto overflow-y-auto w-full h-784">
        <Image
          src={Imagen}
          alt="Picture of the author"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[145px] ">
          <h1 className="text-7xl w-708 h-108  ml-[120px] font-bold  text-white">
            ¿Buscas talento TI?
          </h1>
          <h2 className="text-4xl w-582 h-108  ml-[120px]  text-white">
          Contrata <span className="text-azulito">Talento TI </span> rápido, inteligente y eficiente
          </h2>
          <br></br>
          <p className="text-xl w-712 h-90 ml-[120px] text-white">
            Encontramos profesionales en 5 días y los acompañamos por 3 meses
            con tutores senior para potenciar y acelerar sus habilidades
            técnicas{" "}
          </p>
          <br></br>
          <div className="w-full flex items-center justify-center md:justify-start ml-[120px] text-3xl">
          <a>
            <button  type="button" className="  mx-2 py-2 px-4  lg:text-base font-bold text-bright-blue uppercase leading-9 bg-gray-100 rounded-3xl w-44 lg:w-52 h-14 hover:bg-bright-blue hover:text-white focus:ring-4 focus:ring-blue-300 text-azul">QUIERO CONTRATAR</button>
          </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center top-[880px] w-full h-479">
        <div className="flex items-center justify-items-stretch w-1200 h-340">
          <div className=" w-1/2 p-2">
            <h1 className="text-center text-3xl font-bold">
              ¿Cómo funcionamos?
            </h1>
            <br></br>
            <p className="text-justify text-2xl">
            Da click a nuestro video y en sólo 60 segundos conoce
            <strong style={{ color: "#2738f5" }}> Devsafio </strong>y cómo
            estamos
            <strong style={{ color: "#2738f5" }}> cambiando el mundo TI</strong>
            , acelerando y potenciando las células tecnológicas.
            </p>
          </div>
          <div className=" w-1/2 p-2">
            <Intro videoId="watch?v=S_oLr_np4S8&t=2719s" />
          </div>
        </div>
      </div>

      <div className="pb-6 bg-claro top-[1359px] w-full h-956">
        <br></br>
        <br></br>
        <div className="text-center pt-3 mx-5 px-5 ">
            <h1 className="pt-6 font-bold text-3xl">
                Sin Juniors no hay Seniors
            </h1>
            <br></br>
            <h3 className='pt-4 p-6  mx-14 text-2xl'>En este programa unimos la <b className='text-[#2738f5]'>rapidez, eficiencia y visión de un desarrollador junior</b> junto con la <b className='text-[#2738f5]'>experiencia y liderazgo de un senior TI</b>, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:</h3>
         </div>
        <div className="pb-6 grid grid-cols-3 grid-rows-1 gap-6  justify-items-center content-center  my-10 mx-5 px-10">
        <div className="w-285 h-286">
        <img  className='w-64   pt-3  pb-8' src={Dev1} alt="pablita" />
            <h1 className="text-center text-3xl font-bold">
            Aceleramos
            </h1>
            <br></br>
            <br></br>
            <p className="text-center text-2xl">
            Aceleramos el proceso de contratación. 
            Una vez que nos envíes tu necesidad de talento digital recibirás 
            un listado con los mejores candidatos en 5 días.
            </p>
        </div>
        <div className="w-285 h-286">
        <img  className='w-64   pt-3  pb-8' src={Dev2} alt="pablita" />
            <h1 className="text-center text-3xl font-bold">
            Acompañamos
            </h1>
            <br></br>
            <br></br>
            <p className="text-center text-2xl">
            Nosotros nos hacemos cargo, tú creces. 
            Todos los desarrolladores que contrates serán guiados 
            y apoyados a nivel técnico por un mentor senior TI experto en tu área sin ningún costo ($0).
            </p>
        </div>
        <div className="w-285 h-286">
        <img  className='w-64   pt-3  pb-8' src={Dev3} alt="pablita" />
            <h1 className="text-center text-3xl font-bold">
            Potenciamos
            </h1>
            <br></br>
            <br></br>
            <p className="text-center text-2xl">
            Potenciamos y retenemos el talento.
            Realizamos un seguimiento de alta calidad para potenciar
            el crecimiento y desarrollo técnico de todos los desarrolladores contratados.
            </p>
        </div>
        </div>
        
      </div>
    </div>
  )
}
