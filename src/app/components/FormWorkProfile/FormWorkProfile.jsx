"use client"
import { lenguajeOptions } from "@devsafio/app/util/lenguajeOptions"
import { frameworksOptions } from "@devsafio/app/util/frameworksOptions"
import Dropdown from "../Dropdown/Dropdown"
import InfoWorkProfile from "../InfoWorkProfile/InfoWorkProfile"
import { toolsOptions } from "@devsafio/app/util/toolsOptions"
import { useEffect, useState } from "react"

const FormWorkProfile = () => {
  const [frameworksData, setFrameworksData] = useState([])
  const [lenguajeData, setLenguajeData] = useState([])
  const [toolsData, setToolsData] = useState([])
  const [others, setOthers] = useState("")

  useEffect(() => {
    const getData = async () => {
      const data = await frameworksOptions()
      setFrameworksData(data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await lenguajeOptions()
      setLenguajeData(data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      const data = await toolsOptions()
      setToolsData(data)
    }
    getData()
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <InfoWorkProfile />
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center space-y-1">
            <p className="font-sans text-base font-medium">
              <span>Lenguaje de nivel 1</span>
            </p>
            <Dropdown options={lenguajeData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork nivel 1
              </span>
            </p>
            <Dropdown options={frameworksData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 1
              </span>
            </p>
            <Dropdown options={toolsData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje de nivel 2
              </span>
            </p>
            <Dropdown options={lenguajeData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 2
              </span>
            </p>
            <Dropdown options={frameworksData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 2
              </span>
            </p>
            <Dropdown options={toolsData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje nivel 3
              </span>
            </p>
            <Dropdown options={lenguajeData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 3
              </span>
            </p>
            <Dropdown options={frameworksData} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 3
              </span>
            </p>
            <Dropdown options={toolsData} defaulValue={false} />
          </div>
          <div className="flex flex-col justify-center items-center my-4 mx-auto w-[996px]">
            <p className="mb-2 font-sans text-base font-medium text-center">
              Indicanos alguna otra competencia, herramienta o tecnología que
              conozcas que creas importante agregar:
            </p>
            <input
              type="text"
              value={others}
              onChange={(event) => setOthers(event.target.value)}
              className="mx-auto items-center border bg-sky-100 border-gray-300 rounded-md px-4 py-2 w-[996px] h-[102px] text-center"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default FormWorkProfile
