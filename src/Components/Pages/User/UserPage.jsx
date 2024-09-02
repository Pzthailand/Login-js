import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import About from "./About";
import Contact from "./Contact";

function UserPage(){


    return(
        <div>
            <About />
            <Contact />
        </div>
    )
}
export default UserPage