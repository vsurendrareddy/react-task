// reducers/userReducer.js
import { FETCH_USERS, ADD_USER, EDIT_USER, DELETE_USER, SEARCH_USERS, FETCH_USERS_SUCCESS } from '../actions/types';

const initialState ={
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_USERS_SUCCESS:
      return { ...state, users: action.payload };
  
    case FETCH_USERS:
      return { ...state, users: action.payload };

    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };

    case DELETE_USER:
      console.log(action.payload)
      return {
        ...state,
        users: state.users.filter((user) =>{
               // console.log(user)
          if(user.id !== action.payload){
            return user;
          }
          //  ? action.payload : user
        }
          
        ),
      };
    
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload.userData : user
        ),
    };
  
    case SEARCH_USERS:
      return state.filter(user =>
        user.name.toLowerCase().includes(action.payload.toLowerCase()) ||
        user.username.toLowerCase().includes(action.payload.toLowerCase()) ||
        user.email.toLowerCase().includes(action.payload.toLowerCase())
      );
  
    default:
      return state;
  }
};

export default userReducer;
