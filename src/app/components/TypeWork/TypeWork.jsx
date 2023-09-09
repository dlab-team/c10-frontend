import { workinghours } from "@devsafio/app/util/workinghours"
import Dropdown from "../Dropdown/Dropdown"
import { currentsituation } from "@devsafio/app/util/currentsituation"
import { workvisa } from "@devsafio/app/util/workvisa"
function TypeWork() {
  return (
    <>
      <form>
        <div className="flex flex-col justify-center items-center my-4 mx-auto w-[996px]">
          <p className="mb-2 font-sans text-base font-medium text-center">
            Dejanos una breve descripción con tu trabajo ideal
          </p>
          <input
            type="text"
            className="mx-auto items-center border bg-sky-100 border-gray-300 rounded-md px-4 py-2 w-[996px] h-[102px] text-center"
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center space-y-1">
            <p className="font-sans text-base font-medium">
              <span>Indicanos tu disponibilidad laboral:</span>
            </p>
            <Dropdown options={workinghours} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                ¿Que describe mejor tu situación actual?
              </span>
            </p>
            <Dropdown options={currentsituation} defaulValue={false} />
          </div>
          <div className="flex flex-col items-center space-y-1">
            <p>
              <span className="font-sans text-base font-medium">
                ¿cuentas con visa de trabajo en?
              </span>
            </p>
            <Dropdown options={workvisa} defaulValue={false} />
          </div>
        </div>
      </form>
    </>
  )
}
export default TypeWork
