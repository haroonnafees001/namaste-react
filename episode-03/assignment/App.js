import React from "react";
import ReactDOM from "react-dom/client"
import slogo from './logo.png'

//This is JXS syntax
const logo = (
    <div className="logo">
        <img src={slogo} width='100px'/>
    </div>);

const us='usericon';
const usericon = (
    <div className={us}>
        <img src={require('./user.png')} alt="user"/>
    </div>
);
const searchbar = (
    <div className="searchBar">
        <input type="text" placeholder="search here..."/>
    </div>
);


const HeaderComponent = () => (
    <header>
        {logo}
        {searchbar}
        {usericon}

    </header>
);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<HeaderComponent/>)