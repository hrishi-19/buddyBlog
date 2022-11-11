const initState={
    projects:[
        {id:1,title:"help me",content:"blah bah haal"},
        {id:2,title:"help me",content:"blah bah haal"},
        {id:3,title:"help me",content:"blah bah haal"},
    ]
}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("project created",action.project)
    }
    return state
}
export default projectReducer