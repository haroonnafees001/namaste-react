import ResturantCard from "./ResturantCard";
import resObj from "../../utils/mockData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
// normall variable
let listResturant = resObj;
const Body = () => {
    // second parameter are just need to add set prefix whatever your first param is or use any name but recommended to use first param name with set prefix
    // state variable - superpower variable its maintain the changes in variable throughout the component
    const [ListOfResturants,setListOfResturant] = useState([])
    const [filterResturants,setFilterResturants] = useState([])
    const [searchText,setSearchText] = useState("");

    //useEffect:
    useEffect(()=>{
        fetchData()
    })

    const fetchData = async () =>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
        );
        const resJson = await data.json()
        console.log(resJson)
        const res = resJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(res => res.info);
        console.log(res)
        setListOfResturant(res)
        setFilterResturants(res)
    }

    //Conditional Rendering
    return ListOfResturants.length < 1 ? (
        <div className="container mt-40">
            {
                [1, 2, 3, 4, 5,1, 2, 3, 4].map((e,i) => {
                    return(
                        <Shimmer key={i}/>
                    );
                })
            }
        </div>

    ):(

        <div className="container mt-40">
            <div className="searchBar">
                <input type="text" placeholder="search here..."
                       value={searchText}
                       onChange={(e)=>setSearchText(e.target.value)}
                />
                <button className="btn-search" onClick={ () =>{
                    const filteredData =  ListOfResturants.filter((res)=> res.name.toLowerCase().includes(searchText.toLowerCase()))
                     setFilterResturants(filteredData) ;

                }
                } >Search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = ListOfResturants.filter(res=>res.avgRating >4);
                    setListOfResturant(filterList)
                } }>Top Rated Resturant</button>
            </div>
            {
                //not use index as key in loop like map ,foreach,reduce .. use unique id from api its recommended
                //always add key attr when listing items . its only render that new item if you are not use key attr then it will re-render the whole list not new one so to re-render the whole list use key attr..
                //Unique key via api is > then index in loop( least priority)
                filterResturants.map((res) => <ResturantCard key={res.id} resData={res}/>)
            }
        </div>
    )

}
export default Body;