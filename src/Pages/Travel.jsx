import { useState } from "react";

const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];

const Travel = () => {

    const [items, setItems] = useState(initialItems);
  const [selectedItem, setSelectedItem] = useState( items[0]);


    return (
        <div>
      
        <h2 className="text-4xl font-bold mb-2">What your travel snack?</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.title}
              {' '}
              <button 
              className="btn btn-primary btn-sm my-3"
              onClick={() => {
                setSelectedItem(item);
              }}>Choose</button>
            </li>
          ))}
        </ul>
        <p className="text-2xl font-bold">You picked :{selectedItem.title}.</p>
      
        </div>
    );
};

export default Travel;