
const initialState = {
    auth: false
  }
  
const authReducer = (state = initialState, action)=> {
    switch(action.type){
        case 'LOGIN': 
            console.log('Login action .... ')
            return {auth: true}
        
        case 'LOGOUT': 
            return {auth: false}
  
        default:
          return state
        
    }
  }

  export default authReducer;