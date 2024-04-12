import {Outlet} from "react-router-dom";
import ProfileCls from "./ProfileClass";
import Profile from "./Profile";
const About= ()=>{
    return (
        <div>
            <h1>About US</h1>
            <p>I'm about page</p>
            {/* <Outlet /> */}
            <ProfileCls name={"kp profile"} /> 

            <Profile name={"kp functional"} />
        </div>
    )
}

export default About;