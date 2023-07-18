import DropdownMultiSelect from "../Dropdown/Dropdown";
import InfoWorkProfile from "../InfoWorkProfile/InfoWorkProfile";

const FormWorkProfile = () => {
  return (
    <>
      <h2>Perfil Laboral</h2>
      <InfoWorkProfile />
      <form>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p>
              <span>Lenguaje de nivel 1</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Bases o framwork nivel 1</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 1</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Lenguaje de nivel 2</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Bases o framwork 2</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 2</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 3</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Bases o framwork 3</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 3</span>
            </p>
            <DropdownMultiSelect />
          </div>
          <div className="box bg-transparent flex flex-row justify-center w-full">
            <div className="rectangle-wrapper border-0 h-26 w-96"></div>
            <div className="rectangle bg-blue-100 border border-purple-900 border-opacity-50 rounded-lg h-26 fixed top-0 left-0 w-96"></div>
          </div>
          <div className="my-4">
            <p className="mb-2">
              Indicanos alguna otra competencia, herramienta o tecnología que
              conozcas que creas importante agregar:
            </p>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
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

export default FormWorkProfile;
