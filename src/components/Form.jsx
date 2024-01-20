

const Form = ({status}) => {

    // visual, typing, submit, success/error
    if (status ==='success') return <h1 className="text-5xl font-bold text-success text-center">Thats Right!!</h1>
    
    return (
        <>
        <form >
        <textarea 
        disabled={status === 'submitting'}
        className="textarea textarea-info w-full h-[200px]" placeholder="Bio"></textarea>
          <br />
          <button
          disabled ={status === 'empty' || status === 'submitting'}
           className="btn btn-primary" >Submit </button>
         </form>
          <div className="text-center">
        {status === 'submitting' &&  <p>Loading ...........</p>}
       { status === 'error'  && <p className="text-error text-2xl">There was an Error</p>}
          
          </div>
          <hr />
        </>
    );
};

export default Form;