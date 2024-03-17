import React from "react";
import ReactDOM from "react-dom"
// JSX transpile before its react to js engine and convert it to react element
//JSX => babel => React.createElement => JS object=> html Element



const heading = React.createElement("h1",{id:"heading"},'this is react heading');


const jsxHeading = (
    <h1 className='head'>
        This is JSX heading
    </h1>
);


//REACT COMPONENT
//CLASS BASED COMPONENT - OLD WAY ( NO BODY USES)
//FUNCTIONAL COMPONENT - NEW WAY
//EVERY THING IN REACT IS COMPONENT
//WHAT IS FUNCTIONAL COMPONENT ?
//A NORMAL FUNCTION WHICH RETURN THE SOME PIECE OF JSX IS CALLED FUNCTIONAL COMPONENT
//


// const HeadingComponent = () =>{
//     return  (
//         <h1 className='head'>
//             This is  heading component
//         </h1>
//     );
// };

const num = 10000;
const elem = <span>React Element</span>;
const Title = () => (<h1 className='title' tabIndex="1">{num} This is Title component</h1>)
const HeadingComponent = () => (<h1 className='head'>{elem} {Title()} --- <Title/>----- <Title></Title>.....React functional heading component</h1>);
const Content = () => (<p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, autem cum deleniti dicta distinctio eligendi et ipsum magni maiores molestias odit pariatur perferendis praesentium quas ratione sunt voluptatum. Est, id.</p>);

// COMPONENT COMPOSITION - COMBINE SMALLER COMPONENT INTO ONE ONE
const MainComponent = () => (
    <div>
        <Title/>
        <HeadingComponent/>
        <Content/>
    </div>

);
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<MainComponent/>)