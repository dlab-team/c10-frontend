import React from "react";
import Image from "next/image";
export default function Page (){
    return(
        
        <div>
            <div className="w-full h-784 bg-azul text-white top-36">
                <div>
                    <h1 className="text-7xl w-708 h-108 top-[145px] ml-[120px]">¿Buscas talento TI?</h1>
                    <h2 className="text-4xl w-582 h-108 top-[145px] ml-[120px]">Contrata Talento TI rápido, inteligente y eficiente</h2>
                    <br></br>
                    <p className="text-xl w-712 h-90 top-[409px] ml-[120px]">Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas </p>
                    <br></br>
                    <a className="inline-block rounded border border-red-50 bg-white px-12 py-3 text-2xl  font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 ml-[120px]" href="/views/Login">
                    QUIERO CONTRATAR
                    </a>
                </div>
            </div>

            <div className="container mx-auto flex items-center justify-center top-[880px] w-full h-479 bg-white	 text-white">
                <div className="border-2 flex items-center w-1200 h-340">
                    <div>
                        <h2>¿Cómo funcionamos?</h2>
                        <p>Da click a nuestro video y en sólo 60 segundos conoce Devsafio y cómo estamos cambiando el mundo TI, acelerando y potenciando las células tecnológicas.</p>
                    </div>
                    <div>
                        <Image src="/Banner.png" alt="Funcionamos" width={556} height={340}/>
                    </div>
                </div>
            </div>
            
            
        </div>      
);
}