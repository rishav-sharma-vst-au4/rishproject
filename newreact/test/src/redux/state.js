const initialState = {
  areas: [
    "Jayanagar",
    "Basavanagudi",
    "JP_Nagar",
    "Padmanabhanagar",
    "Banashankari",
    "Uttarahalli",
    "Kumaraswamy",
    "Girinagar"
  ],
  categories: [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery",
    "Hardware",
    "Flower",
    "Newsagent",
    "Furniture"
  ],
  shops: []
};

const appReducer = (state = initialState, action) => {
  let tempState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
      case "ADD_SHOP":{
          tempState.shops.unshift(action.payload);
          return tempState;
      }
    default:
      return state;
  }
};

export default appReducer;
