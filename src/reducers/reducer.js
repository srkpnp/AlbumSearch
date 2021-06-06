const homeReducer = (state = {count:0,
    entity:['Album','Song','Artist'],
    selectedEntity:'Album',
    searchText:'',
    searchResults:[]}, action) => {
    console.log("action",action);
    switch (action.type) {        
        case "INCREMENT":
        return {
            ...state,count:action.payload + 1,
        }
        case "DECREMENT":
        return {
            ...state,count:action.payload - 1
        }
        case "FETCH_GITHUB_DATA":
        return {
            ...state,searchResults:action.payload
        }
        case "RESET_DATA":
        return {
            ...state,count:0,searchResults:{}
        }
        case "UPDATE_SEARCH_TEXT":
            return {
                ...state,searchText:action.payload
            }
        case "UPDATE_ENTITY":
        return {
            ...state,selectedEntity:action.payload
        }
      default:
        return state;
    }
  }

  export default homeReducer;
