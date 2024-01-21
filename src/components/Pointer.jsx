import { useState } from "react";


const Pointer = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    
    const handlePointerMove =(e) =>{
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }


    return (
        <section
        className="relative max-w-5xl mx-auto h-screen"
       
        onPointerMove={handlePointerMove}
        >
          <div
          style={{
            position:'absolute',
            backgroundColor: 'red',
            borderRadius:'50%',
            left: -10,
            top:-10,
            width: 40,
            height:40,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          >
          
          </div>  
        </section>
    );
};

export default Pointer;