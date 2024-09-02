import { Link } from "react-router-dom"

function AdminPage(){
    return(
    <div >
        <div style={{fontSize:25 , fontWeight:500}}>Administrator Manager</div>
        <hr style={{width:1000}}/>
        <div style={{float:'left', textAlign:'left' , fontSize:15 ,  fontWeight:500 }}>
                <div>Menu</div>
                <div><Link to="/ManagerUsers">Manager Users</Link></div>
                <div><Link to="/ManagerProducts">Manager Products</Link></div>
         </div>
    </div>
    )
}
export default AdminPage