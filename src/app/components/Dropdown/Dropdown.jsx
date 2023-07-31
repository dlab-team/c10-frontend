import makeAnimated from "react-select/animated";
import { Lenguaje } from "@devsafio/util/Lengueje";
import dynamic from 'next/dynamic';

const Select = dynamic(() => import('react-select'), { ssr: false })

const animatedComponentes = makeAnimated();

export default function Dropdown() {
  return (
    <div className="box flex justify-center w-full">
      <div className="rectangle-wrapper h-12 w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
        <Select
          defaultValue={Lenguaje}
          componentes={animatedComponentes}
          options={Lenguaje}
          //  className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
    </div>
  );
}
