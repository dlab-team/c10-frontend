"use client"
import React from "react"
import Dropdown from "../Dropdown/Dropdown"
import InfoWorkProfile from "../InfoWorkProfile/InfoWorkProfile"
import { useEffect, useRef, useState } from "react"

const FormWorkProfile = React.forwardRef(({ handleFormSubmitWorkProfile}, ref) => {
  const [frameworksData, setFrameworksData] = useState([])
  const [lenguajeData, setLenguajeData] = useState([])
  const [toolsData, setToolsData] = useState([])
  const [others, setOthers] = useState("")
  const [level, setLevel] = useState()
  const [idUserProfile, setIdUserProfile] = useState()
  

  useEffect(() => {
    const getData = async () => {
      try {
        const frameworksResponse = await fetch(
          "https://c10.leonardojose.dev/job/frameworks",
        )
        const frameworks = await frameworksResponse.json()
        setFrameworksData(frameworks)

        const lenguajeResponse = await fetch(
          "https://c10.leonardojose.dev/job/lenguajes",
        )
        const lenguaje = await lenguajeResponse.json()
        setLenguajeData(lenguaje)

        const toolsResponse = await fetch(
          "https://c10.leonardojose.dev/job/tools",
        )
        const tools = await toolsResponse.json()
        setToolsData(tools)
        const idUserProfileResponse = await fetch(
          "https://c10.leonardojose.dev/users",
        )
        const idUserProfile = await idUserProfileResponse.json()
        setIdUserProfile(idUserProfile)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault()
    handleFormSubmitWorkProfile(event)
    const formWorkProfileData = {
      level,
      idProgrammingLanguage: [],
      idFrameworksOrDatabase: [],
      idTools: [],
    }

    if (level === 1) {
      formWorkProfileData.idProgrammingLanguage = event.target.lenguaje.value
      formWorkProfileData.idFrameworksOrDatabase = event.target.frameworks.value
      formWorkProfileData.idTools = event.target.tools.value
    } else if (level === 2) {
      formWorkProfileData.idProgrammingLanguage = event.target.lenguaje2.value
      formWorkProfileData.idFrameworksOrDatabase =
        event.target.frameworks2.value
      formWorkProfileData.idTools = event.target.tools2.value
    } else if (level === 3) {
      formWorkProfileData.idProgrammingLanguage = event.target.lenguaje3.value
      formWorkProfileData.idFrameworksOrDatabase =
        event.target.frameworks3.value
      formWorkProfileData.idTools = event.target.tools3.value
    }

    try {
      const response = await fetch("https://c10.leonardojose.dev/job/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formWorkProfileData),
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  React.useImperativeHandle(ref, () => ({
    handleSubmit
  }))

  

  return (
    <>
      <InfoWorkProfile />
      <form onSubmit={handleSubmit} ref={ref} className="mt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center space-y-1">
            <p className="font-sans text-base font-medium">
              <span>Lenguaje de nivel 1</span>
            </p>
            <Dropdown
              options={lenguajeData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(1)
                setLenguajeData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork nivel 1
              </span>
            </p>
            <Dropdown
              options={frameworksData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(1)
                setFrameworksData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 1
              </span>
            </p>
            <Dropdown
              options={toolsData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(1)
                setToolsData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje de nivel 2
              </span>
            </p>
            <Dropdown
              options={lenguajeData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(2)
                setLenguajeData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 2
              </span>
            </p>
            <Dropdown
              options={frameworksData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(2)
                setFrameworksData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 2
              </span>
            </p>
            <Dropdown
              options={toolsData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(2)
                setToolsData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Lenguaje nivel 3
              </span>
            </p>
            <Dropdown
              options={lenguajeData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(3)
                setLenguajeData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Bases o framwork 3
              </span>
            </p>
            <Dropdown
              options={frameworksData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(3)
                setFrameworksData(value)
              }}
            />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                Herramientas nivel 3
              </span>
            </p>
            <Dropdown
              options={toolsData}
              defaulValue={false}
              onChange={(value) => {
                setLevel(3)
                setToolsData(value)
              }}
            />
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
})

export default FormWorkProfile
