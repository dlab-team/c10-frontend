import FormRegister from "@devsafio/app/components/formRegister/FormRegister"
import Image from "next/image"

export default function Signin() {
  return (
    <div className="h-screen">
      <div className="absolute -z-10">
        <Image
          src="../../util/image/backgroundimage.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <FormRegister />
    </div>
  )
}
