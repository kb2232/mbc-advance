import React from 'react';

class SearchBar extends React.Component{
  state = {
    inputText:""
  }
  onInputChange(event){
    this.setState({inputText:event.target.value})
  }
  onFormSubmit(event){
    // using the arrow function allows 'this' to be binded
    // to stop the automatic reloading
    event.preventDefault();
    this.props.callMeWhenSubmitSearch(this.state.inputText);
  }
  render(){
    const {FormContainer, InputSearchContainer, ButtonContainer } = styles;
    return(
      <div>
        <form style={FormContainer} onSubmit={(event)=>this.onFormSubmit(event)}>
          <input 
              type="text"
              value={this.inputText}
              placeholder="Search bar"
              onChange={(event)=>this.onInputChange(event)}
              style={InputSearchContainer}

          />
           <input type="submit" value="Search" style={ButtonContainer} />
        </form>
      </div>
    )
  }
}
const styles = {
  FormContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'90vw'
  },
  InputSearchContainer:{
    width:"80%",
    height:'40px',
    borderBottomWidth:'4px',
    borderBottomColor:'#000',
    alignSelf: 'stretch'
  },
  ButtonContainer:{
    width:"20%",
    height:"40px",
    marginLeft:'10px',
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    cursor:'pointer'
  }
}
export default SearchBar;