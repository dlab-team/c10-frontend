"use client"

import axios from "axios"
import React, { useEffect, useState } from "react"
import "./infoPersonal.css"

const InfoPersonal = () => {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [apiStatus, setApiStatus] = useState([])
  const [position, setPosition] = useState([])

  useEffect(() => {
    const statusUrl = "http://209.38.245.108:3000/job/status"
    const positionUrl = "http://209.38.245.108:3000/job/position"
    axios
      .get(statusUrl)
      .then((res) => {
        setApiStatus(res.data)
      })
      .catch((err) => console.log(err))

    axios
      .get(positionUrl)
      .then((res) => {
        setPosition(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-0 h-616 w-1104 mt-4 justify-center form-info"
      >
        <div className="container__info">
          <label className="label">
            {" "}
            Nombre<span className="asterisco">*</span>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg "
            />
          </label>
          <label className="label">
            Apellido<span className="asterisco">*</span>
            <input
              required
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
          <label className="label">
            Email<span className="asterisco">*</span>
            <input
              required
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
          <label className="label">
            Numero de telefono movil<span className="asterisco">*</span>
            <input
              required
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
          <label className="label">
            Ciudad<span className="asterisco">*</span>
            <input
              required
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
          <label className="label">
            {" "}
            País/Región<span className="asterisco">*</span>
            <input
              required
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
            />
          </label>
        </div>

        <label className="label__select">
          <p>
            Con que genero te identificas?<span className="asterisco">*</span>
          </p>
          <select className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg">
            <option value="">Seleccionar</option>
            <option value="">Masculino</option>
            <option value="">Femenino</option>
            <option value="">Otro</option>
          </select>
        </label>
        <div className="contain__info2">
          <div className="contain__position">
          <p>¿Cual o cuales cargados te gustaria optar?<span className="asterisco">*</span></p>
            <p>
              <span className="span__cargos">Ten encuenta: </span>De acuerdo al cargo que postules,te
              pediremos que seas capaz de demostrarlo de manera practica durante
              el prceso de seleccion:
            </p>
            {position?.map((pos) => (
              <label>
                <input type="checkbox" key={pos.id} value={pos.position} />
                {pos.position}
                
              </label>
            ))}
          </div>
          <div className="contain__position">
           <p> ¿Cual es tu estado laboral Actual?<span className="asterisco">*</span></p>
            {apiStatus?.map((status) => (
              <label>
                <input type="radio" name="posicion laboral" key={status.id} value={status.state} /> 
                {status.state}
                
              </label>
            ))}
          </div>
        </div>
      </form>
    </div>
  )
}

export default InfoPersonal
