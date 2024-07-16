import {CDN_URL} from "../../utils/constants";
const ResturantCard = (props) => {
    const { resData } = props;
    console.log(resData)
    return (

        <div className="card-container">
            <div className="card-img">
                <img src={CDN_URL+resData.cloudinaryImageId} alt=""/>
            </div>
            <div className="card-content">
                <h1>{resData.name}</h1>
                <small>{resData.cuisines.join(', ')}</small>
                <p>{resData.avgRating} Rating</p>
                <p>Deliver - {resData.deliveryTime} min</p>
                <p>{resData.costForTwo} </p>
            </div>
        </div>

     )
}

export default ResturantCard ;