import React from "react";
import ReactDOM from "react-dom/client";

//React Element
// const heading = (
//     <h1 className="head" tabIndex="1">
//         Namaste react using JSX
//     </h1>
// );
//Title component
const Title = ()=>(
    <h1 className="head" tabIndex="1">
        Namaste react using JSX
    </h1>
);
const number = 5000;
//React Component Functional
const HeadingComponent = ()=>(
    <div id="container">
        <Title />
        <h2>{number +25 +"kp"}</h2>
        <h1>Container</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeadingComponent />);
