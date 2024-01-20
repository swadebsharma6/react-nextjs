import { useState } from "react";


const Form = () => {
    const [inputs, setInputs] = useState([
        {
            id: 1,
            placeHolder: 'input field'
        }
    ]);

    // console.log(inputs)

    const handleAddInput =()=>{
        const nextId = inputs[inputs.length -1].id + 1;
       setInputs([
        ...inputs,
        
           {
            id: nextId,
            placeHolder: 'input field'
          }
        
       ])
    }


    return (
        <section className="max-w-4xl mx-auto text-center">
         <div className="mb-6">
         {
            inputs.map( input => (
              
               <div key={input.id} > 
               <input type="text" placeholder={input.placeHolder} className="input input-bordered input-primary w-full max-w-xs mb-4" ></input>
               </div>
               
            ))
           } 
         </div>
         <button
         onClick={handleAddInput}
         className="btn btn-secondary">Add Input</button>
        </section>
    );
};

export default Form;