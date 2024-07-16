import User from "./UserClass"
import {useEffect, useRef} from "react";

const About = () => {
   let b = 1 ;
    const a = useRef(0)

    useEffect(() => {
        console.log(`the value of a is ${a.current}`)
    })
    return(
        <div>
            {console.log('re render')}
            <h1>About us</h1>
            <button onClick={() => {
                a.current = a.current + 1;
            }
            }>About us {a.current}</button>
            <User name={"haroon nafees"} location={"Hunain habitate"}/>

        </div>
    )
}
export default About;