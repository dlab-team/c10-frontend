import Dropdown from '../Dropdown/Dropdown'
import InfoWorkProfile from '../InfoWorkProfile/InfoWorkProfile'

const FormWorkProfile = () => {
  return (
    <>
      <InfoWorkProfile />
      <form>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p>
              <span>Lenguaje de nivel 1</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Bases o framwork nivel 1</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 1</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Lenguaje de nivel 2</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Bases o framwork 2</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 2</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 3</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Bases o framwork 3</span>
            </p>
            <Dropdown />
          </div>
          <div>
            <p>
              <span>Herramientas nivel 3</span>
            </p>
            <Dropdown />
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
      </form>
    </>
  )
}

export default FormWorkProfile
