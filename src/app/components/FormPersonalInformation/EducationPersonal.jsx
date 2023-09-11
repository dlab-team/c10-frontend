"use client"
import React from "react"
import "./educationPersonal.css"
import "./infoPersonal.css"

const EducationPersonal = () => {

  const handleInputChange = (event) => {}

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} className="form__education">
      <label htmlFor="maxLevelEducation"  >
        ¿Cuál es tu máximo nivel educacional?*
        <select
          className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg "
          id="maxLevelEducation"
          name="maxLevelEducation"
          onChange={handleInputChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="Univeridad completa">Univeridad completa</option>
          <option value="Univeridad incompleta o en curso">
            Univeridadin completa o en curso
          </option>
          <option value="Instituo profesional o CFT completa">
            Instituo profesional o CFT completa
          </option>
          <option value="Instituo profesional o CFT en curso">
            Instituo profesional o CFT en curso
          </option>
          <option value="Educacion media completada">
            Educacion media completada
          </option>
          <option value="Escolar completa">Escolar completa</option>
          <option value="Escolar incompleta">Escolar incompleta</option>
          <option value="Postgrado completo">Postgrado completo</option>
          <option value="Postgrado incompleto">Postgrado incompleto</option>
        </select>
      </label>
      <h3 className="span__cargos">
        A continuación, indícanos 2 (dos) carreras profesionales, cursos,
        bootcamp o certificaciones cursadas relacionadas al desarrollo de
        software, diseño o TI (puedes indicarnos las más importantes o
        actuales):
      </h3>

      <label htmlFor="course1">
        Nombre de la carrera, curso, bootcamp o certificación 1:{" "}
        <span className="asterisco">*</span>
      </label>
      <input
        id="course1"
        name=""
        type="text"
        onChange={handleInputChange}
        required
        className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
      />
      <label htmlFor="institution1">
        Nombre institución 1:<span className="asterisco">*</span>
      </label>
      <input
        id="institution1"
        name=""
        type="text"
        onChange={handleInputChange}
        required
        className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
      />
      <label htmlFor="type1">
        Tipo institución 1:<span className="asterisco">*</span>
      </label>
      <select
        className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
        id="type1"
        name="type1"
        onChange={handleInputChange}
        required
      >
        <option value="">Seleccione</option>
        <option value="Postgrado">Postgrado</option>
        <option value="Instituto ">Instituto </option>
        <option value="Universidad">Universidad</option>
        <option value="Bootcamp">Bootcamp</option>
        <option value="Otro">Otro</option>
      </select>
      <label htmlFor="course2">
        Nombre de la carrera, curso, bootcamp o certificación 2:
      </label>
      <input
        id="course2"
        name=""
        type="text"
        onChange={handleInputChange}
        className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
      />
      <label htmlFor="institution2">Nombre institución 2:</label>
      <input
        id="institution2"
        name=""
        type="text"
        onChange={handleInputChange}
        className="input__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
      />
      <label htmlFor="type2">Tipo institución 2:</label>
      <select
        id="type2"
        name="type2"
        onChange={handleInputChange}
        className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
      >
        <option value="">Seleccione</option>
        <option value="Postgrado">Postgrado</option>
        <option value="Instituto ">Instituto </option>
        <option value="Universidad">Universidad</option>
        <option value="Bootcamp">Bootcamp</option>
        <option value="Otro">Otro</option>
      </select>

      <label>
        ¿Cual es tu situacion eduacional actual(Bootcamp, universidad,
        diplomado, cursos u otros)
        <select
          name=""
          id=""
          required
          className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg"
        >
          <option>Seleccionar</option>
          <option value="Egresaso/a">Egresaso/a</option>
          <option value="Titulado/a">Titulado/a</option>
          <option value="En curso">En curso</option>
          <option value="Inconclusa">Inconclusa</option>
          <option value="Otra">Otra</option>
          <option value="Estudios tecnicos o universitarios en otras areas">
            Estudios tecnicos o universitarios en otras areas
          </option>
        </select>
      </label>
      <label required>
        <p>Nivel de ingles</p>
        <select className="select__info relative border bg-sky-100 h-12 w-64 top-0 left-0 border-solid border-#140b34  rounded-lg">
          <option>Seleccinar</option>
          <option value="Ninguno">Ninguno</option>
          <option value="Principiante A1">Principiante A2</option>
          <option value="Principiante A2">Principiante A2</option>
          <option value="Pre intermedio B1">Pre intermedio B1</option>
          <option value="Intermedio B2">Intermedio B2</option>
          <option value="Intermedio avanzado C1">Intermedio avanzado C1</option>
          <option value="Avanzado C2">Avanzado C2</option>
        </select>
      </label>
    </form>
  )
}

export default EducationPersonal