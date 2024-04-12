import {Outlet} from "react-router-dom";
import ProfileCls from "./ProfileClass";
import Profile from "./Profile";
const About= ()=>{
    return (
        <div>
            <h1>About US</h1>
            <p>I'm about page</p>
            {/* <Outlet /> */}
            <ProfileCls name={"class base component"} /> 

            <Profile name={"functional component"} />
        </div>
    )
}

export default About;