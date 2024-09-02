export function userReducer(state = null, action){
    switch(action.type) {
        case 'LOGGED_IN_USERS': 
        return action.Payload;
        case 'LOGGED_OUT_USERS':
                localStorage.removeItem("token");   
        return action.Payload;
        case 'SIGNUP_USERS':
        return action.SignUp;
        case 'FORGOT_PASSWORD':
        return action.ForgotPassword;
        case 'CHANGE_EMAIL':
            return action.ChangeEmail;
        case 'CHANGE_PHONE':
            return action.ChangePhone;
        default:
        return state;
    }
}
