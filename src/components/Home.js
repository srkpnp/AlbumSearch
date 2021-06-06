import React, { Component } from "react";
import SearchField from "react-search-field";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import SearchResultsScroll from './SearchResultsScroll'

export default class Home extends Component {

    increment=()=>{        
        this.props.increment(this.props.count);  
    }

    decrement=()=>{
        this.props.decrement(this.props.count);
    }
    reset=()=>{
        this.props.reset(this.props.count);
    }

    fetchData=()=>{
        const request ={
            entity:this.props.selectedEntity,
            text:this.props.searchText
        }
        this.props.fetchGithubData(request);
    }

    updateSearchText =(value)=>{
        this.props.updateSearchText(value)
    }

    _onSelect = (value) =>{        
        this.props.updateEntity(value.value);
    }

    render() {    
        console.log('props--->',this.props);  
        let searchResults = this.props.searchResults;
        var pagArray = searchResults.slice(0, 10); 
        return (
            <div style={{'width':'100%'}}>               
               <div class="row align-items-start">
                    <div class="col" >
                            <Dropdown style={{width:'25%'}} options={this.props.entity} id='entity_selector' onChange={this._onSelect} 
                            value={this.props.entity[0]} placeholder="Select an option" />                    
                    </div>
                    <div class="col">
                            <SearchField
                            placeholder="Search..."                                               
                            classNames="test-class"
                            onChange={this.updateSearchText}
                            searchText={this.props.searchText}
                            onSearchClick={this.fetchData}
                            />
                    </div>
                    <div class="col"/>                   
                    <div class="col"/>
                    <div class="col"/>                   
                   <div class="col"/>                   
                   <div class="col"/>
                </div>
                <br/>
                {/* <div  style={{height:'400px',overflow: 'scroll'}}>
                    {
                    pagArray.length > 0 ?                    
                    pagArray.map((product, index) => (  
                    <div className="row align-items-start myDiv">                      
                        <Product key={index} product={product}>           
                            <img src={product.artworkUrl100} />
                        </Product> <br/></div>
                    )) :  'No Results Found!!!' 
                } 
                 </div> */}
                 {
                    pagArray.length > 0 ?  
                 <SearchResultsScroll {...this.props}/> :  'No Results Found!!!' }         
                            
            </div>
        );
    }
}

const Product = ({ product, children }) => (
    <div className="col myCol">
        {children}&nbsp;
      {product.trackName} ${product.trackPrice}      
    </div>
  );