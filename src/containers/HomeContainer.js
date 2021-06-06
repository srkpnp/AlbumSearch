import React, { Component } from "react";
import Home from '../components/Home';
import { connect } from 'react-redux';
import {increment,decrement,reset,fetchGithubData,updateEntity,updateSearchText} from '../actions/actions'

export class HomeContainer extends Component {

    render() {
        const name = this.props.location && this.props.location.state ? this.props.location.state.userName : ''
        console.log("this.props.---->",this.props);
        return (
            <div>
                <Home userName={name} {...this.props}/>
            </div>
        );
    }
}

export const mapStateToProps = state => {
  console.log("state---->",state);
    return {
      count: state.data.count,
      searchResults:state.data.searchResults,
      selectedEntity:state.data.selectedEntity,
      entity:state.data.entity,
      searchText:state.data.searchText
    };
  };
  
  export const mapDispatchToProps =(dispatch)=>{
    return {
      reset:(data)=>{
        dispatch(reset(data))
      },
      increment:(data)=>{
        dispatch(increment(data))
      },
      decrement:(data)=>{
        dispatch(decrement(data))
      },     
      fetchGithubData:data=>{
        dispatch(fetchGithubData(data))
      },
      updateEntity:data=>{
        dispatch(updateEntity(data))
      },
      updateSearchText:data => {
        dispatch(updateSearchText(data))
      }
    }
  }


  export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);