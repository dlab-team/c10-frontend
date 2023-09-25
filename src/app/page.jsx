import Image from "next/image"
import Imagen from "../public/Imagen.png"
import Dev1 from "../public/aceleramos.png"
import Dev2 from "../public/acompañamos.png"
import Dev3 from "../public/potenciamos.png"
import Intro from "./components/Intro/Intro"
import Mujer from "../public/Intersect.png"

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
        <Image  className='w-64   pt-3  pb-8' src={Dev1} alt="pablita" />
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
        <Image  className='w-64   pt-3  pb-8' src={Dev2} alt="pablita" />
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
        <Image  className='w-64   pt-3  pb-8' src={Dev3} alt="pablita" />
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

      <div className="flex justify-center w-screen scrollbar-hide">
        <div className="container">
          <div className="flex flex-col lg:flex-row w-full mb-20 pt-40">
            <div className="">
              <div>
                <h1 className="mx-16 md:mx-32 text-center md:text-left text-[32px] text-[#140B34] font-[600]">
                  DEVsafiamos el sistema
                </h1>
              </div>
              <div>
                <p className="mt-16 mx-16 md:mx-32 text-center md:text-left text-[20px] text-[#232323] font-[400]">
                  ¿Escasez de talento Senior? No te preocupes, en{' '}
                  <b className="text-[#2738F5]">Devsafio</b> encontrarás el
                  talento que necesitas en nuestro programa Mentorías.
                </p>
              </div>
              <div>
                <p className="mt-10 mx-16 md:mx-32 text-center md:text-left text-[20px] text-[#232323] font-[400]">
                  Completa el formulario y te contactaremos en breve para
                  acompañarte en la búsqueda de Talento TI que necesitas.
                </p>
              </div>

              
              <Image  className='hidden lg:block mx-auto my-10 w-[443px] h-[372px]' src={Mujer} alt="pablita" />
              <p className="mx-16 md:mx-32 mt-10 text-center md:text-left text-[20px] text-[#232323] font-[700]">
                ¡Agenda una asesoría con nosotros si quieres saber más sobre
                cómo acelerar y potenciar tu próximo Talento TI!
              </p>

              <div className="flex justify-center md:justify-start md:mx-32 mt-10 mb-20 text-center md:text-left">
              <a href=""><button className="h-[68px] w-[166px] bg-[#2738F5] hover:bg-blue-600 text-[#FFFFFF] text-[24px] font-bold py-2 px-4 rounded-3xl">
                  AGENDAR
                </button></a>
              </div>
            </div>

            <div className="bg-[#140B34] h-[1040px] w-[360px] md:w-[590px] rounded-2xl mx-auto md:mx-24 -mt-4">
              <div>
                <h1 className="mx-6 md:mx-14 my-10 text-center md:text-left font-[600] text-[20px] text-[#FFFFFF] mb-6">
                  Si eres empresa y buscas talento TI, déjanos tu información en
                  este formulario. En breve te contactaremos:
                </h1>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between mx-10 md:mx-14 mt-10 font-[400]">
                <div>
                  <label
                    htmlFor="first_name"
                    className="mb-4 text-[16px] text-[#FFFFFF]"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className=" bg-[#E2F2FE] mb-3 mt-3  md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="md:ml-4 mb-4 text-[16px] text-[#FFFFFF]"
                  >
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    className="md:ml-4 bg-[#E2F2FE] mb-3 mt-3 md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:justify-between mt-2 mx-10 md:mx-14">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-4 text-[16px] font-medium text-[#FFFFFF]"
                  >
                    Email corporativo *
                  </label>
                  <input
                    type="text"
                    id="email"
                    className=" bg-[#E2F2FE] mb-3 mt-3  md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="md:ml-4 mb-4 text-[16px] font-medium text-[#FFFFFF]"
                  >
                    Número de teléfono *
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    className="md:ml-4 bg-[#E2F2FE] mb-3 mt-3  md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div>
                <label className="mt-2 mb-4 mx-10 md:mx-14 text-[16px] font-medium text-[#FFFFFF]">
                  ¿A que empresa perteneces? *
                </label>
                <input
                  type="tel"
                  id="empresa"
                  className="mx-10 md:mx-14 bg-[#E2F2FE] mb-3 mt-3  md:w-[30rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              <div className="text-center md:text-left mx-10 md:mx-14 mt-4 mb-6">
                <label className="text-[16px] font-medium text-[#FFFFFF]">
                  Cargo/área de preferencia que buscas contratar *
                </label>
              </div>

              <div className="mx-14">
                <div className="flex items-center mb-2">
                  <input type="checkbox" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Desarrollador FrontEnd</label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Desarrollador Fullstack / Backend
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Diseñador UX/UI
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Analista QA
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Desarrollador Mobile
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Datos
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1"
                  />
                  <label className="ml-6 text-[16px] font-regular text-[#FFFFFF]">
                    Otra
                  </label>
                </div>
              </div>
              <div className="mx-10 md:mx-14 mt-10 hidden md:block">
                <label className=" mb-6 text-[16px] font-medium text-[#FFFFFF]">
                  ¿Dudas? Déjalas acá!
                </label>
                <textarea
                  rows="5"
                  className="mt-3 p-2.5 w-full text-sm text-gray-900 bg-[#E2F2FE] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder=""
                ></textarea>
              </div>
                

              <div className="flex items-start mx-20 mt-2 ml-12  mb-6">
                <a href=""><button className="h-[60px] w-[137px] bg-[#575253] hover:bg-gray-200 text-[#232323] text-[24px] font-bold py-2 px-4 rounded-3xl cursor-not-allowed opacity-50">
                  ENVIAR
                </button></a>
              </div>
              <div className="text-center md:text-left mx-10 md:mx-14 mt-0 mb-6">
                <label className="text-[16px] font-medium text-[#FFFFFF]">
                Campos obligatorios *
                </label>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
