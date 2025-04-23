'use client';
import { use, useState } from "react";
interface Props{
    value?: number;
}

export const Contador = ({value = 0} : Props) => {
    const [count, setCount] = useState(value);

    return(
        <>
        <span>
            {count}
        </span>
        <div className="flex flex-row gap-2">
        <button
            onClick={() =>setCount(count + 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
          </button>

          <button
            onClick={() =>setCount(count - 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            -1
          </button>
          </div>
        </>
    )
}

export default Contador;