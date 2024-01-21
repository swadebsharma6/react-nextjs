

const PlaceTree = ({place}) => {
    const childPlaces = place.childPlaces;
    return (
        <li>
            <h2 className="text-xl font-bold">{place.title}</h2>
            {
                childPlaces.length > 0 && (
                    <ol>
                   {
                    childPlaces.map(place => <PlaceTree
                        key={place.id}
                        place ={place}
                        ></PlaceTree>)
                   }
                   </ol>

                )
            }
        </li>
    );
};

export default PlaceTree;