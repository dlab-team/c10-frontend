

import FormRegister from "@devsafio/app/components/FormRegister/FormRegister"
// import background from "../../util/image/backgroundimage.png"

export default function Signin() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute  flex justify-center top-0 left-0 w-full h-full bg-cover z-0 backgroundRegistro">
        <div className="z-10 flex justify-center bg-white h-[616px] w-[1104px]">
          <FormRegister className="mx-auto" />
        </div>
      </div>
    </div>
  )
}
