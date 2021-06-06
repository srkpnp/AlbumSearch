import React from 'react';
import {configure, shallow} from 'enzyme';
import {HomeContainer} from '../containers/HomeContainer';
import * as actions from '../containers/HomeContainer';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter : new Adapter()})
describe( ' HomeContainer', () => {
    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<HomeContainer/>)
    })

    it('should test mapStateToProps', () => {
        const expectedAction = {
            count: 1,
            searchResults:[],
            selectedEntity:'Album',
            entity:['Album','Music'],
            searchText:'Rahman'
        }

        const state={
            data :{
                count: 1,
                searchResults:[],
                selectedEntity:'Album',
                entity:['Album','Music'],
                searchText:'Rahman'
            }
        }

        expect(actions.mapStateToProps(state)).toEqual(expectedAction)
    })

    it('Should test mapStatetoPRops method', () =>{
        const dispatch =() =>{}
        expect(actions.mapDispatchToProps(dispatch)).toMatchSnapshot()
    })
})