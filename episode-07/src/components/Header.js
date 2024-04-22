import {LOGO_URL} from "../../utils/constants";
import {useState} from 'react';
export const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    console.log('header render')
    return(
        <header>
            <div className="logo">
                <img src={LOGO_URL} width='60px'/>
            </div>

            <div className="usericon">
                <img src={require('../../user.png')} alt="user"/>
                <button className='btn' onClick={()=>{
                    btnName == "login" ? setBtnName('Logout'): setBtnName('login');
                }}>{btnName}</button>
            </div>
        </header>
        )

};

