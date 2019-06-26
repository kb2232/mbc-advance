import React from 'react';
import { Query } from 'react-apollo';
import SearchItem from './SearchItem';
import gql from 'graphql-tag';

class SearchInfo extends React.Component{
  state={
    inputText:"-."
  }
  render()
  {
    return(
      <div>
      <div>Search for individual member below</div>
      <br />
      <SearchItem callMeWhenSubmitSearch={text=>this.setState({inputText:text})} />
      <Query
        query={gql`
          {
            MBC_Member(firstname:"${this.state.inputText}"){
              firstname
              cellphone
            }
          }
        `}
      >
        {
          ({loading, error, data})=>{
            if (loading) return "Search still loading...";
            if (error) return "Try Again";
            return data.MBC_Member.map(({cellphone,firstname})=>{
              return (
                <div key={cellphone}>
                  {firstname} - <a href={"tel:"+cellphone}>call</a>
                </div>
              )
            })
          }
        }
      </Query>
    </div>
    )
  }
}
  

export default SearchInfo;