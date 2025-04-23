import Image from "next/image";
import {ElementoPrincipal} from './ElementoPrincipal';

const QuestionsAnswers = [
    {
        question: "¿Totoro realmente existe en la historia, o es una creación de la imaginación infantil?",
        answer: "Esa es una de las grandes preguntas. Muchos interpretan a Totoro como un símbolo de la imaginación de Mei y Satsuki para lidiar con la angustia por la enfermedad de su madre. Pero Studio Ghibli nunca ha confirmado ni negado esta teoría, dejando que cada espectador decida."
    },
    {
        question: "¿Por qué Totoro no habla, pero se comunica tan claramente?",
        answer: "Totoro no necesita palabras para conectar. Su lenguaje es más emocional, intuitivo y simbólico, reflejando la forma en que los niños comprenden el mundo: a través de sensaciones, gestos y momentos mágicos."
    },
    {
        question: "¿Cuál es el verdadero significado de la lluvia en la icónica escena del paradero?",
        answer: "Esa escena, más allá de ser visualmente hermosa, representa la paciencia, la esperanza y la conexión silenciosa entre Satsuki y Totoro. El acto de compartir el paraguas es casi un ritual de confianza."
    },
    {
        question: "¿Hay alguna teoría oscura sobre la película?",
        answer: "Sí, hay una teoría popular que relaciona la historia con la leyenda del caso Sayama, un crimen real en Japón. Sin embargo, Studio Ghibli ha desmentido esa conexión. Aun así, el aura misteriosa de la película mantiene viva esta especulación."
    },
    {
        question: "¿Qué representa el Gatobús en términos emocionales?",
        answer: "Más allá de ser un transporte fantástico, el Gatobús puede representar el paso entre mundos: el de lo real y lo mágico, o incluso entre la vida y la muerte. Aparece cuando las emociones están al límite."
    },
    {
        question: "¿Totoro tiene una relación con la mitología japonesa?",
        answer: "Sí, muchos creen que Totoro se inspira en criaturas del folclore japonés como los kodamas (espíritus del bosque) y los tanukis. Es una mezcla de leyenda, ternura y misterio."
    },
    {
        question: "¿Por qué la figura de Totoro se volvió tan universalmente reconocida?",
        answer: "Porque representa algo profundamente humano: el deseo de sentirnos acompañados, protegidos y conectados con algo más grande que nosotros. Su diseño sencillo pero expresivo también ayuda."
    },
    {
        question: "¿Qué rol juega el silencio en la película?",
        answer: "El silencio en *Mi vecino Totoro* no es vacío, sino lleno de significado. Permite que los paisajes, las emociones y los gestos hablen por sí solos. Es casi un personaje más en la narrativa."
    },
    {
        question: "¿La película se puede considerar una forma de terapia emocional?",
        answer: "Totalmente. Muchos espectadores encuentran consuelo en Totoro durante momentos difíciles. Su atmósfera tranquila y su mensaje de esperanza la convierten en un refugio emocional."
    },
    {
        question: "¿Totoro es solo para niños?",
        answer: "Definitivamente no. Aunque tiene un enfoque infantil, los adultos encuentran en Totoro una nostalgia pura, un recordatorio de su niñez y una invitación a reconectar con su mundo interior."
    }
];


export  default function ComponentePrincipal () {
    return(
        <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold"> Mi vecino Totoro</h1>
    
            <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
                <div className="flex justify-between md:flex-row flex-col">
                    <div className="md:mb-0 mb-8 md:text-left text-center">
                            <h2 className="font-medium dark:text-white text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                            <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <Image width={40} height={40}  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg1.svg" alt="search" />
                        </div>
                    </div>

                </div>
               
            </div>
            <div>
                {
                    QuestionsAnswers.map((elemento, index) => (
                        <ElementoPrincipal key={index}
                            answer= {elemento.answer}
                            question= {elemento.question}
                            index={index}


                        />
                    ))
                }
            </div>
        </div>
    )
}