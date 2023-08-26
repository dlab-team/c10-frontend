import Image from "next/image"
import Imagen from "../public/Imagen.png"
import Dev1 from "../public/Dev1.png"
import Dev2 from "../public/Dev2.png"
import Dev3 from "../public/Dev3.png"
import Intro from "./components/Intro/Intro"

export default function Page() {
    
  return (
    <div>
      <div className="relative mx-auto overflow-y-auto w-full h-784  text-white">
        <Image
          src={Imagen}
          alt="Picture of the author"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-[145px]">
          <h1 className="text-7xl w-708 h-108  ml-[120px]">
            ¿Buscas talento TI?
          </h1>
          <h2 className="text-4xl w-582 h-108  ml-[120px]">
            Contrata Talento TI rápido, inteligente y eficiente
          </h2>
          <br></br>
          <p className="text-xl w-712 h-90 ml-[120px]">
            Encontramos profesionales en 5 días y los acompañamos por 3 meses
            con tutores senior para potenciar y acelerar sus habilidades
            técnicas{" "}
          </p>
          <br></br>
          <a className="border-2 rounded-full font-extrabold  px-4 py-4 ml-[120px] top-[597px] ">
            QUIERO CONTRATAR
          </a>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center top-[880px] w-full h-479">
        <div className="flex items-center justify-items-stretch w-1200 h-340">
          <div className=" w-1/2 p-2">
            <h1 className="text-center text-3xl font-bold">
              ¿Cómo funcionamos?
            </h1>
            <br></br>
            <p className="text-center text-2xl">
              Da click a nuestro video y en sólo 60 segundos conoce Devsafio y
              cómo estamos cambiando el mundo TI, acelerando y potenciando las
              células tecnológicas.
            </p>
          </div>
          <div className=" w-1/2 p-2">
            <Intro videoId="watch?v=S_oLr_np4S8&t=2719s" />
          </div>
        </div>
      </div>

      <div className=" bg-claro lk top-[1359px] w-full h-956">
        <br></br>
        <br></br>
        <div className="ml-32  w-1200 h-204">
            <h1 className="text-center text-3xl font-bold">
                Sin Juniors no hay Seniors
            </h1>
            <br></br>
            <p className="text-2xl text-center">En este programa unimos la rapidez, eficiencia y visión de un desarrollador junior junto con la experiencia y liderazgo de un senior TI, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:</p>
         </div>
  
        <div className="flex items-center justify-center ">
        <div className="w-285 h-286">
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
