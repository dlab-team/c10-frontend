import { lenguajeOptions } from "@devsafio/app/util/lenguajeOptions"
import { frameworksOptions } from "@devsafio/app/util/frameworksOptions"
import Dropdown from "../Dropdown/Dropdown"
import InfoWorkProfile from "../InfoWorkProfile/InfoWorkProfile"
import { toolsOptions } from "@devsafio/app/util/toolsOptions"

const FormWorkProfile = () => {
  return (
    <>
      <h1 className="py-3 font-bold font-sans text-2xl">PERFIL LABORAL</h1>
      <InfoWorkProfile />
      <form className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center space-y-1">
            <p className="font-sans text-base font-medium">
              <span>Lenguaje de nivel 1</span>
            </p>
            <Dropdown options={lenguajeOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork nivel 1
              </span>
            </p>
            <Dropdown options={frameworksOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 1
              </span>
            </p>
            <Dropdown options={toolsOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje de nivel 2
              </span>
            </p>
            <Dropdown options={lenguajeOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 2
              </span>
            </p>
            <Dropdown options={frameworksOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 2
              </span>
            </p>
            <Dropdown options={toolsOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje nivel 3
              </span>
            </p>
            <Dropdown options={lenguajeOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 3
              </span>
            </p>
            <Dropdown options={frameworksOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 3
              </span>
            </p>
            <Dropdown options={toolsOptions} defaulValue={false} />
          </div>
          <div className="flex flex-col justify-center items-center my-4 mx-auto w-[996px]">
            <p className="mb-2 font-sans text-base font-medium text-center">
              Indicanos alguna otra competencia, herramienta o tecnología que
              conozcas que creas importante agregar:
            </p>
            <input
              type="text"
              className="mx-auto items-center border bg-sky-100 border-gray-300 rounded-md px-4 py-2 w-[996px] h-[102px] text-center"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default FormWorkProfile
