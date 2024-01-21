import { useState } from "react";
import Travel from "./Travel";

const Redundant = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [fullName, setFullName] = useState('');
  
    function handleFirstNameChange(e) {
      setFirstName(e.target.value);
    //   setFullName(e.target.value + ' ' + lastName);
    }
  
    function handleLastNameChange(e) {
      setLastName(e.target.value);
    //   setFullName(firstName + ' ' + e.target.value);
    }


    const fullName = firstName  + ' ' + lastName;

    return (
       <section className="max-w-6xl mx-auto text-center">
       <div className="mb-10  border-b-2 border-purple-500">
       <h2 className="text-2xl font-bold">Let’s check you in</h2>
       <label>
         First name:{' '}
         <input
           value={firstName}
           onChange={handleFirstNameChange}
           className="input input-bordered input-primary w-full max-w-xs mb-4"
         />
       </label>
       <br />
       <label>
         Last name:{' '}
         <input
           value={lastName}
           onChange={handleLastNameChange}
           className="input input-bordered input-primary w-full max-w-xs"
         />
       </label>
       <p>
         Your ticket will be issued to: <b>{fullName}</b>
       </p>
       </div>
       <Travel/>
       </section>
    );
};

export default Redundant;