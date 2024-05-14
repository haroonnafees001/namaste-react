import {LOGO_URL} from "../../utils/constants";
import {useState} from 'react';
import {Link} from 'react-router-dom'
export const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    console.log('header render')
    return(
        <header>
            <div className="logo">
                <Link to="/"><img src={LOGO_URL} width='60px'/></Link>
            </div>
            <div className="usericon">
                <img src={require('../../user.png')} alt="user"/>

            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <button className='btn' onClick={()=>{
                        btnName == "login" ? setBtnName('Logout'): setBtnName('login');
                    }}>{btnName}</button>
                </li>
            </ul>

        </header>
        )

};

