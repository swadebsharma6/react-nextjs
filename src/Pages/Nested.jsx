import { useState } from "react";
import { initialTravelPlan } from "../components/places";
import PlaceTree from "./PlaceTree";

const Nested = () => {

    const [plan, setPlan] = useState(initialTravelPlan);

    const planets = plan.childPlaces;

    return (
        <section className="text-center">
            <h2 className="text-2xl font-bold text-center">Travel Plan</h2>

           
               <ol>
               {
                planets.map(place => <PlaceTree
                    key={place.id}
                    place={place}
                    ></PlaceTree>)
               }
               </ol> 
         
        </section>
    );
};

export default Nested;