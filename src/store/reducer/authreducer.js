const initState={
    authError:null
}
const authReducer=(state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log("logged sucessfully")
            return state
        case 'LOGIN_ERROR':
            return{...state,authError:"login failed"}
        case 'LOGOUT_SUCCESS':
            console.log("signout sucessfully")
            return state
        case 'SIGNUP':
                console.log("signup sucessfully")
                return{...state,authError:null}
        case 'SIGNUP_ERROR':
                console.log(action.err.message)
                return{...state,authError:action.err.message}
        default:
            return state;
    }
}
export default authReducer