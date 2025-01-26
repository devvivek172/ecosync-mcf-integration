const initialState = {
    inventory: [],
    orders: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_INVENTORY':
        return { ...state, inventory: action.payload };
      case 'SET_ORDERS':
        return { ...state, orders: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  