import makeAnimated from "react-select/animated"
import dynamic from "next/dynamic"

const Select = dynamic(() => import("react-select"), { ssr: false })

const animatedComponentes = makeAnimated()

export default function DropdownSimple({ options, defaultValue }) {
  return (
    <div className="box flex justify-center w-full">
      <div className="rectangle-wrapper h-12 w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
        <Select
          closeMenuOnSelect={false}
          defaultValue={defaultValue}
          componentes={animatedComponentes}
          options={options}
          //  className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </div>
  )
}
