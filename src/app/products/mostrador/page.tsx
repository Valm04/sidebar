//'use client';
//import { useState } from "react"; 

import type { Metadata } from "next";
import Contador from "../../components/Contador";

export const metadata: Metadata = {
  title: 'Mostrador',
  description: 'Contador'
} 

export default function MostradorPage() {

 /*  const [count, setCount] = useState(0); 

  const incrementar = () => {setCount(count +1)};

  const decrementar = () => {setCount(count -1 )};
 */
    return (
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <span>Carrito</span>

        <Contador value={0}/>
      </div>
      

     /*  <div className="flex flex-col items-center justify-center w-full h-screen">
        <span>Productos en el carrito</span>     
        <span className='text-7xl'>
          {count}
          </span>  

          <div className="flex my-6">
          <button
            onClick={incrementar}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
          </button>

          <button
            onClick={decrementar}
            className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            -1
          </button>
        </div>
        
      </div> */
    );
  }