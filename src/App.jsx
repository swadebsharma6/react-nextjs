import Form from "./components/Form";


const statuses = ['empty', 'typing', 'submitting', 'success', 'error']

const App = () => {
  return (
    <section className="max-w-5xl mx-auto">
     <div className="text-center mb-10">
     <h2 className="text-3xl font-bold">City quiz</h2>
     <p className="text-xl font-medium">
       In which city is there a billboard that turns air into drinkable water?
     </p>
     </div>
     {
      statuses.map((status )=> <Form 
        key={status}
        status={status}
        ></Form>)
     }
    </section>
  );
};

export default App;