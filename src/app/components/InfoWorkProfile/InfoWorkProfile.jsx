const InfoWorkProfile = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
  };

  const lvlinfo = (
    <>
      <p>
        <span className="workProfileForm__text--b">Nivel 1: </span>
        <span className="workProfileForm__text">
          No tengo experiencia laboral, pero he desarrollado proyectos utilizado
          esta tecnología/herramienta.
        </span>
      </p>
      <p>
        <span className="workProfileForm__text--b">Nivel 2: </span>
        <span className="workProfileForm__text">
          Tengo poca experiencia laboral, menos de dos años, necesito
          supervisión constante.
        </span>
      </p>
      <p>
        <span className="workProfileForm__text--b">Nivel 3: </span>
        <span className="workProfileForm__text">
          Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora
          de desarrollar proyectos.
        </span>
      </p>
    </>
  );

  return (
    <div
      className="workProfileForm"
      id="contactForm"
    >
      <form
        onSubmit={handleSubmit}
        id="form-workProfile"
        className="space-y-4"
      >
        {!open && (
          <div
            className="info"
            id="info"
          >
            <p className="workProfileForm__text">
              Queremos conocer tus competencias y experiencia. A continuación
              podrás elegir las competencias que conoces con respecto a 3
              niveles:
            </p>
            {lvlinfo}
            <p className="workProfileForm__text--b">
              <strong>
                Ten en cuenta, de acuerdo a las competencias declaradas, te
                pediremos que seas capaz de demostrarlo de forma práctica
                durante el proceso de selección.
              </strong>
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-controls="info"
                aria-expanded="false"
                className="btn-app btn-app--blue"
              >
                <span className="icon">Continuar</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default InfoWorkProfile;
