export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>dispatch({type:'LOGIN_SUCCESS'})).catch(err=>dispatch({type:'LOGIN_ERROR',err}))
    }
}
export const signOut=()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase()
        firebase.auth().signOut().then(()=>dispatch({type:'LOGOUT_SUCCESS'})).catch(err=>dispatch({type:'LOGIN_ERROR',err}))
    }
}
export const signUp=(newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase()
        const firestore=getFirestore()
        console.log(newUser)
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(res=>{
            return firestore.collection('user').doc(res.user.uid).set(
                {
                    firstName:newUser.firstname,
                    lastName:newUser.lastname,
                    initials:newUser.firstname[0]+newUser.lastname[0]
                }
            )
        }).then(()=>dispatch({type:'SIGNUP'})).catch(err=>dispatch({type:'SIGNUP_ERROR',err}))
    }
}