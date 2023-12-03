import { useState } from "react";

const Card  = (props) => {
   const[readmore, setReadMore] = useState(false);
   let description = readmore ? props.tour.info : `${props.tour.info.substring(0,200)}....`;
    return(
        <div>
            <img src={props.tour.image}/>
            <h1>₹ {props.tour.price}</h1>
            <h1>{props.tour.name}</h1>
            <div>
                {description}
                <span onClick={()=> setReadMore(!readmore)}>
                    {
                        readmore ? "Show Less" : "Show More"
                    }
                </span>
            </div>
            <button onClick={()=> props.getRemoveId(props.tour.id)}>Not Interested</button>
        </div>

    )
};
export default Card;