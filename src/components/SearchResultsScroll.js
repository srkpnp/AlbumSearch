import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  display:'block',
  height: 115,
  border: "2px solid grey",
  margin: 6,
  padding: 8
};

class SearchResultsScroll extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: this.props.searchResults.slice(0, 10),
      hasMore:true
    };
  }
  

  fetchMoreData = () => {
    if (this.state.items.length >= this.props.searchResults.length) {
      this.setState({ hasMore: false });
      return;
    }
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(this.props.searchResults.slice(this.state.items.length, this.state.items.length+10))
      });
    }, 1500);
  };

  render() {
    
    return (
      <div>
        {/* <h1>Search Results for {this.props.searchText}</h1> */}
        <hr />
        <div id="scrollableDiv" style={{ height: 300, overflow: "auto" }}>
          <InfiniteScroll
            dataLength={this.state.items.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {this.state.items.map((product, index) => (
              <div style={style} key={index}>
                <img src={product.artworkUrl100} />&nbsp;
                {product.artistName}&nbsp; ${product.collectionPrice} &nbsp;{product.collectionCensoredName}             
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default SearchResultsScroll;
