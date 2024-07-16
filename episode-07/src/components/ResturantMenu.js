import {useEffect, useState} from 'react'
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom';
import {MENU_URL} from "../../utils/constants";

const ResturantMenu = () =>{

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams()

    //if a didnt put [] in useEffect so it will call every time whenever ResturantMenu compoenet call
    useEffect( () =>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json();
        setResInfo(json.data)
    }

    if(!resInfo ) return  <Shimmer/>;

    const { name, city,costForTwoMessage,cuisines,avgRating } =
        resInfo?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card

    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card)
    return (
        <div className="menu">
            <h1>{name} </h1>
            <small>{cuisines.join(', ')} - {city} - {avgRating}</small>
            <small>{costForTwoMessage}</small>

            <h1>Menu</h1>
            <ul>
                {itemCards.map((el) =>  <li key={el.card.info.id}> { el.card.info.name}  - { el.card.info.price}  </li>)}
            </ul>
        </div>
    )
}
export default ResturantMenu;