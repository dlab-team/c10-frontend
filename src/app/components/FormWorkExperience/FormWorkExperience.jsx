import DropdownMultiSelect from "../Dropdown/Dropdown";
import ExperienceBar from "../ExperienceBar/ExperienceBar";

const FormWorkExperience = () => {
  return (
    <>
      <h2>Experiencia Laboral</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="mb-2">URL CV (subir como documento publico)</p>
            <ExperienceBar />
          </div>
          <div>
            <p className="mb-2">URL de Linkedin</p>
            <ExperienceBar />
          </div>
          <div>
            <p className="mb-2">URL de Github</p>
            <ExperienceBar />
          </div>
          <div>
            <p className="mb-2">URL de Portafolio/sitio web</p>
            <ExperienceBar />
          </div>
        </div>
        <div className="my-4">
          <p className="mb-2">
            <span>
              Explicanos en detalle algún proyecto que te enorgullece
              <br />
            </span>
            <span>
              Describe de que trató, tu rol en el proyect y por qué lo
              elegiste(por ejemplo arquitectura de desarrollo, equipo y tu rol
              en el proyecto, tecnologias utilizadasm difiultades y soluciones,
              funcionalidades, objetivos, etc. Recuerda No esperamos link, si no
              explicación)
            </span>
          </p>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>
              <span>
                Selecciona 3 habilidades blandas que te representen
                <br />
              </span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>
                ¿Cuántos años de experiencia laboral posees en desarrollo de
                software y/o diseño?
                <br />
              </span>
            </p>
            <DropdownMultiSelect />
          </div>
        </div>
        <button
          type="submit"
          className="btn-app btn-app-blue mt-4"
        >
          Continuar
        </button>
      </form>
    </>
  );
};

export default FormWorkExperience;
