import {Routes, Route} from "react-router-dom"

//Auth
//SignUp
import SignUpEmail from "../Pages/Auth/SignUp/SignUpEmail.jsx"
import VerifySignUpEmail from "../Pages/Auth/SignUp/VerifySignUpEmail.jsx"
import SignUp from "../Pages/Auth/SignUp/SignUp.jsx"
//SingIn
import SignIn from "../Pages/Auth/SignIn"

//Forgot Password
import ForgotPassword from "../Pages/Auth/ForgotPassword/ForgotPassword.jsx"
import VerifyForgotPasswordEmail from "../Pages/Auth/ForgotPassword/VerifyForgotPasswordEmail.jsx"
import ChangePassword from "../Pages/Auth/ForgotPassword/ChangePassword"

//Profile
import Profile from "../Pages/Auth/Profile/Profile.jsx"

import VerifyChangeEmail from "../Pages/Auth/Profile/ChangeEmail/VerifyChangeEmail.jsx"
import ChangeEmail from "../Pages/Auth/Profile/ChangeEmail/ChangeEmail.jsx" 

import VerifyChangePhone from "../Pages/Auth/Profile/ChangePhone/VerifyChangePhone.jsx"
import ChangePhone from "../Pages/Auth/Profile/ChangePhone/ChangePhone.jsx"



//Administrator
import AdminPage from "../Pages/Administrator/AdminPage"
import ManagerUsers from "../Pages/Administrator/ManagerUsers/ManagerUsers.jsx"
import ManagerProducts from "../Pages/Administrator/ManagerProducts/ManagerProducts.jsx"
import ProductCreate from "../Pages/Administrator/ManagerProducts/ProductCreate.jsx"
import ProductUpdate from "../Pages/Administrator/ManagerProducts/ProductUpdate.jsx"


//User
import UserPage from "../Pages/User/UserPage"
import News from "../Pages/User/News"
import Products from "../Pages/User/Products"
import About from "../Pages/User/About"
import Contact from "../Pages/User/Contact"
import Error from "../Pages/User/Error"

//Routes
import ProtectUserRoute from '../Routes/ProtectUserRoute'
import ProtectAdminRoute from '../Routes/ProtectAdminRoute'
import ProtectRouteSignIn from "../Routes/ProtectRouteSignIn"

export const Routed = ()=> {
return(
    <div>
            <Routes>
                
                <Route path="/" element={<UserPage/>}/>

                <Route path="/SignIn" element={
                    <ProtectRouteSignIn>
                        <SignIn/>
                    </ProtectRouteSignIn>
                }/>
                
                <Route path="/SignUpEmail" element={<SignUpEmail/>}/>
                <Route path="/VerifySignUpEmail" element={<VerifySignUpEmail/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>

                <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
                <Route path="/VerifyForgotPasswordEmail" element={<VerifyForgotPasswordEmail/>}/>
                <Route path="/ChangePassword" element={<ChangePassword/>}/>


                <Route path="/UserPage" element={<UserPage/>}/>
                <Route path="/News" element={<News/>}/>
                <Route path="/Products" element={
                    <ProtectUserRoute>
                        <Products/>
                    </ProtectUserRoute>
                }/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contact" element={<Contact/>}/>

                <Route path="/Profile" element={
                    <ProtectUserRoute>
                        <Profile/>
                    </ProtectUserRoute>
                }/>

                <Route path="/VerifyChangeEmail" element={<VerifyChangeEmail />}/>
                <Route path="/ChangeEmail" element={
                    <ProtectUserRoute>
                        <ChangeEmail />
                    </ProtectUserRoute>
                }/>

                <Route path="/VerifyChangePhone" element={<VerifyChangePhone />}/>
                <Route path="/ChangePhone" element={
                    <ProtectUserRoute>
                        <ChangePhone />
                    </ProtectUserRoute>
                }/>   

               
                {/*Role Adminstrator*/}
                <Route path="/AdminPage" element={
                    <ProtectAdminRoute>
                        <AdminPage/>
                    </ProtectAdminRoute>
                }/>

                <Route path="/ManagerUsers" element={
                    <ProtectAdminRoute>
                        <ManagerUsers />
                    </ProtectAdminRoute>
                }/>

                <Route path="/ManagerProducts" element={
                    <ProtectAdminRoute>
                        <ManagerProducts />
                    </ProtectAdminRoute>
                }/>

                <Route path="/ProductCreate" element={
                    <ProtectAdminRoute>
                        <ProductCreate />
                    </ProtectAdminRoute>
                }/>

                <Route path="/ProductUpdate/:id" element={
                    <ProtectAdminRoute>
                        <ProductUpdate />
                    </ProtectAdminRoute>
                }/>

                <Route path="/*" element={<Error/>}/>

            </Routes>
    </div>
    )
}