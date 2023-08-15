const InfoWorkProfile = () => {
  return (
    <>
      <form className="flex justify-center w-[996px]">
        <div className="space-y-4">
          <p className="font-sans text-xl font-normal">
            Queremos conocer tus competencias y experiencia. A continuación
            podrás elegir las competencias que conoces con respecto a 3 niveles:
          </p>
          <div className="space-y-2">
            <p>
              <span className="font-sans font-semibold">
                <strong>Nivel 1: </strong>
              </span>
              <span className="font-sans text-xl font-normal">
                No tengo experiencia laboral, pero he desarrollado proyectos
                utilizado esta tecnología/herramienta.
              </span>
            </p>
            <p>
              <span className="font-sans font-semibold">
                <strong>Nivel 2: </strong>
              </span>
              <span className="font-sans text-xl font-normal">
                Tengo poca experiencia laboral, menos de dos años, necesito
                supervisión constante.
              </span>
            </p>
            <p>
              <span className="font-sans font-semibold">
                <strong>Nivel 3: </strong>
              </span>
              <span className="font-sans text-xl font-normal">
                Tengo experiencia laboral (+2 años) y/o autonomía completa a la
                hora de desarrollar proyectos.
              </span>
            </p>
          </div>
          <p className="font-sans font-semibold">
            <strong>
              Ten en cuenta, de acuerdo a las competencias declaradas, te
              pediremos que seas capaz de demostrarlo de forma práctica durante
              el proceso de selección.
            </strong>
          </p>
        </div>
      </form>
    </>
  )
}

export default InfoWorkProfile
