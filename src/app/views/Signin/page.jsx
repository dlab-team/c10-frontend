import FormRegister from "@devsafio/app/components/formRegister/FormRegister"
// import background from "../../util/image/backgroundimage.png"

export default function Signin() {
  return (
    <div className="relative flex flex-col items-center justify-between w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover z-0"
        style={{
          backgroundImage: `url('../../../public/backgroundimage.png')`
        }}
      ></div>
      <div className="z-10 flex flex-col items-center mt-4 bg-white border-10 border-purple-900 rounded-2xl h-96 w-4/5 max-w-lg">
        <FormRegister className="mx-auto" />
      </div>
    </div>
  )
}
