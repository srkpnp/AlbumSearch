import * as actions from '../actions/actions';

describe('actions',() =>{
    it ('Should create an action set response' ,()=>{
        const expectedAction = {
            type:'FETCH_GITHUB_DATA',
            payload:[]
        }
        expectedAction(actions.fetchData([])).toEqual(expectedAction)
    })
    
})