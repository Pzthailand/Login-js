import { useDispatch , useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Products from "./Products/Products.jsx"

function UserPage(){
    
    return(
        <div>
            <Products />
        </div>
    )
}
export default UserPage