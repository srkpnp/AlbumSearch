
import axios from 'axios';

//const apiUrl = 'https://api.github.com/users/KrunalLathiya';



export const reset =(data) =>{
  return {
    type:'RESET_DATA'
  }
}

export const increment = (data) => {
    return {
        type:"INCREMENT",
        payload:data  
    }
};

export const decrement = (data) => {
    return {
        type:"DECREMENT",
        payload:data  
    }
};

export const updateEntity = (data) => {
  return {
      type:"UPDATE_ENTITY",
      payload:data  
  }
};

export const fetchData = (data) => {
    return {
      type: 'FETCH_GITHUB_DATA',
      payload:data  
    }
  };

  export const updateSearchText =(data) =>{
    return {
      type:'UPDATE_SEARCH_TEXT',
      payload:data
    }
  }

export const fetchGithubData = (request) => {
  console.log('request--->',request);
  const apiUrl = 'https://itunes.apple.com/search?term='+request.text+'&country=us&entity='+request.entity.toLowerCase();
  //const apiUrl = 'https://itunes.apple.com/search?term='+request.text+'&country=us&entity=album';
    return (dispatch) => {    
      dispatch(fetchData([]));
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchData(response.data.results))
        })
        .catch(error => {
          throw(error);
        });
    };
};

