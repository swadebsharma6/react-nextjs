import { useState } from "react";
import { submitForm } from "./utility";


const Form = () => {

    // visual, typing, submit, success/error

    // mandatory data state
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);


    const [status, setStatus] = useState('typing');



    if (status ==='success') return <h1 className="text-5xl font-bold text-success text-center">Thats Right!!</h1>

    // handler
    const handleTextChange =(e)=>{
      setError(null);
      setAnswer(e.target.value);
    }


    const handleFormSubmit = async (e) =>{
      e.preventDefault();
      setStatus('submitting');

      try{
        await submitForm(answer);
        setStatus('success')
      }catch(err){
        setStatus('typing');
        setError(err.message)
      }
    }
    
    return (
        <div>
        <form onSubmit={handleFormSubmit}>
        <textarea 
        value={answer} 
        onChange={handleTextChange}
        disabled ={status ==='submitting'}
        className="textarea textarea-info w-full h-[200px]" placeholder="Write Here"></textarea>
          <br />
          <button
          disabled={answer === '' || status ==='submitting'}
           className="btn btn-primary" type="submit">Submit </button>
         </form>
          <div className="text-center">
        {status ==='submitting' && <p>Loading ...........</p>}
   { error &&<p className="text-error text-2xl">{error}</p>}
          
          </div>
   
        </div>
    );
};

export default Form;