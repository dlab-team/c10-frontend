import React from "react"
import Dropdown from "../Dropdown/Dropdown"
import DropdownSimple from "../Dropdownsimple/DropdownSimple"
import ExperienceBar from "../ExperienceBar/ExperienceBar"
import { softskillOptions } from "@devsafio/app/util/softskillOptions"
import { experienceyearsOptions } from "@devsafio/app/util/experienceyearsOptions"

const FormWorkExperience = () => {
  return (
    <>
      <h1 className="py-3 font-bold font-sans text-2xl">
        EXPERIENCIA Y TRABAJO
      </h1>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center space-y-1">
            <p>URL CV (subir como documento publico)</p>
            <ExperienceBar />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="mb-2">URL de Linkedin</p>
            <ExperienceBar />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="mb-2">URL de Github</p>
            <ExperienceBar />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p className="mb-2">URL de Portafolio/sitio web</p>
            <ExperienceBar />
          </div>
        </div>
        <div className="my-4">
          <p className="mb-2 font-sans tex-xl font-semibold">
            <span>
              Explicanos en detalle algún proyecto que te enorgullece
              <br />
            </span>
            <span className="font-sans tex-xl font-normal flex justify-center">
              Describe de que trató, tu rol en el proyect y por qué lo
              elegiste(por ejemplo arquitectura de desarrollo, equipo y tu rol
              en el proyecto, tecnologias utilizadasm difiultades y soluciones,
              funcionalidades, objetivos, etc. Recuerda No esperamos link, si no
              explicación)
            </span>
          </p>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 w-full h-[102px]"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center space-y-1 w-[434px]">
            <p className="font-sans text-base font-semibold w-full">
              <span>
                Selecciona 3 habilidades blandas que te representen
                <br />
              </span>
            </p>
            <Dropdown options={softskillOptions} defaultValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1 w-[448px]">
            <p>
              <span className="flex flex-wrap font-sans text-base font-semibold w-full">
                ¿Cuántos años de experiencia laboral posees en desarrollo de
                software y/o diseño?
                <br />
              </span>
            </p>
            <div className="flex flex-initial w-full">
              <DropdownSimple
                options={experienceyearsOptions}
                defaultValue={false}
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default FormWorkExperience
