const INITIALSTATE = {
  email: '',
  user:{}
};

export const RootRed = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case 'Email':
      return{...state,email: action.payload};
    default:
      return state;
  }
};

export const Userdata=(state = INITIALSTATE, action)=>{
  switch (action.type) {
    case 'USER':
      return{...state,user: action.payload};
    default:
      return state;
  }
}

